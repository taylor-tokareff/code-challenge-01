import { fiveAndGreaterOnly, evensOnly, fiveGum, illuminati, ofAge } from './array-filter';

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
  expect(output).toEqual(['dog', 'wolf', 'by', 'eaten']);
});

test('Illuminati members', () => {
  const input = [
    { name: 'Angelina Jolie', member: true },
    { name: 'Eric Jones', member: false },
    { name: 'Paris Hilton', member: true },
    { name: 'Kayne West', member: false },
    { name: 'Bob Ziroll', member: true }
  ];
  const output = illuminati(input);
  expect(output).toEqual([
    { name: 'Angelina Jolie', member: true },
    { name: 'Paris Hilton', member: true },
    { name: 'Bob Ziroll', member: true }
  ]);
});

test('of age', () => {
  const input = [
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Eric Jones', age: 2 },
    { name: 'Paris Hilton', age: 5 },
    { name: 'Kayne West', age: 16 },
    { name: 'Bob Ziroll', age: 100 }
  ];
  const output = ofAge(input);
  expect(output).toEqual([
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Bob Ziroll', age: 100 }
  ]);
});

