const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  current: 0,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    if (this.current < this.data.length) {
      return {
        done: false,
        value: this.data[this.current++],
      };
    }
    if (this.current <= this.data.length) {
      this.current = 0;
      return {
        done: false,
        value: this.data[this.current],
      };
    }
  },
};

function giveColor(colors) {
  return function(event) {
    event.target.style.color = colors.next().value;
    return event;
  };
}

text1.addEventListener('click', giveColor({...colors}));
text2.addEventListener('click', giveColor({...colors}));
text3.addEventListener('click', giveColor({...colors}));







