const mood = Symbol('mood');
const hungry = Symbol('hungry');
const energy = Symbol('energy');
const meow = Symbol('meow');

const cat = {
  [mood]: 0,
  [hungry]: 0,
  [energy]: 0,
  [meow]() {
    console.log('Meow!');
  },
  feed() {
    this[hungry] -= 1;
    this[mood] += 1;
    this[meow]();
  },
  play() {
    this[mood] += 1;
    this[energy] -= 1;
    this[meow]();
  },
  sleep() {
    this[energy] += 1;
    this[hungry] += 1;
  },
  get mood() {
    return this[mood];
  },
  get hungry() {
    return this[hungry];
  },
  get energy() {
    return this[energy];
  },
};

export default cat;
