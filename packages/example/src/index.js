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
          initial={{ x: 0, rotate: 0 }}
          animate={{ x: 400, rotate: 180 }}
          transition={{ type: 'spring', stiffness: 50, delay: 2 }}
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
