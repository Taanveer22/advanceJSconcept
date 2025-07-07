console.log("connected");

const myLoader = () => {
  return new Promise((resolve, reject) => {
    let sucess = Math.random();
    if (sucess <= 0.5) {
      resolve(sucess);
    } else {
      reject(sucess);
    }
  });
};
// console.log(myLoader());
myLoader()
  .then((data) => console.log("resolved data : ", data))
  .catch((error) => console.log("rejected value :", error));
