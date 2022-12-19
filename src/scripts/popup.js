const Popup = () => {
  const popup = document.createElement("div");
  popup.className = "filter__popup";

  const ul = document.createElement("ul");

  const buttons = document.createElement("div");
  buttons.className = "filter__buttons";

  const buttonPlus = document.createElement("button");
  buttonPlus.innerText = "+";
  buttonPlus.className = "filter__button";

  const buttonMinus = document.createElement("button");
  buttonMinus.innerText = "-";
  buttonMinus.className = "filter__button";

  buttons.append(buttonMinus, buttonPlus);

  const counter = document.createElement("p");
  counter.innerHTML = 0;
  counter.className = "filter__counter";

  const liAdults = document.createElement("li");
  liAdults.className = "filter__text";
  const spanAdults = document.createElement("span");
  spanAdults.innerText = "Adults";
  spanAdults.className = "filter__span";

  const liChildren = document.createElement("li");
  liChildren.className = "filter__text";
  const spanChildren = document.createElement("span");
  spanChildren.innerText = "Children";
  spanChildren.className = "filter__span";

  const liRooms = document.createElement("li");
  liRooms.className = "filter__text";
  const spanRooms = document.createElement("span");
  spanRooms.innerText = "Rooms";

  const spanSelect = document.createElement('span');

  liAdults.append(counter.cloneNode(true), spanAdults, buttons.cloneNode(true));
  liChildren.append(counter.cloneNode(true), spanChildren, buttons.cloneNode(true));

  const plusMinusChildren = liChildren
    .getElementsByClassName("filter__buttons")[0].querySelectorAll("button");

  console.log(liChildren);

  plusMinusChildren[0].addEventListener("click", (e) => {
    e.preventDefault()
    if (liChildren.querySelector("p").innerHTML > 0) {
      liChildren.querySelector("p").innerHTML--;

      popup.lastChild.remove();
    }
  });

  plusMinusChildren[1].addEventListener("click", (e) => {
    e.preventDefault()
    if (liChildren.querySelector("p").innerHTML < 10) {
      liChildren.querySelector("p").innerHTML++;

      const div = document.createElement("div");
      div.style.marginTop = "10px";
      div.style.display = "flex";
      div.style.justifyContent = "space-between";
      div.style.alignItems = "center";

      const span = document.createElement("span");
      span.style.fontSize = "12px";
      span.innerText = "What is the age of the child?";

      const select = document.createElement("select");

      for (let i = 1; i < 18; i++) {
        const option = document.createElement("option");

        option.innerText = i;

        select.appendChild(option);
      }

      div.append(span, select);

      popup.appendChild(div);
    }
  });

  liRooms.append(counter.cloneNode(true), spanRooms, buttons.cloneNode(true));

  const plusMinusRooms = liRooms
    .getElementsByClassName("filter__buttons")[0]
    .querySelectorAll("button");

  plusMinusRooms[0].addEventListener("click", (e) => {
    e.preventDefault()
    if (liRooms.querySelector("p").innerHTML > 0)
      liRooms.querySelector("p").innerHTML--;
  });

  plusMinusRooms[1].addEventListener("click", () => {
    liRooms.querySelector("p").innerHTML++;
  });

  ul.append(liAdults, liChildren, liRooms);

  ul.append(spanSelect);

  popup.appendChild(ul);

  return popup;
};

export default Popup;
