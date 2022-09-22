// 1
function palindrome(str) {

  for (let i = 0; i < str.length / 2; i++) {

    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

const str = 'шалаш';

const value = palindrome(str);

console.log(value);

// 2
function min(a,b) {
  if (a < b) {
    return a;
  }

  return b;
}

function max(a,b) {
  if (a > b) {
    return a;
  }

  return b;
}

const a = 10;
const b = 100;

console.log(min(a,b));
console.log(max(a,b));

// Тернарный оператор
const resultMin = function min(c,d) {
  return (c < d) ? c : d;
};

const resultMax = function max(c,d) {
  return (c > d) ? c : d;
};

const c = 10;
const d = 100;

console.log(resultMin(c,d));
console.log(resultMax(c,d));

//3
const arr = [];

for (let i = 0; i < 10; i++) {
  arr[i] = Math.round(Math.random() * 100);
}

console.log(arr);

function ZeroToZero(number) {
  return String(number).replaceAll('0','zero');
}

console.log(ZeroToZero(arr));




