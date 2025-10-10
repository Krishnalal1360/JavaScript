var arr = [1, 2, 3, 4, 5];
//find
function f1(ele){
    if(ele >= 3){
        return ele;
    }
}
var r = arr.find(f1);
console.log(r);
//findIndex
function f2(ele){
    return ele >= 3;
}
r = arr.findIndex(f2);
console.log(r);