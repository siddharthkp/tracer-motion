import React from 'react';
import { motion } from 'framer-motion';
import { Leva, useControls } from 'leva';
import useMotionValues from './use-motion-values';

const target = {};
const handler = {
  get: (target, prop) => {
    return (props) => <Wrapper props={props} type={prop} />;
  },
};

export const tracer = new Proxy(target, handler);

const Wrapper = ({ type, props }) => {
  const MotionComponent = motion[type];

  const {
    initial = {},
    variants,
    style = {},
    onAnimationComplete,
    onAnimationStart,
    ...rest
  } = props;

  let initialValues = null;

  if (variants && variants[initial]) initialValues = variants[initial];
  else initialValues = initial;

  const [animatedStyles, Frames, ref] = useTracer(initialValues);

  const [startPosition, setStartPosition] = React.useState({
    top: null,
    left: null,
  });

  const combinedOnAnimationStart = (...args) => {
    setStartPosition({
      top: ref.current.getBoundingClientRect().top,
      left: ref.current.getBoundingClientRect().left,
    });
    if (typeof onAnimationStart === 'function') onAnimationStart(...args);
  };

  const [animationComplete, setAnimationComplete] = React.useState(false);
  const combinedOnAnimationComplete = (...args) => {
    setAnimationComplete(true);

    if (typeof onAnimationComplete === 'function') onAnimationComplete(...args);
  };

  return (
    <>
      <MotionComponent
        ref={ref}
        initial={initial}
        variants={variants}
        style={{ ...style, ...animatedStyles }}
        onAnimationStart={combinedOnAnimationStart}
        onAnimationComplete={combinedOnAnimationComplete}
        {...rest}
      />
      {animationComplete && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Frames startPosition={startPosition} />
        </motion.div>
      )}
    </>
  );
};

const useTracer = (initial) => {
  const motionValues = useMotionValues(initial);

  // clean up keys that don't exist
  Object.keys(motionValues).forEach((key) => {
    if (typeof initial[key] === 'undefined') delete motionValues[key];
  });

  const initialState = {};
  Object.keys(motionValues).forEach((key) => {
    initialState[key] = [];
  });
  const [values, setValues] = React.useState(initialState);

  React.useEffect(() => {
    const unsubcribeFns = Object.keys(motionValues).map((key) => {
      return motionValues[key].onChange((v) => {
        setValues((values) => {
          return { ...values, [key]: [...values[key], v] };
        });
      });
    });

    return () => {
      unsubcribeFns.forEach((fn) => {
        fn();
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const style = motionValues;
  const FramesComponent = ({ startPosition }) => {
    return <Frames values={values} startPosition={startPosition} />;
  };

  const ref = React.useRef(null);

  return [style, FramesComponent, ref];
};

const Frames = ({ values, startPosition }) => {
  const length = Math.max(...Object.values(values).map((arr) => arr.length));

  const lastValues = {};

  Object.keys(values).forEach((key) => {
    const valuesForKey = values[key];
    lastValues[key] = valuesForKey[valuesForKey.length - 1];
  });

  const { 'frame #': frame } = useControls({
    'frame #': { value: 0, min: 0, max: length - 1, step: 1 },
  });

  const frames = [];
  for (let index = 0; index < length; index++) {
    const style = {};
    Object.keys(values).forEach((key) => {
      style[key] = values[key][index] || lastValues[key];
    });

    frames.push(
      <motion.div
        key={index}
        className="box"
        style={{
          position: 'absolute',
          ...startPosition, // try to align with original
          ...style,
          opacity: index === frame ? style.opacity : 0.05,
          boxShadow: index === frame ? 'inset 0 0 0 2px blue' : style.boxShadow,
          zIndex: index === frame ? 99999999 : style.zIndex,
        }}
      />
    );
  }

  const frameMotionValues = {};
  Object.keys(values).forEach((key) => {
    frameMotionValues[key] = values[key][frame] || lastValues[key];
  });

  return (
    <div style={{ position: 'absolute', top: 0, left: 0 }}>
      {frames} <Leva titleBar={{ filter: false }} />
    </div>
  );
};
