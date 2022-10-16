//1

const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (object1, object2) => {
 // return Object.is(object1, object2);
  const prop1 = Object.getOwnPropertyNames(object1);
  const prop2 = Object.getOwnPropertyNames(object2);

  if (prop1.length !== prop2.length) {
    return false;
  }

  for (let i = 0; i < prop1.length; i++) {
    const property = prop1[i];
    const areObjects = typeof(object1[property]) === 'object' && typeof(object2[property]) === 'object';

    if ((!areObjects && (object1[property] !== object2[property])) || (areObjects) && !deepEqual(object1[property], object2[property])) {
      return false;
    }
  }

  return true;

};

console.log(deepEqual(obj1, obj2));
