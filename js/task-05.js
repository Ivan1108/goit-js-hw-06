
const input = document.querySelector('.input');
const name_output = document.querySelector('h1 > span');

input.addEventListener('input',onInputChange);

function onInputChange(event){
    name_output.textContent = event.currentTarget.value;
}