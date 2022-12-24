import data from './data.js';
import Popup from './popup.js';

const items = document.getElementsByClassName('homes__items')[0];
data.forEach((i) => {
  items.innerHTML += `<div class='homes__item'>
  <img class="homes__img" src=${i.imageUrl} alt="hotel-image"/>
  <h3 class="homes__title">${i.name}</h3>
  <h4 class="homes__subtitle"> ${i.city}, <br /> ${i.country}</h4>
</div>`;
});

let isPopupOpened = false;

const component = document.getElementsByClassName('form-top__filter')[0];

const togglePopupButton = document.getElementById('toggle');

togglePopupButton.addEventListener('click', () => {
  if (!isPopupOpened) {
    component.append(Popup());
  } else {
    component.lastChild.remove();
  }
  isPopupOpened = !isPopupOpened;
});
