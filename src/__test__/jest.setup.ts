import 'cross-fetch/polyfill'; 

import { TextEncoder, TextDecoder } from 'util';

// @ts-ignore
global.TextEncoder = require("util").TextEncoder;
// @ts-ignore
global.TextDecoder = require("util").TextDecoder;
