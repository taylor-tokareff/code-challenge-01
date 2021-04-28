import { fiveAndGreaterOnly, evensOnly, fiveGum } from './array-filter';

test('Five and greater only', () => {
  const input = [3, 6, 8, 2];
  const output = fiveAndGreaterOnly(input);
  expect(output).toEqual([6, 8]);
});

test('only even numbers', () => {
  const input = [3, 6, 8, 2];
  const output = evensOnly(input);
  expect(output).toEqual([6, 8, 2]);
});

test('gimme less than 5', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten', 'camping'];
  const output = fiveGum(input);
  expect(output).toEqual(['by', 'dog', 'wolf', 'eaten']);
});