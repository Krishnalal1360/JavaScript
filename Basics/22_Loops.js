var i = 1;
var j = 1;
console.log("While loop");
while(i <= 5){
    console.log(i);
    i++;
    j++;
}
console.log("i: "+i+", j: "+j);
//
i = 1;
console.log("Do while loop");
do{
    console.log(i);
    i++;
}while(i <= 5);
//console.log("i: "+i);
console.log("For loop");
for(var i=1;i<=5;i++){
    console.log(i);
}
//
console.log("Continue and Break");
for(var i=1;i<=5;i++){
    if(i == 2){
        continue;
    }
    if(i == 3){
        break;
    }
    console.log(i);
}
//
var arr = ["HTML", "CSS", "JS"];
/*arr.forEach(function(item, index){
    console.log("Index: "+index+", Item: "+item);
});*/
console.log("For Each loop");
arr.forEach((item, index) => {
    console.log("Index: "+index+", Item: "+item);
});
var obj = {
    name: "David",
    age: '21',
    graduated: true
}
console.log("For In loop");
for(let key in obj){
    console.log("Key: "+key+", Value: "+obj[key]);
}
console.log("Iterating array using for loop");
for(var i=0;i<arr.length;i++){
    console.log("Index: "+i+", Value: "+arr[i]);
}
console.log("For Of loop");
for(let element of arr){
    console.log(element);
}