var counterValue = 0;
const val = document.querySelector('.value');

const button1 = document.querySelector('.button1');

button1.addEventListener("click",onClick);
function onClick(evt){
    counterValue = counterValue - 1 ;
    console.log(counterValue);
    val.innerHTML =counterValue;
}; 
val.innerHTML =counterValue;
const button2 = document.querySelector('.button2');

button2.addEventListener("click",onClick1);
function onClick1(evt){
    counterValue = counterValue +1;
    console.log(counterValue);
    val.innerHTML =counterValue;
};  
val.innerHTML =counterValue;