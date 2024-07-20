let value1 = document.getElementById("value");
let increment1 = document.getElementById("increment");
let reset1 = document.getElementById("reset");
let decrement1 = document.getElementById("decrement");

function incrementFunction() {
  value1.innerText = parseInt(value1.innerText) + 1;
}

function resetFunction() {
  value1.innerText = 0;
}

function decrementFunction() {
  value1.innerText = parseInt(value1.innerText) - 1;
}

increment1.addEventListener("click", incrementFunction);
reset1.addEventListener("click", resetFunction);
decrement1.addEventListener("click", decrementFunction);
