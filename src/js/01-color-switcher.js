const startElement = document.querySelector('[data-start]');
const stopElement = document.querySelector('[data-stop]');
const bodyElement = document.body;
let inter;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startElement.addEventListener("click", callbackOn) 
function callbackOn(event) {
  event.target.disabled = true
  stopElement.disabled = false
  inter = setInterval(() => {
    bodyElement.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
stopElement.addEventListener("click", callbackOf)
function callbackOf(event) {
  event.target.disabled = true
  startElement.disabled = false
  clearInterval(inter)
}



