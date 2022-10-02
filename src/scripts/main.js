//1

export function sum (x) {
  return function (y) {
    return x + y;
  };
}

console.log(sum(5)(2));

//2
//getColor
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

let i = 0;
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

text1.addEventListener('click',(event) => {
  event.target.style.color = colors[i];
  i++;
  if (i > colors.length - 1) {
    i = 0;
  }
});

text2.addEventListener('click',(event) => {
  event.target.style.color = colors[i];
  i++;
  if (i > colors.length - 1) {
    i = 0;
  }
});

text3.addEventListener('click',(event) => {
  event.target.style.color = colors[i];
  i++;
  if (i > colors.length - 1) {
    i = 0;
  }
});

