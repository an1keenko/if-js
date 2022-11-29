import { data } from "./data.js";

const items = document.getElementsByClassName('homes__items')[0];

data.forEach((i) => {
  items.innerHTML += `<div class='homes__item'>
  <img class="homes__img" src=${i.imageUrl} alt="hotel-image"/>
  <h3 class="homes__title">${i.name}</h3>
  <h4 class="homes__subtitle"> ${i.city}, <br /> ${i.country}</h4>
</div>`;
});

for(const elem of document.querySelectorAll('*')) {
  elem.addEventListener('click', event => {
    console.log(`Capturing: ${event.currentTarget}`);
  }, true);
  elem.addEventListener('click', event => {
    console.log(`Bubbling: ${event.currentTarget}`);
  });
}


