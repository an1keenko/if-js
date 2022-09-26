const sayHi = (name) => `Hi ${name}`;

export const GUEST_NAME = 'Guest';

export function addProduct(name, price) {
  const productNameRegexNoSpace = /[a-zA-z/s]/g;

  if (!productNameRegexNoSpace.test(name)) {
    return false;
  }

  return typeof price === 'number';
}

export default sayHi;
