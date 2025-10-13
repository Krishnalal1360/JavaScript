var ele = document;
console.log(ele);
//
/*document.all;
document.all[0];*/
//
ele = document.head;
console.log(ele);
//
ele = document.body;
console.log(ele);
//
ele = document.links;
console.log(ele);
//
ele = document.links[1];
console.log(ele);
//
ele = document.images;
console.log(ele);
//
ele = document.images[0];
console.log(ele);
//
ele = document.forms[0];
console.log(ele);
//
ele = document.doctype;
console.log(ele);
//
ele = document.URL;
console.log(ele);
ele = document.baseURI;
console.log(ele);
ele = document.documentURI;
console.log(ele);
//
/*ele = document.domain;
console.log(ele);*/
//
ele = document.documentElement;
console.log(ele);
//
ele = document.getElementById("header");
console.log(ele);
ele = document.getElementsByClassName("box");
console.log(ele);
ele = document.getElementsByTagName("div");
console.log(ele);
//
ele = document.getElementById("header").innerHTML;
console.log(ele);
ele = document.getElementById("header").innerText;
console.log(ele);
//
ele = document.getElementById("header").attributes;
console.log(ele);
ele = document.getElementById("header").attributes[1];
console.log(ele);
ele = document.getElementById("header").attributes[1].name;
console.log(ele);
ele = document.getElementById("header").attributes[1].value;
console.log(ele);
ele = document.getElementById("header").attributes[1].nodeName;
console.log(ele);
ele = document.getElementById("header").attributes[1].nodeType;
console.log(ele);
ele = document.getElementById("header").attributes[1].nodeValue;
console.log(ele);
ele = document.getElementById("header").getAttribute("style");
console.log(ele);
ele = document.getElementById("header").getAttribute("class");
console.log(ele);
ele = document.getElementById("header").getAttributeNode("style");
console.log(ele);
//
document.getElementById("header").attributes[1].value = "Red Text";
ele = document.getElementById("header");
console.log(ele);
document.getElementById("header").setAttribute("style", "color:green;");
ele = document.getElementById("header");
console.log(ele);
document.getElementById("footer").innerHTML = "<div class='footer-id'>This is the Footer</div>";
ele = document.getElementById("footer");
console.log(ele);
document.getElementById("footer").innerText = "This is footer.";
ele = document.getElementById("footer");
console.log(ele);
//
document.getElementById("header").removeAttribute("style");
ele = document.getElementById("header");
console.log(ele);
//
ele = document.querySelector("#header");
console.log(ele);
ele = document.querySelector(".class-1");
console.log(ele);
ele = document.querySelectorAll(".class-1");
console.log(ele);
ele = document.querySelectorAll(".class-2");
console.log(ele);
//
ele = document.getElementById("header");
console.log(ele);
ele = document.getElementsByClassName("class-2");
console.log(ele);
//
ele = document.querySelector(".class-3").style.backgroundColor = "pink";
console.log(ele);
ele = document.querySelectorAll(".class-3");
ele.forEach((element,index) => {
    element.style.backgroundColor = "orange";
});
console.log(ele);
//
ele = document.querySelector(".class-3").className;
console.log(ele);
ele = document.querySelectorAll(".class-3");
ele.forEach((element)=>{
    element.className = "abc";
});
ele = document.querySelectorAll(".abc");
console.log(ele);
//
ele = document.querySelectorAll(".class-4");
console.log(ele);
ele = document.querySelectorAll(".class-4");
ele.forEach((element)=>{
    element.classList.add("xyz");
});
ele.forEach((element)=>{
    element.classList.remove("class-4");
});
ele = document.querySelectorAll(".xyz");
console.log(ele);
//
ele = document.querySelector("#id-1");
console.log(ele);
/*document.querySelector("#id-1").onclick = f1;
function f1(){
    this.style.color = "green";
    this.style.backgroundColor = "yellow";
}*/
/*document.querySelector("#id-1").addEventListener("click", function f1(){
    this.style.color = "green";
    this.style.backgroundColor = "yellow";
});*/
document.querySelector("#id-1").addEventListener("click", (event)=>{
    event.target.style.color = "green";
    event.target.style.backgroundColor = "yellow";
});
document.querySelector(".inner").addEventListener("click", (event)=>{
    alert("This alert is from Inner Div!");
    event.target.style.color = "red";
    event.target.style.backgroundColor = "orange";
}, true);
document.querySelector(".outer").addEventListener("click", (event)=>{
    alert("This alert is from Outer Div!");
    event.target.style.color = "green";
    event.target.style.backgroundColor = "yellow";
}, true);