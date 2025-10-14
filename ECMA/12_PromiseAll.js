let p1 = (boolean)=>{
    return new Promise((resolve,reject)=>{
        if(boolean === true){
            resolve("Promise1 Success!");
        }else{
            reject("Promise1 Failure!");
        }
    });
};
//
let p2 = (boolean)=>{
    return new Promise((resolve,reject)=>{
        if(boolean === true){
            resolve("Promise2 Success!");
        }else{
            reject("Promise2 Failure!");
        }
    });
};
//
let p3 = (boolean)=>{
    return new Promise((resolve,reject)=>{
        if(boolean === true){
            resolve("Promise3 Success!");
        }else{
            reject("Promise3 Failure!");
        }
    });
};
//
let r1 = p1(true);
let r2 = p2(false);
let r3 = p3(true);
//
Promise.all([r1, r2, r3])
.then(
    (result)=>{
        console.log(`Result: ${result}`);
    })
.catch((error)=>{
        console.log(`Error: ${error}`);
    });