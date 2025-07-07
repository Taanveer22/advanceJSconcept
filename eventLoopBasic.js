// event loop working style:
// queue => event loop => call stack
function one() {
  console.log("a");
  two();
  console.log("c");
}

function two() {
  console.log("bb");
  console.log(22);
}
one();
