function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const color = document.querySelector('.change-color');
const span = document.querySelector('.color');

color.addEventListener('click', change_color);
function change_color(getRandomHexColor){
  span.innerHTML = getRandomHexColor;
  color.style.background = getRandomHexColor;
  console.log(getRandomHexColor);
}

