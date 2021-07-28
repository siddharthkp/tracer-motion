import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

import pkg from './package.json';

export default [
  {
    input: pkg.source,
    output: [{ file: pkg.main, format: 'cjs' }],
    plugins: [
      babel({
        presets: [
          ['@babel/preset-env', { modules: false }],
          '@babel/preset-react',
        ],
        exclude: 'node_modules/**',
      }),
      commonjs(),
    ],
  },
];
