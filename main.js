// 1
let user = 'John Doe';

console.log(user);

const student = 'Ihar Anikeyenka';

console.log(student);

user = student;
// В переменной user выведется значение для student.
console.log(user);

// 2
let test = 1;

test = test + 1;

test = test + '1';
// В переменной test будет значение 21.
console.log(test);

test = test - 1;
// В переменной test будет значение 20.
console.log(test);

test = Boolean(test);
// В переменной test будет значение true. ()
console.log(test);

// // 3
let result = 1;

const arra = [2, 3, 5, 8];

for (let i = 0; i < arra.length; i ++) {

  result = result * arra[i];

}

console.log(result);

// 4

const arrb = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arrb.length; i ++) {

  if (arrb[i] > 5 && arrb[i] < 10) {

    console.log(arrb[i]);

  }
}

//5

const arr = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arrb.length; i ++) {

  if (arr[i] % 2 === 0 && arr[i] > 0) {

    console.log(arr[i]);

  }
}






