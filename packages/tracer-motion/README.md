<p align="center">
  <img src="https://raw.githubusercontent.com/siddharthkp/tracer-motion/main/packages/tracer-motion/demo.gif" height="200px"/>
  <br><br>
  <b>Visual debugger for framer-motion</b>
  <br><br>
  <img src="https://img.shields.io/badge/status-experimental-de9214?style=flat-square"/>
  <br><br>
  <a href="https://codesandbox.io/s/tracer-motion-x4570">Demo</a> 
</p>

&nbsp;

#### install

```
npm install tracer-motion --save-dev

# or

yarn add tracer-motion --dev
```

&nbsp;

#### usage

```diff
import { motion } from 'framer-motion';
+ import { tracer } from 'tracer-motion';

function App() {
  return (
    <>
      <div>
-       <motion.div
+       <tracer.div
          className="box"
          initial={{ x: 0, rotate: 0 }}
          animate={{ x: 400, rotate: 180 }}
          transition={{ type: 'spring', stiffness: 50 }}
        />
      </div>
    </>
  );
}
```

&nbsp;

Note: This does not support the entire API surface area of `motion`

&nbsp;

#### like it?

:star: this repo

&nbsp;

#### license

MIT © [siddharthkp](https://github.com/siddharthkp)

