class student{
    //
    static school = "DPS";
    //
    course = "Science";
    //
    constructor(name){
        this.name = name;
    }
    //
    message(){
        console.log(`Hello student ${this.name}`);
    }
    //
    static classMethod(){
        console.log("Hello from student class method!");
    }
}
let s1 = new student("Peter");
s1.message();
student.classMethod();
console.log(student.school);
console.log(s1.course);