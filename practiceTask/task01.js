// part - a
setTimeout(() => {
  console.log("log after 5 seconds");
}, 5000);


// part -b
const delayedGreeting = (nickName, delayedTime) => {
  console.log(nickName, delayedTime);
  setTimeout(() => {
    console.log("hello " + nickName);
  }, delayedTime);
};
delayedGreeting('alice', 2000);
