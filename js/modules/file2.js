// Export cái gì thì import cái đó 
// 1 module có 1 export default 



import showlog from "./export-file.js";
// import {
//     type_err,
//     type_log,
//     type_warn
// } from './constan/file3.js';

import * as type from './constan/file3.js';
showlog("aaaaaaaaaa", type.type_err);