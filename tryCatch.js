console.log("connected");

function checkAge() {
  // console.log('clicked');
  const inputAge = document.getElementById("age");
  const inputAgeValue = inputAge.value;
  const errorElement = document.getElementById("error");
  try {
    const age = parseInt(inputAgeValue);
    if (isNaN(age)) {
      // console.log('age is not found', age, inputAgeValue);
      throw "please enter a valid age number";
    } else if (age <= 18) {
      throw "baby and teens are not allowed";
    } else if (age >= 30) {
      throw "old people are not allowed";
    }
    // clear the input age field after subit one number of age
    errorElement.innerHTML = "";
  } catch (error) {
    console.log("catch error output : ", error);
    errorElement.innerHTML = "catch error output : " + error;
  } finally {
    console.log("all done inside try catch");
  }
  console.log(111);
}
