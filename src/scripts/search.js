// fetch('https://if-student-api.onrender.com/api/hotels')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     return data.map(({name, city, country, imageUrl}) => {
//       `${name}, ${city}, ${country}, ${imageUrl}`;
//     }).join('');
//   });
// const getName = async () => {
//   const name = await fetch(url.href);
//   return name.json();
// };

const searchBtn = document.querySelector('.search-top');
const getRequest = document.querySelector('.place-top');
const availableSection = document.querySelector('.available__items');

const showAvailableHotels = () => {
  const url = new URL('https://if-student-api.onrender.com/api/hotels');
  url.searchParams.append('search', `${getRequest.value}`);

  const getItems = fetch(url.href)
    .then((response) => response.json())
    .then((data) => {
     //  availableSection.innerHTML+= `
     //  <div class="homes__item">
     //    <img src=${data[0].imageUrl} alt="hotel-image"/>
     //    <h3 class="homes__title">${data[0].name}</h3>
     //    <h4 class="homes__subtitle"> ${data[0].city}, <br /> ${data[0].country}</h4>
     //  </div>
     //  <div class="homes__item">
     //    <img src=${data[1].imageUrl} alt="hotel-image"/>
     //    <h3 class="homes__title">${data[1].name}</h3>
     //    <h4 class="homes__subtitle"> ${data[1].city}, <br /> ${data[1].country}</h4>
     //  </div>
     //  <div class="homes__item">
     //    <img src=${data[2].imageUrl} alt="hotel-image"/>
     //    <h3 class="homes__title">${data[2].name}</h3>
     //    <h4 class="homes__subtitle"> ${data[2].city}, <br /> ${data[2].country}</h4>
     //  </div>
     //  <div class="homes__item">
     //    <img src=${data[3].imageUrl} alt="hotel-image"/>
     //    <h3 class="homes__title">${data[3].name}</h3>
     //    <h4 class="homes__subtitle"> ${data[3].city}, <br /> ${data[3].country}</h4>
     // </div>`;
    })
    .catch((err) => {
      console.log('Error', err);
    });
};

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showAvailableHotels();
});


