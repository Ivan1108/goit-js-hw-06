const refs ={
    size_contol: document.querySelector('.fonts-size-contol'),
    span_text : document.querySelector('.span'),
}

refs.size_contol.addEventListener('input',change_size);

function change_size(){
    refs.span_text.style.fontSize = refs.size_contol.value + 'px';
}
