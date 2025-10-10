var arr = [1, 2, 3];
//Array.isArray
var r = Array.isArray(arr);
console.log("is arr array: "+r);
//indexOf
var arr = [1, 2, 3, 4, 5];
var r = arr.indexOf(3, 0);
console.log(r);
var r = arr.indexOf(3, 3);
console.log(r);
//lastIndexOf
var r = arr.lastIndexOf(3, 4);
console.log(r);
var r = arr.lastIndexOf(3, 1);
console.log(r);