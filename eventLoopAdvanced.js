console.log("connected");

// event loop workinng mechanism :
// queue => event loop => call

function x() {
  console.log("x");
  y();
  console.log("xx");
}

function y() {
  console.log("y");
  z();
  console.log("yy");
}

function z() {
  console.log("z");
  console.log("zz");
}
// setTimeout function
setTimeout(()=>{
    console.log('inside time out function...');
}, 3000)
// fetch api
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data));
//   invocation
x();
