//Знаходження елементу повзунка (інпут)
const fontSizeInputEl = document.querySelector('input#font-size-control');
//Задаємо початкове положення повзунка, мінімальне, максимальне значення діапазону та крок.
fontSizeInputEl.value = 100;
fontSizeInputEl.min = 5;
fontSizeInputEl.max = 300;
fontSizeInputEl.step = 5;
//Знаходимо елемент,розмір текстового контенту якого треба міняти повзунком
const fontSizeOutput = document.querySelector('span#text');

//Записуємо функцію яка чіпляється на слухач, зчитує значення інпута/повзунка та записує в інлайновий стиль font-size 
const fontSizeChange = () => {
    //console.log(fontSizeInputEl.value);
    fontSizeOutput.style = `font-size: ${fontSizeInputEl.value}%`; /*теж робочий варіант, який треба використовувати без змінної event*/
    // fontSizeOutput.style = `font-size: ${event.currentTarget.value}%`; /*Працює лише зі змінною функції event*/
}
//слухач події input
fontSizeInputEl.addEventListener('input', fontSizeChange);