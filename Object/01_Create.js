let obj = {
    fname: "Victor",
    lname: "Mathews",
    graduated: true,
    age: 24,
    weight: 45.67,
    skills: ["HTML", "CSS", "JS"],
    salary: ()=>{
        return 25000;
    },
    location: {
        locality: "Sector V",
        zone: "Biddhanagar",
        state: "West Bengal"
    },
    full_name: function(){
        return this.fname+" "+this.lname;
    }
}
//
console.log(obj.skills);
console.log(obj.location.zone);
console.log(obj.salary());
console.log(obj.full_name());