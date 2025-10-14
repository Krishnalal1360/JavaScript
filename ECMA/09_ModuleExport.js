let arr1 = [10, 20, 30];
//
let obj1 = {
    name: "Peter",
    graduated: true,
};
//
class student{
    //
    constructor(name){
        this.name = name;
    }
    //
    message(){
        console.log(`Hello ${this.name}`);
    }
};
//
export default function(){
    return "Hello from default function!";
}
//
export {arr1, obj1, student};