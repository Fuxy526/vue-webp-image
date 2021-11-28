import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/vue-webp-image.js',
    format: 'umd',
    name: 'VueWebpImage',
  },
  plugins: [
    commonjs(),
    nodeResolve({
      mainFields: [
        'browser',
        'jsnext:main',
        'module',
        'main'
      ],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
};
