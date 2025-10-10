var arr = [
    [1, 2],
    [3, 4]
];
console.log(arr, typeof arr);
arr.forEach((item, index)=>{
    console.log(index, item);
});
console.log();
//
var arr = new Array(
    [1, 2],
    [3, 4]
);
console.log(arr, typeof arr);
arr.forEach((item, index)=>{
    console.log(index, item);
});
//
console.log()
//
for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr[i].length;j++){
        console.log(arr[i][j]);
    }
}