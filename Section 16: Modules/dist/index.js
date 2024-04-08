// files not with an export are considered a script rather than module
// in TS, script have shared global namespace
// TS assumes dev will handle it
// but it run into problem in JS
// console.log(sample([1, 2, 3]))
import { add, sample } from './util.js';
console.log(add(1, 2, 3));
console.log(sample([1, 2, 3, 4]));
