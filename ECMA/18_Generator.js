function *f1(){
    /*console.log("Message 1");
    yield "Message 2";
    console.log("Message 3");
    yield console.log("Message 4");*/
    let count = 0;
    while(true){
        yield count;
        count = count+1;
    }
}
let x = f1();
//x.next();
//x.next();
//
/*for(let element of x){
    console.log(element);
}*/
//
for(let ele of x){
    if(ele > 6){
        break;
    }
    console.log(`Value ${ele}`);
}
//
function* f2() {
    let value = yield;
    let arr = [yield, yield];
    console.log(`Value ${value}`);
    console.log(`Array ${arr}`);
    console.log(typeof arr);
    yield [1, 2, 3];
    yield* [4, 5];
}

let y = f2();

console.log(y.next());     // { value: undefined, done: false }
console.log(y.next(10));   // { value: undefined, done: false }
console.log(y.next(20));   // { value: undefined, done: false }
console.log(y.next(30));   // logs 3 console lines, returns { value: [1, 2, 3], done: false }
console.log(y.next());     // { value: 4, done: false }
console.log(y.next());     // { value: 5, done: false }
console.log(y.next());     // { value: undefined, done: true }


