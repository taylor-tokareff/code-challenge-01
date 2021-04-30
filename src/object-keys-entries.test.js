import { capitalizeObjectKeys, sortKeys, getFilteredKey, getArrayOfKeysAndValues, sortedArraysByValuesLength } from './object-keys-entries.js';

test('it capitalizes the keys', () => {
  const dataObject = { name: 'Angelina Jolie', age: 80 };
  const output = capitalizeObjectKeys(dataObject);
  expect(output).toEqual(['NAME', 'AGE']);
});

test('sort keys', () => {
  const dataObject = { name: 'Spot', age: 3, isDog: true, friends: ['Rover', 'Steve', 'Fluffy'] };
  const output = sortKeys(dataObject);
  expect(output).toEqual(['age', 'name', 'isDog', 'friends']);
});

test('get filtered keys', () => {
  const dataObject = { name: 'Angelina Jolie', isSpot: false, age: 80, };
  const output = getFilteredKey(dataObject);
  expect(output).toEqual(['age']);
});

test('Array of Keys and Values', () => {
  const dataObject = { name: 'Angelina Jolie', age: 80 };
  const output = getArrayOfKeysAndValues(dataObject);
  expect(output).toEqual([['name', 'Angelina Jolie'], ['age', 80]]);
});

test('Sorted Array of Array by Objects Values length', () => {
  const dataObject = { name: 'Bob', friend: 'Tom Hanks', location: 'Los Angeles' };
  const output = sortedArraysByValuesLength(dataObject);
  expect(output).toEqual([['location', 'Los Angeles'], ['friend', 'Tom Hanks'], ['name', 'Bob']]);
});