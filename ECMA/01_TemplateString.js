var x = "JavaScript";
var y = `Hello! Welcome To ${x}!`;
console.log(y);
function f1(fn, ln){
    return `${fn} ${ln}`;
}
y = f1("Peter", "Parker");
console.log(y);