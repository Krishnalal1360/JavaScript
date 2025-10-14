function f1(){
    console.log("This is functon 1!");
}
f1();
function f2(fn, ln){
    var n = fn+" "+ln;
    console.log("Your name: "+n);
}
f2("Peter", "Parker");
function f3(x, y, z){
    var r = (x+y+z)/3;
    return r;
}
var avg = f3(10, 20, 30);
console.log("Average: ", avg);