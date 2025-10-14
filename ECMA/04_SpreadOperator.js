let f1 = (...args)=>{
    let sum = 0;
    for(let key in args){
        sum = sum+args[key];
    }
    return sum;
}
let arr1, arr2;
arr1 = [10,20,30], arr2=[40,50,60];
let r = f1(...arr1, ...arr2);
console.log(r);
//
let obj1, obj2;
obj1 = {
    name: "Peter",
    age: 21,
};
obj2 = {
    graduated: true,
    weight: 45.67,
};
let obj3 = {...obj1, ...obj2};
console.log(obj3);
let arr3 = [...arr1, ...arr2];
console.log(arr3);