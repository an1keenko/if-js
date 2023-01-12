import Popup from './popup.js';

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
