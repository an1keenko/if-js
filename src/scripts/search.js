const searchBtn = document.querySelector('.search-top');
const searchBtnMob = document.querySelector('.button-mobile');
const getRequest = document.querySelector('.place-top');
const getRequestMob = document.querySelector('.input-search');
const availableSection = document.querySelector('.background-available');
const availableItems = document.querySelector('.available__items');
const errorSearch = document.querySelector('.available-invisible__error');

const showAvailableHotels = () => {
  availableItems.innerHTML = '';
  availableSection.style.display = 'block';

  const url = new URL('https://if-student-api.onrender.com/api/hotels');
  url.searchParams.append('search', `${getRequest.value && getRequestMob.value}`);
  fetch(url, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      const hotelsItems = data.map(({name, city, country, imageUrl}) => {
          return `<div class="available__item">
         <img id="available__img-id" src=${imageUrl} alt="hotel-image"/>
         <h3 class="available__title">${name}</h3>
         <h4 class="available__subtitle"> ${city},<br /> ${country}</h4>
       </div>`;
        })
        .slice(0,4)
        .join('');
      availableItems.insertAdjacentHTML('afterbegin', hotelsItems);
      if (data.length === 0) {
        errorSearch.style.display = 'block';
      } else {
        errorSearch.style.display = 'none';
      }
    })
    .catch((err) => console.error(err));
};

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showAvailableHotels();
});

searchBtnMob.addEventListener('click', (e) => {
  e.preventDefault();
  showAvailableHotels();
});
