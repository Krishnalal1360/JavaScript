var arr = [1, 2, 3, 4, 5];
//Slice
var r = arr.slice(0, 3);
console.log(r);
r = arr.slice(-3, -1);
console.log(r);
r = arr.slice(-3);
console.log(r);
//Splice
var arr = [10, 50];
arr.splice(1, 0, 20, 30, 40);
console.log(arr);
var arr = [10, 50];
arr.splice(-1, 0, 20, 30, 40);
console.log(arr);
var arr = [10, 50, 50, 60];
arr.splice(1, 1, 20, 30, 40);
console.log(arr);