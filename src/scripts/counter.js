const filterMain = document.querySelector('.form-desktop__filter');

filterMain.innerHTML =
  '<div class="filter-main">\n' +
  '                  <p class="filter__text">Adults</p>\n' +
  '                  <div class="filter__counter">\n' +
  '                    <div class="counter-elem counter-elem__minus__adults">-</div>\n' +
  '                    <label>\n' +
  '                      <input type="text" class="counter-elem__input splash-input__adults filter__input" value="1">\n' +
  '                    </label>\n' +
  '                    <div class="counter-elem counter-elem__plus__adults">+</div>\n' +
  '                  </div>\n' +
  '                </div>\n' +
  '                <div class="filter-main">\n' +
  '                  <p class="filter__text">Children</p>\n' +
  '                  <div class="filter__counter">\n' +
  '                    <div class="counter-elem counter-elem__minus__children">-</div>\n' +
  '                    <label>\n' +
  '                      <input type="text" class="counter-elem__input splash-input__children filter__input" value="0">\n' +
  '                    </label>\n' +
  '                    <div class="counter-elem counter-elem__plus__children">+</div>\n' +
  '                  </div>\n' +
  '                </div>\n' +
  '                <div class="filter-main">\n' +
  '                  <p class="filter__text">Rooms</p>\n' +
  '                  <div class="filter__counter">\n' +
  '                    <div class="counter-elem counter-elem__minus__rooms">-</div>\n' +
  '                    <label>\n' +
  '                      <input type="text" class="counter-elem__input splash-input__rooms filter__input" value="1">\n' +
  '                    </label>\n' +
  '                    <div class="counter-elem counter-elem__plus__rooms">+</div>\n' +
  '                  </div>\n' +
  '                </div>\n' +
  '                <p class="filter__children-text" id="child"></p>\n' +
  '                <span class="filter__select"></span>';

const popup = document.createElement('div');
popup.className = 'filter-main';
// };

//Adults
const splashInputAdults = document.querySelector('.splash-input__adults');
let splashValAdults = parseFloat(splashInputAdults.value);

document.querySelector('.counter-elem__plus__adults').onclick = function () {
  if (splashValAdults < 30) {
    splashInputAdults.value = ++splashValAdults;
  }
};

document.querySelector('.counter-elem__minus__adults').onclick = function () {
  if (splashValAdults > 1) {
    splashInputAdults.value = --splashValAdults;
  }
};

//Children
const splashInputChildren = document.querySelector('.splash-input__children');
let splashValChildren = parseFloat(splashInputChildren.value);

const item = document.querySelector('.filter__children-text');

const select = `
    <select class="select__style" name="age" id="filter-select">
      <option value="">0 years old</option>
      <option value="">1 year old</option>
      <option value="">2 years old</option>
      <option value="">3 years old</option>
      <option value="">4 years old</option>
      <option value="">5 years old</option>
      <option value="">6 years old</option>
      <option value="">7 years old</option>
      <option value="">8 years old</option>
      <option value="">9 years old</option>
      <option value="">10 years old</option>
      <option value="">11 years old</option>
      <option value="">12 years old</option>
      <option value="">13 years old</option>
      <option value="">14 years old</option>
      <option value="">15 years old</option>
      <option value="">16 years old</option>
      <option value="">17 years old</option>
    </select>`;

document.querySelector('.counter-elem__plus__children').onclick = function () {
  if (splashValChildren < 10) {
    splashInputChildren.value = ++splashValChildren;
  }
  if (splashValChildren >= 1) {
    item.innerHTML = `What is the age of the child you’re travelling with?`;
    // document.querySelector('.filter__select').appendChild(select);
    document.querySelector('.filter__select').innerHTML += select;
    document.querySelector(
      '.filter__children-text',
    ).style.display = `inline-block`;
    document.querySelector('.filter__select').style.display = `flex`;
  }
};

document.querySelector('.counter-elem__minus__children').onclick = function () {
  if (splashValChildren > 0) {
    splashInputChildren.   value = --splashValChildren;
  }
  if (splashValChildren === 0) {
    item.innerHTML = ``;
    document.querySelector('.filter__select').innerHTML = '';
    document.querySelector('.filter__children-text').style.display = `none`;
    document.querySelector('.filter__select').style.display = `none`;
  }
};

//Rooms
const splashInputRooms = document.querySelector('.splash-input__rooms');
let splashValRooms = parseFloat(splashInputRooms.value);

document.querySelector('.counter-elem__plus__rooms').onclick = function () {
  if (splashValRooms < 30) {
    splashInputRooms.value = ++splashValRooms;
  }
};

document.querySelector('.counter-elem__minus__rooms').onclick = function () {
  if (splashValRooms > 1) {
    splashInputRooms.value = --splashValRooms;
  }
};
