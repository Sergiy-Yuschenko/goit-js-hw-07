const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];




const imagesGaleryListEl = document.querySelector('#gallery');
imagesGaleryListEl.style = 'display:flex; justify-content: center; flex-wrap: wrap;margin-left: calc(-1*var(30px)); margin-top: calc(-1*var(--card-set-portfolio));';
const galeryListItems = ({url, alt}) => {
  const galeryListItemEl = document.createElement('li');
  galeryListItemEl.style = 'list-style: none; flex-basis: calc(100%/3 - 30px); margin-left: 30px; margin-top: 30px;';
  const galeryImagesEl = document.createElement('img');
  galeryImagesEl.style = 'max-width: 100%; height: auto;';
  galeryImagesEl.src = url;
  galeryImagesEl.alt = alt;
  galeryListItemEl.appendChild(galeryImagesEl);
  return galeryListItemEl;
};

const elements = images.map(galeryListItems);

imagesGaleryListEl.append(...elements);
