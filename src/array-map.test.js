import { doubleNumbers, stringyMaJig, theCapitolizer } from './array-map';


test('it doubles the numbers', () => {
  const input = [420, 24, 7];
  const actual = doubleNumbers(input);
  expect(actual).toEqual([840, 48, 14]);

});

test('Take an array of numbers and make them strings', () => {
  const input = [2, 5, 100];
  const actual = stringyMaJig(input);
  expect(actual).toEqual(['2', '5', '100']);

});

test('Capitalize each of an array of names', () => {
  const input = ['john', 'JACOB', 'jinGleHeimer', 'schmidt'];
  const actual = theCapitolizer(input);
  expect(actual).toEqual(['John', 'Jacob', 'Jingleheimer', 'Schmidt']);


});