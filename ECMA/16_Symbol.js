let x, y;
x = Symbol("JS");
y = Symbol("JS");
console.log(x == y);
console.log(x === y);
//
x = "JS";
y = "JS";
console.log(x === y);
console.log(x == y);
//
x = Symbol("JS");
y = "JS";
var obj = {
    name: "Peter",
    [x]: "JavaScript",
    [y]: "jQuery",
};
console.log(obj);
//
console.log(x, x.description, typeof x);
var z = x.toString();
console.log(z, typeof z);
//
console.log(JSON.stringify(obj));