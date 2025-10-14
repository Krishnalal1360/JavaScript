let f1 = (boolean)=>{
    return new Promise((resolve,reject)=>{
        //
        if(boolean === true){
            resolve("Success!");
        }else{
            reject("Failure!");
        }
    });
}
let r = f1(true).then((result)=>{
    console.log(`Result: ${result}`);
}).catch((error)=>{
    console.log(`Error: ${error}`);
});
r = f1(false).then((result)=>{
    console.log(`Result: ${result}`);
}).catch((error)=>{
    console.log(`Error: ${error}`);
});