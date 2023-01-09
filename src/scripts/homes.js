const homesItems = fetch('https://if-student-api.onrender.com/api/hotels/popular')
  .then(response => response.json())
  .then(data => {
    const items = document.getElementsByClassName('homes__items')[0];
    items.innerHTML += `<div class='homes__item'>
      <img id="homes_id" src=${data[0].imageUrl} alt="hotel-image"/>
      <h3 class="homes__title">${data[0].name}</h3>
      <h4 class="homes__subtitle"> ${data[0].city}, <br /> ${data[0].country}</h4>
    </div>
    <div class='homes__item'>
      <img id="homes_id" src=${data[1].imageUrl} alt="hotel-image"/>
      <button class="homes__button-mobile"></button>
      <h3 class="homes__title">${data[1].name}</h3>
      <h4 class="homes__subtitle"> ${data[1].city}, <br /> ${data[1].country}</h4>
    </div>
    <div class='homes__item invisible-mobile'>
      <img id="homes_id" src=${data[2].imageUrl} alt="hotel-image"/>
      <h3 class="homes__title">${data[2].name}</h3>
      <h4 class="homes__subtitle"> ${data[2].city}, <br /> ${data[2].country}</h4>
    </div>
    <div class='homes__item invisible-tablet'>
      <img id="homes_id" src=${data[3].imageUrl} alt="hotel-image"/>
      <h3 class="homes__title">${data[3].name}</h3>
      <h4 class="homes__subtitle"> ${data[3].city}, <br /> ${data[3].country}</h4>
      <button class="homes__button"></button>
    </div>`;
  })
  .catch(err => {
    console.log('Fetch Error :-S', err);
  });

export default homesItems;
