const tellJoke = () => {
  console.log("always tell funny joke");
};

// logs the interval id
const jokesInterval = setInterval(tellJoke, 2000);
console.log(jokesInterval);

// actually clear the interval
setTimeout(() => {
  clearInterval(jokesInterval);
  console.log('no more jokes...');
}, 10000);
