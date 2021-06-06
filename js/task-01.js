//Код, який підраховує кількість категорій, тобто елементів li.item d cgbcre ul#categories
const categoriesEl = document.querySelectorAll('li.item');
console.log(`В списке ${categoriesEl.length} категории.`);
//Код для виведення в консоль тексту заголовка ті кількості елементів кожної категолії
categoriesEl.forEach((category) => {
    console.log(`Категория: ${category.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${category.lastElementChild.children.length}`);
    }
);