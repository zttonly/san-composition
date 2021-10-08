import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';

export default {
    input: 'index.js',
    output: [
        {
            file: 'dist/index.common.js',
            format: 'cjs'
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm'
        },
        {
            file: 'dist/index.umd.js',
            name: 'sca',
            format: 'umd'
        }
    ],
    plugins: [
        resolve({
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        babel({
            babelHelpers: 'bundled'
        }),
        terser()
    ],
    external: ['san']
};
