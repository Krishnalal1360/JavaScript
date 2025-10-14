function f1(fn,ln,...args){
    let sum = 0;
    for(let key in args){
        sum = sum+args[key];
    }
    return `Text:${fn}${ln}, Sum:${sum}`;
}
let r = f1("ES","6+",10,20,30);
console.log(r);
/*function f2(){
    let sum = 0;
    for(let key in arguments){
        sum = sum+arguments[key];
    }
    return sum;
}*/
let f2 = (...args)=>{
    let sum = 0;
    for(let key in args){
        sum = sum+args[key];
    }
    return sum;
}
r = f2(10,20,30);
console.log(r);