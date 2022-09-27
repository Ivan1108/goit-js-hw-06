const refs= {
    input: document.querySelector('.input-text'),
    redColor: document.querySelector('.invalid'),
}
console.log(refs.redColor)
// refs.input.addEventListener('focus',check_focus);

// function check_focus(){
   
// }
refs.input.addEventListener('blur',check_blur);

function check_blur(){

    if(refs.input.value.length > 6){
        refs.input.style.borderColor = "red"; 
    }else{
        refs.input.style.borderColor = "green";
    }
    
}