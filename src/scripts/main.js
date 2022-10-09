//1(Change date format)
function getDate(date) {
  const dateArr = date.split('-');

  [dateArr[0], dateArr[2]] = [dateArr[2], dateArr[0]];

  return dateArr.join('.');
}

console.log(getDate('2020-11-26'));

//2

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

function search(name) {
  const objects = data.filter(
    (item) =>
      item.country.includes(name) ||
      item.city.includes(name) ||
      item.hotel.includes(name)
  );

  const result = [];

  for (let i = 0; i < objects.length; i++) {
    result.push(...Object.values(objects[i]));
  }

  return result;
}

console.log(search('Germany'));
