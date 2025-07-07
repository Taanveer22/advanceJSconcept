console.log(1);
console.log(2);
console.log(3);

// -------------------------------

console.log(4);
print5();
console.log(6);
function print5() {
  console.log("print 5");
}

// ---------------------------
console.log(7);
setTimeout(() => {
  console.log("lazy log 8");
}, 4000);
console.log(9);

// -----------------------
console.log("i");
console.log("eat");
console.log("ice-cream");

console.log("i");
setTimeout(() => {
  console.log("eat");
}, 4000);
console.log("ice-cream");
