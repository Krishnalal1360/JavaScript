var st = "JavaScript";
console.log(st, typeof st);
//
console.log(st.length);
//
console.log(st.toLowerCase());
//
var st = "JavaScript";
console.log(st.toUpperCase());
//
var st = "JavaScript";
console.log(st.includes("asc"));
console.log(st.includes("aSc"));
//
var st = "JavaScript";
console.log(st.startsWith("Java"));
console.log(st.startsWith("Script"));
//
var st = "JavaScript";
console.log(st.endsWith("Script"));
console.log(st.endsWith("Java"));
//
var st = "JavaScript";
console.log(st.search("ava"));
console.log(st.search("ipt"));
//
var st = "JavaScript";
console.log(st.match("aSc"));
console.log(st.match("asc"));
var r = st.match(/a/g);
console.log(r, typeof r);
console.log(r.length, r[0]);
//
var st = "JavaScript";
console.log(st.indexOf("a"));
console.log(st.lastIndexOf("a"));
//
var st = "JavaScript";
console.log(st.replace(/a/g, "o"));
console.log(st);
console.log(st.replace("a", "o"));
console.log(st.replace("Script", "API"));
//
var st = "  JavaScript  ";
console.log(st, st.length);
st = st.trim();
console.log(st, st.length);
//
var st = "09AZaz";
for(var i=0;i<st.length;i++){
    console.log("Index: "+i+", Character: "+st.charAt(i)+", ASCII Code: "+st.charCodeAt(i));
    console.log("Character: "+String.fromCharCode(st.charCodeAt(i)));
}
//
var st1 = "Java";
var st2 = "Script";
var st = st1.concat(st2);
console.log(st);
//
var st = "Java Script";
var st1 = st.split(" ");
console.log(st1, typeof st1);
//
var st = "JavaScript";
console.log(st.repeat(3));
//
var st = "JavaScript";
console.log(st.slice(4));
console.log(st.slice(4,6));
console.log(st.substring(4));
console.log(st.substring(4,6));
//
var x = true;
console.log(x, typeof x);
x = x.toString();
console.log(x, typeof x);
console.log(x.valueOf(), typeof x);