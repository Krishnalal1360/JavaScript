// DOM
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
//
document.querySelector("#event-id-1").addEventListener("click", (event)=>{
    event.target.classList.add("xyz");
});
//
document.querySelector("#event-id-1").addEventListener("click", (event)=>{
    event.target.classList.remove("abc");
});
//
document.querySelector("#event-id-1").addEventListener("click", (event)=>{
    var x = event.target.classList.length;
    console.log("Class Length: "+x);
    x = event.target.classList.contains("abc");
    console.log("Class abc present: "+x);
    x = event.target.classList.contains("xyz");
    console.log("Class xyz present: "+x);
    event.target.classList.add("abc");
    x = event.target.classList;
    console.log("Class List: "+x+", Type Of x: "+typeof x);
    x = event.target.classList.item(0);
    console.log("Class List items at index 0: "+x);
    event.target.classList.remove("abc");
    event.target.classList.toggle("abc");
});
//
var x = document.querySelector("#inner-id").parentElement;
console.log(x);
x = document.querySelector("#inner-id").parentNode;
console.log(x);
document.querySelector("#inner-id").parentElement.style.backgroundColor = "lightseagreen";
//
x = document.querySelector("#inner-id").children;
console.log(x);
x = document.querySelector("#inner-id").childElementCount;
console.log(x);
x = document.querySelector("#inner-id").children[0];
console.log(x);
document.querySelector("#inner-id").children[0].style.backgroundColor = "yellow";
//
/*ele = document.querySelector("#inner-id").children;
Array.from(ele).forEach((element)=>{
    element.style.backgroundColor = "green";
});*/
ele = [...document.querySelector("#inner-id").children];
ele.forEach((element)=>{
    element.style.backgroundColor = "green";
});
//
x = document.querySelector("#inner-id").childNodes;
console.log(x);
x = document.querySelector("#inner-id").childNodes[1];
console.log(x);
document.querySelector("#inner-id").childNodes[1].innerText = "This is first paragraph under inner-id div.";
document.querySelector("#inner-id").childNodes[1].innerHTML = "<p class='inner-class-1'>This is paragraph 1 under inner-id.</p>";
//
x = document.querySelector("#inner-id").firstElementChild;
console.log(x);
x = document.querySelector("#inner-id").lastElementChild;
console.log(x);
x = document.querySelector("#inner-id").firstChild;
console.log(x);
x = document.querySelector("#inner-id").lastChild;
console.log(x);
//
x = document.querySelector(".inner-class-1").previousElementSibling;
console.log(x);
x = document.querySelector(".inner-class-2").previousElementSibling;
console.log(x);
x = document.querySelector(".inner-class-3").nextElementSibling;
console.log(x);
x = document.querySelector(".inner-class-2").nextElementSibling;
console.log(x);
x = document.querySelector(".inner-class-2").previousSibling;
console.log(x);
x = document.querySelector(".inner-class-2").nextSibling;
console.log(x);
//
var x = document.createElement("p");
var y = document.createAttribute("id");
//var z = document.createAttributeValue("p-id-1");
var m = document.createTextNode("This is a paragraph under p-id-1.");
var n = document.createComment("This is a comment.");
console.log(x, y, m, n);
//
y.value = "p-id-1";
x.setAttributeNode(y);
x.appendChild(m);
x.appendChild(n);
console.log(x);
var z = x.getAttributeNode("id");
console.log(z);
//
document.querySelector("#outer-id").appendChild(x);
z = document.querySelector("#outer-id").children;
console.log(z);
z = document.querySelector("#outer-id").childNodes;
console.log(z);
document.querySelector("#outer-id").insertBefore(x, z[0]);
//
var text = "This is a paragraph inserted before using text.";
document.querySelector("#inner-id").insertAdjacentText("beforebegin", text);
text = "This is a paragraph inserted after using text.";
document.querySelector("#inner-id").insertAdjacentText("afterbegin", text);
//
var html = "<p>This is a paragraph inserted before using html.</p>";
document.querySelector("#inner-id").insertAdjacentHTML("beforeend", html);
html = "<p>This is a paragraph inserted after using html.</p>";
document.querySelector("#inner-id").insertAdjacentHTML("afterend", html);
//
var element = document.createElement("p");
text = document.createTextNode("This is a paragraph inserted after using element.");
element.appendChild(text);
document.querySelector(".inner-class-2").insertAdjacentElement("afterbegin", element);
//
x = document.querySelector(".inner-class").children;
//x = document.querySelector(".inner-class").childNodes;
console.log(x);
var child1 = document.querySelector(".inner-class").children[0];
console.log(child1);
var element = document.createElement("li");
element.append(document.createTextNode("Swift"));
document.querySelector(".inner-class").replaceChild(element, child1);
//
var child3 = document.querySelector(".inner-class").children[2];
document.querySelector(".inner-class").removeChild(child3);
//
var child2 = document.querySelector(".inner-class").children[1];
var cloneChild = child2.cloneNode(true);
var child = document.querySelector(".inner-class-4").children[1];
console.log(child2, cloneChild, child);
document.querySelector(".inner-class-4").insertBefore(cloneChild, child);
//
var parent = document.querySelector(".outer-class-1");
var child = document.querySelector(".inner-class-4");
var contain = parent.contains(child);
console.log(contain);
child = document.querySelector(".inner-class-1");
contain = parent.contains(child);
console.log(contain);
//
parent = document.querySelector(".outer-class-1");
var attribute = parent.hasAttribute("id");
console.log(attribute);
attribute = parent.hasAttribute("style");
console.log(attribute);
attribute = parent.hasAttribute("class");
console.log(attribute);
//
child = document.querySelector(".inner-class-4");
var childNodes = child.hasChildNodes();
console.log(childNodes);
//
child1 = document.querySelector("#list-1").firstElementChild;
var child4 = document.querySelector("#list-2").lastElementChild;
var equalChild = child1.isEqualNode(child4);
console.log(equalChild);
//
/*
onfocus=""
onblur=""
oninput=""
oninvalid=""
onchange=""
onselect=""
onsubmit=""
*/
//
// --- setInterval() example ---
/*let count = 0;
let interval = setInterval(f1, 1000, "Coder");
console.log("Interval ID:", interval);

function f1(name) {
  if (count === 6) {
    clearInterval(interval);
    console.log("Interval Closed!");
  } else {
    console.log("Hello " + name);
    count++;
  }
}*/
// --- setTimeout() example ---
/*let timeout = setTimeout(f2, 3000, "Coder");
console.log("Timeout ID:", timeout);

function f2(name) {
  console.log("Hello " + name);
  clearTimeout(timeout);
  console.log("Timeout Closed!");
}*/
// BOM 
//
var inner_h, inner_w, outer_h, outer_w;
inner_h = window.innerHeight;
inner_w = window.innerWidth;
outer_h = window.outerHeight;
outer_w = window.outerWidth;
console.log(inner_w, inner_h);
console.log(outer_w, outer_h);
//
let new_tab;

function button_f1() {
  new_tab = window.open(
    "https://www.google.com",
    "",
    "width=300,height=200,left=200,top=100"
  );

  if (!new_tab) {
    alert("Popup blocked! Please allow popups for this site.");
  }
}

function button_f2() {
  if (new_tab && !new_tab.closed) new_tab.close();
}

function button_f3() {
  if (new_tab && !new_tab.closed) new_tab.moveTo(400, 400);
}

function button_f4() {
  if (new_tab && !new_tab.closed) new_tab.moveBy(100, 100);
}