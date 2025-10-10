var arr = [1, 2, 3, 4, 5];
//Includes
var r = arr.includes(5);
console.log(r);
r = arr.includes(6);
console.log(r);
//Some
function f1(ele){
    if(ele >= 3){
        return true;
    }else{
        return false;
    }
}
r = arr.some(f1);
console.log(r);
//Every
function f2(ele){
    if(ele >= 3){
        return true;
    }else{
        return false;
    }
}
r = arr.every(f2);
console.log(r);