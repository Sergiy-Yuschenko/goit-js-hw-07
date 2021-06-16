
//Знаходимо поле вводу
const nameInputEl = document.querySelector('#name-input');
//Знаходимо елемент для виводу
const nameOutputEl = document.querySelector('#name-output');
//зберігаємо поточаткове значення текстового контенту елементу виводу.
const nameOutputInitial = nameOutputEl.textContent;

// функція, що чіпляється на слухач події і передає введений контент
const outputOnInputChange = (event) => {
     //console.log(event.currentTarget.value); 
    if (event.currentTarget.value) {
        nameOutputEl.textContent = event.currentTarget.value;
    }
    else {
        nameOutputEl.textContent = nameOutputInitial;
    }   
}

//слухач події input
nameInputEl.addEventListener('input', outputOnInputChange);





