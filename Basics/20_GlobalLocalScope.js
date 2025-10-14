var gv = "Global";
function f1(){
    var lv = "Local";
    console.log("Inside function global variable: "+gv);
    console.log("Inside function local variable: "+lv);
}
f1();
console.log("Outside function global variable: "+gv);
//console.log("Outside function local variable: "+lv);