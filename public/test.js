import { tinycolor } from '../external/tinycolor.js';
import { WebFont } from '../external/webfontloader.js';

// ESM imports from above.
console.log(`! ESM import tinycolor: `, tinycolor);
console.log(`! ESM import WebFont: `, WebFont);

// No global variables defined:
console.log(`! window.tinycolor: `, window.tinycolor);
console.log(`! window.WebFont: `, window.WebFont);

