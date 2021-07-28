import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { motion } from 'framer-motion';
import { tracer } from 'tracer-motion';

function App() {
  return (
    <>
      <div>
        <tracer.div
          className="box"
          variants={{
            from: { x: 0, rotate: 0 },
            to: { x: 400, rotate: 180 },
          }}
          initial="from"
          animate="to"
          transition={{ type: 'spring', stiffness: 50 }}
        />
      </div>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
