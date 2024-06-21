// addEventListener(a, b)
// a = event
// b = function
// document.addEventListener("keydown", function () {
//   console.log("Key pressed");
// });

// document.addEventListener("keyup", function () {
//   console.log("Key released");
// });

const key = document.querySelector("#key");
const code = document.querySelector("#code");
const keyCode = document.querySelector("#keyCode");

document.addEventListener("keydown", function (event) {
  //   console.log(event.key);
  key.innerText = event.key;
  code.innerText = event.code;
  keyCode.innerText = event.keyCode;

  //   alert when user press "k" button
  if (event.key === "k") {
    alert("Oh no, you pressed k!");
  }
});
