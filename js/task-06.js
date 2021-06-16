//Знаходимо елемент поля вводу (інпут)
const validationInputEl = document.querySelector('#validation-input');

//функція для вибору класу та його додавання в тег input при блюрі
const validationLength = (event) => {
    if (event.currentTarget.value.length === Number(validationInputEl.dataset.length)) {
        validationInputEl.classList.add('valid');
    }
    else if (event.currentTarget.value.length !== Number(validationInputEl.dataset.length) && event.currentTarget.value.length !== 0) {
        validationInputEl.classList.add('invalid');
    }
}

//функція для перевірки наявності класів та їх вилучення з тегу input при фокусі
const validationDischarge = () => {
    if (validationInputEl.classList.contains('invalid')) {
        validationInputEl.classList.remove('invalid');
    }
    else if (validationInputEl.classList.contains('valid')) {
        validationInputEl.classList.remove('valid');
    }    
}

//слухач події фокусу на полі інпуту
validationInputEl.addEventListener('focus', validationDischarge);
//слухач події блюру на полі інпуту
validationInputEl.addEventListener('blur', validationLength);

