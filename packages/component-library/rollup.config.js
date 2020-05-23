// node-resolve will resolve all the node dependencies
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy'
import bundleSize from 'rollup-plugin-bundle-size'

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/component.bundle.js',
    format: 'cjs',
  },
  // All the used libs needs to be here
  external: [
    'react',
    'react-dom',
    'react-router-dom',
    'prop-types',
    'styled-components',
    'styled-system',
    'rebass',
    '@rebass/layout',
    '@rebass/forms',
    './Artifika-Regular.woff',
    './Artifika-Regular.woff2',
  ],
  plugins: [
    resolve(),
    babel({
      exclude: ['node_modules/**', '*.woff*'],
    }),
    commonjs({
      namedExports: {
        'react-is': ['typeOf', 'isElement', 'isValidElementType'],
      },
    }),
    copy({
      targets: [
        {
          src: ['src/fonts/*.woff*'],
          dest: 'lib/fonts',
        },
      ],
    }),
    bundleSize(),
  ],
}
