console.log("connected");

console.log(1);
setTimeout(() => {
  console.log("set time out print 2");
}, 3000);
console.log(3);

console.log("a");

let count = 0;
const intervalId = setInterval(() => {
  //   console.log("set interval print b", intervalId);
  count++;
  if (count > 5) {
    clearInterval(intervalId);
  }
  console.log(intervalId, count);
}, 2000);

console.log("c");
