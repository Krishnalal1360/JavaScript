let arr = [1, 2, 3];
console.log(arr);
//
let obj = {
    name: "Alex",
    age: 21,
};
console.log(obj);
//
let str = new String("JS");
console.log(str);
//
let iter = arr[Symbol.iterator]();
let result = iter.next();
console.log("Iterator values: ");
while(!result.done){
    console.log(`Value: ${result.value}`);
    result = iter.next();
}
//
console.log("Iterator values: ");
iter = str[Symbol.iterator]();
result = iter.next();
console.log("Iterator values: ");
while(!result.done){
    console.log(`Value: ${result.value}`);
    result = iter.next();
}