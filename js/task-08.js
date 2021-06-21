const quantityBoxesInputEl = document.querySelector('#controls input');
const renderButtonEl = document.querySelector('#controls [data-action="render"]');
const destroyButtonEl = document.querySelector('#controls [data-action="destroy"]');
const boxesContainerEl = document.querySelector('#boxes');

let value;

//Функція яка отримує вміст поля для вводу "input" 
function checkInput(amount) {
    value = amount.currentTarget.value;
};
//слухач події "input" на полі ввода "input"
quantityBoxesInputEl.addEventListener('input', checkInput);

//Функція для створення div - боксів
const createBoxes = () => {

    const boxes = [];
    let boxSize = 30;
    for (let i = 0; i < value; i += 1) {
        const boxEl = document.createElement('div');

        const colorRead = Math.round(Math.random() * 255);
        const colorGreen  = Math.round(Math.random() * 255);
        const colorBlue = Math.round(Math.random() * 255);

        boxEl.style = `width: ${boxSize}px; height: ${boxSize}px; background-color: rgb(${colorRead}, ${colorGreen} , ${colorBlue})`;
        boxes.push(boxEl);
        boxSize += 10;
       // console.log(boxes);
    }
    boxesContainerEl.append(...boxes);
    renderButtonEl.disabled = 'true';
    destroyButtonEl.removeAttribute('disabled');
}
//слухач на кнопку "Создать"
renderButtonEl.addEventListener('click', createBoxes);
// destroyButtonEl.addEventListener('click', destroyBoxes);

const destroyBoxes = () => {
    boxesContainerEl.innerHTML = '';
    renderButtonEl.removeAttribute('disabled');
    destroyButtonEl.disabled = 'true';
}

destroyButtonEl.addEventListener('click', destroyBoxes);