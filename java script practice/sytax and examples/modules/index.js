//Module = An external file that contains reusable code
//         that can be imported into other javaScript files
//         can contain variables,classes,functionss ... and more
import {PI,getCircumference,getArea,getVolume} from './mathUtil.js';
console.log(PI);
const circumference=getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);
console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2}`);
console.log(`${volume.toFixed(2)}cm^3}`);