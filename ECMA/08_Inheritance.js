class school{
    //
    static name = "DPS";
    //
    constructor(){
        console.log("No School Object Initialization!");
    }
    //
    message(){
        console.log(`School: ${school.name}`);
    }
    //
    static staticMessage(){
        console.log("Hello Students!");
    }
}
class student extends school{
    //
    constructor(name){
        super();
        this.name = name;
        console.log("Student Object Initialized!");
    }
    //
    greeting(){
        console.log(`Hello Student ${this.name}`);
    }
    //
    message(){
        console.log("School method is overrided!");
        //console.log(`Hello Student ${this.name}`);
    }
}
//
let s1 = new student("Ben");
s1.greeting();
s1.message();