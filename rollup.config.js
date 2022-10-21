import path       from 'path';

import commonjs   from '@rollup/plugin-commonjs';
import resolve    from '@rollup/plugin-node-resolve';
import virtual    from '@rollup/plugin-virtual';

// The deploy path for the server bundle which includes the common code.
const s_DEPLOY_PATH = './external';

// Produce sourcemaps or not
const s_SOURCEMAP = true;

export default () =>
{
   return [
      {
         input: 'pack',
         output: [{
            file: `${s_DEPLOY_PATH}${path.sep}tinycolor.js`,
            generatedCode: { constBindings: true },
            sourcemap: s_SOURCEMAP,
         }],
         plugins: [
            virtual({
               pack: `export { default as tinycolor } from 'tinycolor2';`
            }),
            resolve({ browser: true }),
            commonjs()
         ]
      },
      {
         input: 'pack',
         output: [{
            file: `${s_DEPLOY_PATH}${path.sep}webfontloader.js`,
            generatedCode: { constBindings: true },
            sourcemap: s_SOURCEMAP,
         }],
         plugins: [
            virtual({
               pack: `export { default as WebFont } from 'webfontloader';`
            }),
            resolve({ browser: true }),
            commonjs()
         ]
      }
   ];
};
