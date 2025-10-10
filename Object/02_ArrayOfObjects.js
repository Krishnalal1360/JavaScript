let obj = new Object();
obj.name = "Victor Mathews";
obj.age = 21;
obj.weight = 45.67;
obj.graduated = false;
obj.skills = ["HTML", "CSS", "JS"];
console.log(obj);
console.log(obj.name);
console.log(obj.skills[2]);
//
obj = [
    {
        name: "Peter Parker",
        age: 21,
        weight: 45.56,
        graduated: false,
    },
    {
        name: "Tony Stark",
        age: 25,
        weight: 56.45,
        graduated: true,
        skills: ["AI", "Robotics"],
    }
];
console.log(obj, typeof obj);
console.log(obj[1].name);
console.log(obj[1].skills[1]);
//
for(key in obj){
    console.log(obj[key]);
}