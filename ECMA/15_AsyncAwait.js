let f1 = async (boolean) => {
    if (boolean === true) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const data = await response.json();
            console.log("Fetched data:", data);
            return data; // ✅ return the fetched result
        } catch (error) {
            console.log(`Error: ${error}`);
            throw error; // rethrow for .catch()
        }
    } else {
        return "Boolean was false!";
    }
};
//
let r = f1(true)
.then((result) => {
    console.log("Result received in .then():", result);
})
.catch((error) => {
    console.log("Caught error:", error);
});
//
let arr1, obj1;
arr1 = [1,2,3];
console.log(arr1);
//
obj1 = {
    name: "Alex",
    age: 21,
    graduated: true,
    weight: 45.67,
}
console.log(obj1);
class student{
    //
    constructor(name){
        this.name = name;
    }
    //
    message(){
        console.log(`Hello ${this.name}`);
    }
}
let s1 = new student("Michael");
s1.message();