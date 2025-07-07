// event loop working mechanism:
// queue => event loop => call stack
function a() {
  console.log("a");
  b();
  console.log("aa");
}
function b() {
  console.log("b");
  d();
  console.log("bb");
}

function d() {
  console.log("d");
  console.log("dd");
}
// invocation
a();
