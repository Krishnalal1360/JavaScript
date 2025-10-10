var arr = [10, 20, 30];
console.log(arr);
//Modify
arr[0] = 1, arr[arr.length-1] = 3;
console.log(arr);
//Delete
delete arr[1];
console.log(arr);
console.log(arr[1]);