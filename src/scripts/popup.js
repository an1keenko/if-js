const Popup = () => {
  const popup = document.createElement('div');
  popup.className = 'filter__popup';

  const ul = document.createElement('ul');
  ul.className = 'filter__ul';

  const buttons = document.createElement('div');
  buttons.className = 'filter__buttons';

  const buttonPlus = document.createElement('button');
  buttonPlus.innerText = '+';
  buttonPlus.className = 'filter__button';

  const buttonMinus = document.createElement('button');
  buttonMinus.innerText = '-';
  buttonMinus.className = 'filter__button';

  buttons.append(buttonMinus, buttonPlus);

  const counter = document.createElement('p');
  counter.innerHTML = 0;
  counter.className = 'filter__counter';

  const liAdults = document.createElement('li');
  liAdults.className = 'filter__text';
  const spanAdults = document.createElement('span');
  spanAdults.innerText = 'Adults';
  spanAdults.className = 'filter__span';

  const liChildren = document.createElement('li');
  liChildren.className = 'filter__text';
  const spanChildren = document.createElement('span');
  spanChildren.innerText = 'Children';
  spanChildren.className = 'filter__span';

  const liRooms = document.createElement('li');
  liRooms.className = 'filter__text';
  const spanRooms = document.createElement('span');
  spanRooms.innerText = 'Rooms';

  liAdults.append(counter.cloneNode(true), spanAdults, buttons.cloneNode(true));

  const plusMinusAdults = liAdults
    .getElementsByClassName('filter__buttons')[0]
    .querySelectorAll('button');

  plusMinusAdults[0].style.borderColor = '#CECECE';
  plusMinusAdults[0].style.color = '#CECECE';

  plusMinusAdults[0].addEventListener('click', (e) => {
    e.preventDefault();
    if (liAdults.querySelector('p').innerHTML > 1)
      liAdults.querySelector('p').innerHTML--;

    if (liAdults.querySelector('p').innerHTML <= 1) {
      plusMinusAdults[0].style.borderColor = '#CECECE';
      plusMinusAdults[0].style.color = '#CECECE';
    }

    if (liAdults.querySelector('p').innerHTML <= 30) {
      plusMinusAdults[1].style.borderColor = '#3077C6';
      plusMinusAdults[1].style.color = '#3077C6';
    }
  });

  plusMinusAdults[1].addEventListener('click', (e) => {
    e.preventDefault();

    if (liAdults.querySelector('p').innerHTML < 30)
      liAdults.querySelector('p').innerHTML++;

    if (liAdults.querySelector('p').innerHTML >= 1) {
      plusMinusAdults[0].style.borderColor = '#3077C6';
      plusMinusAdults[0].style.color = '#3077C6';
    }

    if (liAdults.querySelector('p').innerHTML >= 30) {
      plusMinusAdults[1].style.borderColor = '#CECECE';
      plusMinusAdults[1].style.color = '#CECECE';
    }
  });

  liChildren.append(
    counter.cloneNode(true),
    spanChildren,
    buttons.cloneNode(true),
  );

  const plusMinusChildren = liChildren
    .getElementsByClassName('filter__buttons')[0]
    .querySelectorAll('button');
  plusMinusChildren[0].style.borderColor = '#CECECE';
  plusMinusChildren[0].style.color = '#CECECE';

  const spanChildrenText = document.createElement('span');
  spanChildrenText.className = 'filter__children-age';
  spanChildrenText.innerText =
    'What is the age of the child you’re travelling with?';

  plusMinusChildren[0].addEventListener('click', (e) => {
    e.preventDefault();

    if (liChildren.querySelector('p').innerHTML <= 1) {
      spanChildrenText.style.display = 'none';
    }

    if (liChildren.querySelector('p').innerHTML > 0) {
      liChildren.querySelector('p').innerHTML--;
      popup.lastChild.remove();
    }

    if (liChildren.querySelector('p').innerHTML <= 0) {
      plusMinusChildren[0].style.borderColor = '#CECECE';
      plusMinusChildren[0].style.color = '#CECECE';
    }

    if (liChildren.querySelector('p').innerHTML <= 9) {
      plusMinusChildren[1].style.borderColor = '#3077C6';
      plusMinusChildren[1].style.color = '#3077C6';
    }
  });

  plusMinusChildren[1].addEventListener('click', (e) => {
    e.preventDefault();

    if (liChildren.querySelector('p').innerHTML >= 0) {
      spanChildrenText.style.display = 'block';
    }

    if (liChildren.querySelector('p').innerHTML < 10) {
      liChildren.querySelector('p').innerHTML++;

      const div = document.createElement('div');
      div.style.display = 'flex';
      div.style.justifyContent = 'space-between';
      div.style.alignItems = 'center';

      const select = document.createElement('select');
      select.className = 'filter__select';

      for (let i = 1; i < 18; i++) {
        const option = document.createElement('option');

        option.innerText = i + ' years old';

        select.appendChild(option);

        div.append(select);
      }

      popup.appendChild(div);
    }

    if (liChildren.querySelector('p').innerHTML >= 0) {
      plusMinusChildren[0].style.borderColor = '#3077C6';
      plusMinusChildren[0].style.color = '#3077C6';
    }

    if (liChildren.querySelector('p').innerHTML >= 9) {
      plusMinusChildren[1].style.borderColor = '#CECECE';
      plusMinusChildren[1].style.color = '#CECECE';
    }
  });

  liRooms.append(counter.cloneNode(true), spanRooms, buttons.cloneNode(true));

  const plusMinusRooms = liRooms
    .getElementsByClassName('filter__buttons')[0]
    .querySelectorAll('button');
  plusMinusRooms[0].style.borderColor = '#CECECE';
  plusMinusRooms[0].style.color = '#CECECE';

  plusMinusRooms[0].addEventListener('click', (e) => {
    e.preventDefault();
    if (liRooms.querySelector('p').innerHTML > 1)
      liRooms.querySelector('p').innerHTML--;

    if (liRooms.querySelector('p').innerHTML <= 1) {
      plusMinusRooms[0].style.borderColor = '#CECECE';
      plusMinusRooms[0].style.color = '#CECECE';
    }

    if (liRooms.querySelector('p').innerHTML <= 30) {
      plusMinusRooms[1].style.borderColor = '#3077C6';
      plusMinusRooms[1].style.color = '#3077C6';
    }
  });

  plusMinusRooms[1].addEventListener('click', (e) => {
    e.preventDefault();
    if (liRooms.querySelector('p').innerHTML < 30)
      liRooms.querySelector('p').innerHTML++;

    if (liRooms.querySelector('p').innerHTML >= 1) {
      plusMinusRooms[0].style.borderColor = '#3077C6';
      plusMinusRooms[0].style.color = '#3077C6';
    }

    if (liRooms.querySelector('p').innerHTML >= 30) {
      plusMinusRooms[1].style.borderColor = '#CECECE';
      plusMinusRooms[1].style.color = '#CECECE';
    }
  });

  ul.append(liAdults, liChildren, liRooms);

  popup.appendChild(ul);
  popup.appendChild(spanChildrenText);

  return popup;
};

export default Popup;
