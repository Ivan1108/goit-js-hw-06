const refs = {
    form : document.querySelector('.login-form'),
}

refs.form.addEventListener('submit',onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
    const formElements= event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;
}