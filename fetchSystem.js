console.log("connected js");

// system 01 : data load by promise
function loadByPromise() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((resolve) => resolve.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

// system 02 : data load by named async function
async function loadByNamedAsync() {
  const resolve = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resolve.json();
  console.log(data);
}

// system 03 : data load by arrow async function
const loadByArrowAsync = async () => {
  const resolve = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resolve.json();
  console.log(data);
};

// system 04 : data load by try catch
const loadByTryCatch = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("catch error output : ", error);
  }
};
