let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let password = document.getElementById('password');

const labelFirstName = document.createElement("label")
const labelLastName = document.createElement("label")
const labelEmail = document.createElement("label")
const labelPassword = document.createElement("label")

const validateRegexEmail = /\S+@\S+\.\S+/; /* regex that validate the email*/

const testInput = (label, element, text) => {
    label.innerHTML = text
    element.parentNode.insertBefore(label, element.nextSibling)
    element.style = "border-color: #FF7979; background-image: url('/src/images/iconAviso.svg');"
}

// Listenin the form and intercept the values
document.getElementById('form').addEventListener('submit', event => {
    labelFirstName.innerHTML = '';
    labelLastName.innerHTML = '';
    labelEmail.innerHTML = '';
    labelPassword.innerHTML = '';

    firstName.style = ' border-color: #5E54A4;'
    lastName.style = ' border-color: #5E54A4;'
    email.style = ' border-color: #5E54A4;'
    password.style = ' border-color: #5E54A4;'

    let isInputOneCorrect = true;
    let isInputwoCorrect = true;
    let isInputhreeCorrect = true;
    let isInpufourCorrect = true;

    // Checks input and show if there are err
    if (firstName.value.length < 3) {
        testInput(labelFirstName, firstName, "First Name cannot be empty")
        isInputOneCorrect = false
    }
    if (lastName.value.length < 3) {
        testInput(labelLastName, lastName, "Last Name cannot be empty")
        isInputwoCorrect = false;
    }

    if (!validateRegexEmail.test(email.value)) {
        testInput(labelEmail, email, "Looks like this is not an email")
        isInputhreeCorrect = false;
    }

    if (password.value.length < 3) {
        testInput(labelPassword, password, "Password cannot be empty")
        isInpufourCorrect = false;
    }


    // Test to adjust the height of the form block
    if ((!isInputOneCorrect && !isInputwoCorrect) && (!isInputhreeCorrect || !isInpufourCorrect)) {
        document.getElementById("form").style = 'height: 31.125rem;';
        document.getElementById("buttonCadastrar").style = 'margin-top: 0;'
    }

    // Tes to clean the input
    if (!isInputOneCorrect) {
        firstName.value = '';
    }
    if (!isInputwoCorrect) {
        lastName.value = '';
    }
    if (!isInputhreeCorrect) {
        email.value = '';
    }
    if (!isInpufourCorrect) {
        password.value = '';
    }

    if (isInputOneCorrect && isInputwoCorrect && isInputhreeCorrect && isInpufourCorrect) {
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        password.value = '';

        alert('Successful registration ✅✅')
    }

    event.preventDefault();
});