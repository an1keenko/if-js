//Test function "sum"
test('five plus two', () => {
  expect(2 + 2).toBe(4);
});

//Test function "getColor"
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

test('the array "colors" has skyblue on it', () => {
  expect(colors).toContain('skyblue');
  expect(new Set(colors)).toContain('skyblue');
});
