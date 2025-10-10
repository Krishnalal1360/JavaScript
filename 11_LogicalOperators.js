var x, y, z, r;
x = 10, y = 20, z = 30;
r = (x > y) && (x > z);
console.log("AND: ", r);
r = (z > x) || (z > y);
console.log("OR: ", r);
r = !(x == y);
console.log("NOT: ", r);
