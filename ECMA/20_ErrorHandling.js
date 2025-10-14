try{
    let data = `{
                    "name": "Alex",
                    "age": 21,
                }`;
    let json = JSON.parse(data);
    console.log(json.name);
    console.log(json.age);
    console.log(json.graduated);
}catch(e){
    console.log(e);
}finally{
    console.log("try-catch block executed!");
}