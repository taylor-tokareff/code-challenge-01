import { leastToGreat, greatToLeast, lengthSort, alpha, byAge } from './array-sort.js';


test('least to great', () => {
  const input = [1, 3, 5, 2, 90, 20];
  const actual = leastToGreat(input);
  expect(actual).toEqual([1, 2, 3, 5, 20, 90]);
});

test('great to least', () => {
  const input = [1, 3, 5, 2, 90, 20];
  const actual = greatToLeast(input);
  expect(actual).toEqual([90, 20, 5, 3, 2, 1]);
});

test('length sort', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten'];
  const actual = lengthSort(input);
  expect(actual).toEqual(['by', 'dog', 'wolf', 'eaten', 'family']);
});

test('alpha', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten'];
  const actual = alpha(input);
  expect(actual).toEqual(['by', 'dog', 'eaten', 'family', 'wolf']);
});

test('by age', () => {
  const input = [
    { name: 'Quiet Samurai', age: 22 },
    { name: 'Arrogant Ambassador', age: 100 },
    { name: 'Misunderstood Observer', age: 2 },
    { name: 'Unlucky Swami', age: 77 }];
  const actual = byAge(input);
  expect(actual).toEqual([
    { name: 'Misunderstood Observer', age: 2 },
    { name: 'Quiet Samurai', age: 22 },
    { name: 'Unlucky Swami', age: 77 },
    { name: 'Arrogant Ambassador', age: 100 }]);
});

