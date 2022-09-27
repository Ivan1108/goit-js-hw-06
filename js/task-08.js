const refs = {
    form : document.querySelector('.login-form'),
}

refs.form.addEventListener('submit',onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
    const formElements= event.currentTarget.elements;
    var mail = "";
    var password = "";
    if(formElements.password.value === ""|| formElements.email.value === ""){
        alert("Все поля должны быть заполнены")
    }else{
        mail = formElements.email.value;
        password = formElements.password.value;
    }
    
    console.log(mail,password)
   
}