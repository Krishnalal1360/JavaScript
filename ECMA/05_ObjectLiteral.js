let str = "JavaScript";
let obj = {
    str: str,
};
console.log(obj);
//
obj = {
    str,
};
console.log(obj);
//
str = "program";
obj = {
    [str]: "JavaScript",
};
console.log(obj);
//
obj = {
    name: "JS",
    show: function(){
        return `${this.name}`;
    }
}
console.log(obj.name);
console.log(obj.show());
//
obj = {
    name: "JavaScript",
    show(){
        return `${this.name}`;
    }
}
console.log(obj.name);
console.log(obj.show());
console.log(obj['show']());