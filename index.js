// discribe the variable to accsess to the element by class
const button = document.querySelector(".btn");
const leftSide = document.querySelector(".left-side");
const inputText = document.querySelector(".input-text");

// To Randome the Colors
function randomcolor() {
  return Math.floor(Math.random() * 255);
}

// function To Convert The RGP-color To hex-Color
function convert(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  function hexCode(i) {
    return ("0" + parseInt(i).toString(16)).slice(-2);
  }
  return "#" + hexCode(rgb[1]) + hexCode(rgb[2]) + hexCode(rgb[3]);
}

// excutions
button.addEventListener("click", function () {
  leftSide.style.backgroundColor =
    "rgba(" + randomcolor() + "," + randomcolor() + "," + randomcolor() + ")";
  let color = leftSide.style.backgroundColor;
  inputText.value = convert(color);
});

// To write the hex-Color in the input and show in the div element
inputText.addEventListener("keydown", function (e) {
  leftSide.style.backgroundColor = e.target.value;
  // e => event
  // target => inputText
});

let timer;
leftSide.addEventListener("mouseover", function () {
  timer = setInterval(() => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.querySelector(".left-side").style.backgroundColor =
      "#" + randomColor;
  }, 500);
});

leftSide.addEventListener("mouseout", function () {
  clearInterval(timer);
});
