var arr = new Array(1, 2, 3);
console.log(arr, typeof arr);
var arr = [4, 5, 6];
console.log(arr, typeof arr);
//
arr.forEach((item, index)=>{
    console.log(index, item);
});