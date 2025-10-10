var arr = [1, 2, 3, 4, 5];
//filter
function f1(ele){
    return ele >= 3;
}
var r = arr.filter(f1);
console.log(r, typeof r)
//toString
r = arr.toString();
console.log(r, typeof r);