const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListEl = document.querySelector('#ingredients');

const ingredientsListItems = ingredients.map(element => {
    const listItemEl = document.createElement('li');
    listItemEl.textContent = element;
    return listItemEl;
  });

 ingredientsListEl.append(...ingredientsListItems);
