// // 1
// function palindrome(str) {
//
//   for (let i = 0; i < str.length / 2; i++) {
//
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
//
// const str = 'шалаш';
//
// const value = palindrome(str);
//
// console.log(value);
//
// // 2
// function min(a,b) {
//   if (a < b) {
//     return a;
//   }
//
//   return b;
// }
//
// function max(a,b) {
//   if (a > b) {
//     return a;
//   }
//
//   return b;
// }
//
// const a = 10;
// const b = 100;
//
// console.log(min(a,b));
// console.log(max(a,b));
//
// // Тернарный оператор
// const resultMin = function min(c,d) {
//   return (c < d) ? c : d;
// };
//
// const resultMax = function max(c,d) {
//   return (c > d) ? c : d;
// };
//
// const c = 10;
// const d = 100;
//
// console.log(resultMin(c,d));
// console.log(resultMax(c,d));
//
// //3
// const arr = [];
//
// for (let i = 0; i < 10; i++) {
//   arr[i] = Math.round(Math.random() * 100);
// }
//
// console.log(arr);
//
// function ZeroToZero(number) {
//   return String(number).replaceAll('0','zero');
// }
//
// console.log(ZeroToZero(arr));

// let name = prompt('Введи имя человека и ты узнаешь его статус в твоей жизни!');
//
// switch (name) {
//   case 'Даша':
//     alert( 'Это твой самый ненавистный недруг' );
//     break;
//   case 'Максим':
//     alert( 'Это твой лучший друг' );
//     break;
//   case 'Женя Кучерявый':
//     alert( 'Да, это твой друг' );
//     break;
//   default:
//     alert('');
// }

// let name = "John";
// function sayHi() {
//   return `Hi ${name}`;
// }
// name = "Pete";
// console.log(sayHi()); // "John" or "Pete"?

// function makeWorker() {
//   let name = "Pete";
//   return function() {
//     return `Hi ${name}`;
//   };
// }
// let name = "John";
// // create a function
// const sayHi = makeWorker();
// // call it
// console.log(sayHi()); // "John" or "Pete"?

// const users = [
//   { firstName: 'John', lastName: 'Smith' },
//   { firstName: 'Todd', lastName: 'Lee' },
//   { firstName: 'Taylor', lastName: 'Fox' },
// ];
//
// const getFullName = (firstName, lastName) => () => (
//   `${firstName} ${lastName}`
// );
//
// for (let i = 0; i < users.length; i++) {
//   var user = users[i];
//   user.getFullName = getFullName(user.firstName, user.lastName);
// }
//
// console.log(users[0].getFullName()); // 'John Smith'
// console.log(users[1].getFullName()); // 'Todd Lee'
// console.log(users[2].getFullName()); // 'Taylor Fox'

// const users = [
//   { firstName: 'John', lastName: 'Smith' },
//   { firstName: 'Todd', lastName: 'Lee' },
//   { firstName: 'Taylor', lastName: 'Fox' },
// ];
//
// const getFullName = (firstName, lastName) => () => (
//   `${firstName} ${lastName}`
// );
//
// for (let i = 0; i < users.length; i++) {
//   var user = users[i];
//   user.getFullName = getFullName(user.firstName, user.lastName);
// }
//
// console.log(users[0].getFullName());
// console.log(users[1].getFullName());
// console.log(users[2].getFullName());

import sayHi, { GUEST_NAME } from './module.js';

console.log(GUEST_NAME);
console.log(sayHi('John'));
