//import {arr1, obj1, student} from "./09_ModuleExport.js";
import * as MODULE from "./09_ModuleExport.js";
//
console.log("Array elements: ");
MODULE.arr1.forEach((element) => {
    console.log(element);
});
//
console.log("Object Key-Value Pairs: ");
for(let key in MODULE.obj1){
    console.log(`${key}=>${MODULE.obj1[key]}`);
}
//
let s1 = new MODULE.student("John");
s1.message();
//
console.log(MODULE);
//
console.log(MODULE.default());