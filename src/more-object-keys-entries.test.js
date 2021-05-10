import { getHouses, changeNumbers, totalCharacters, sortByChildAmount, hasChildren } from './more-object-keys-entries.js';
test('it gets the names of the houses', () => {
  const characters = [
    {
      name: 'Eddard',
      spouse: 'Catelyn',
      children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
      house: 'Stark'
    },
    {
      name: 'Jon A.',
      spouse: 'Lysa',
      children: ['Robin'],
      house: 'Arryn'
    },
    {
      name: 'Cersei',
      spouse: 'Robert',
      children: ['Joffrey', 'Myrcella', 'Tommen'],
      house: 'Lannister'
    },
    {
      name: 'Daenarys',
      spouse: 'Khal Drogo',
      children: ['Drogon', 'Rhaegal', 'Viserion'],
      house: 'Targaryen'
    },
    {
      name: 'Mace',
      spouse: 'Alerie',
      children: ['Margaery', 'Loras'],
      house: 'Tyrell'
    },
    {
      name: 'Euron',
      spouse: null,
      children: [],
      house: 'Greyjoy'
    },
    {
      name: 'Jon S.',
      spouse: null,
      children: [],
      house: 'Snow'
    }
  ]; //arrange
  const output = getHouses(characters); //act
  expect(output).toEqual(expect.arrayContaining(['Greyjoy', 'Snow', 'Arryn', 'Tyrell', 'Lannister', 'Targaryen', 'Stark'])); //assert
});


test('it changes numbers', () => {
  const bob = { 'Grace Hopper': '222-303-5938', 'Ada Lovelace': '222-349-9842', 'Alan Turing': '222-853-5933' };

  const output = changeNumbers(bob);
  expect(output).toEqual(['Grace Hopper: 222-303-5938', 'Ada Lovelace: 222-349-9842', 'Alan Turing: 222-853-5933']);
});

test('total number of characters', () => {
  const input = [
    {
      name: 'Eddard',
      spouse: 'Catelyn',
      children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
      house: 'Stark'
    },
    {
      name: 'Jon A.',
      spouse: 'Lysa',
      children: ['Robin'],
      house: 'Arryn'
    },
    {
      name: 'Cersei',
      spouse: 'Robert',
      children: ['Joffrey', 'Myrcella', 'Tommen'],
      house: 'Lannister'
    },
    {
      name: 'Daenarys',
      spouse: 'Khal Drogo',
      children: ['Drogon', 'Rhaegal', 'Viserion'],
      house: 'Targaryen'
    },
    {
      name: 'Mace',
      spouse: 'Alerie',
      children: ['Margaery', 'Loras'],
      house: 'Tyrell'
    },
    {
      name: 'Euron',
      spouse: null,
      children: [],
      house: 'Greyjoy'
    },
    {
      name: 'Jon S.',
      spouse: null,
      children: [],
      house: 'Snow'
    }
  ];
  const output = totalCharacters(input);
  expect(output).toEqual(26);
});

test('sort houses by amount of children', () => {
  const characters = [
    {
      name: 'Eddard',
      spouse: 'Catelyn',
      children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
      house: 'Stark'
    },
    {
      name: 'Jon A.',
      spouse: 'Lysa',
      children: ['Robin'],
      house: 'Arryn'
    },
    {
      name: 'Cersei',
      spouse: 'Robert',
      children: ['Joffrey', 'Myrcella', 'Tommen'],
      house: 'Lannister'
    },
    {
      name: 'Daenarys',
      spouse: 'Khal Drogo',
      children: ['Drogon', 'Rhaegal', 'Viserion'],
      house: 'Targaryen'
    },
    {
      name: 'Mace',
      spouse: 'Alerie',
      children: ['Margaery', 'Loras'],
      house: 'Tyrell'
    },
    {
      name: 'Euron',
      spouse: null,
      children: [],
      house: 'Greyjoy'
    },
    {
      name: 'Jon S.',
      spouse: null,
      children: [],
      house: 'Snow'
    }
  ];
  const output = sortByChildAmount(characters); //act
  expect(output).toEqual([{ name: 'Euron', spouse: null, children: [], house: 'Greyjoy' }, { name: 'Jon S.', spouse: null, children: [], house: 'Snow' }, { name: 'Jon A.', spouse: 'Lysa', children: ['Robin'], house: 'Arryn' }, { name: 'Mace', spouse: 'Alerie', children: ['Margaery', 'Loras'], house: 'Tyrell' }, { name: 'Cersei', spouse: 'Robert', children: ['Joffrey', 'Myrcella', 'Tommen'], house: 'Lannister' }, { name: 'Daenarys', spouse: 'Khal Drogo', children: ['Drogon', 'Rhaegal', 'Viserion'], house: 'Targaryen' }, { name: 'Eddard', spouse: 'Catelyn', children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'], house: 'Stark' }]);

});

test('has children boolean', () => {
  const characters = [
    {
      name: 'Eddard',
      spouse: 'Catelyn',
      children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
      house: 'Stark'
    },
    {
      name: 'Jon A.',
      spouse: 'Lysa',
      children: ['Robin'],
      house: 'Arryn'
    },
    {
      name: 'Cersei',
      spouse: 'Robert',
      children: ['Joffrey', 'Myrcella', 'Tommen'],
      house: 'Lannister'
    },
    {
      name: 'Daenarys',
      spouse: 'Khal Drogo',
      children: ['Drogon', 'Rhaegal', 'Viserion'],
      house: 'Targaryen'
    },
    {
      name: 'Mace',
      spouse: 'Alerie',
      children: ['Margaery', 'Loras'],
      house: 'Tyrell'
    },
    {
      name: 'Euron',
      spouse: null,
      children: [],
      house: 'Greyjoy'
    },
    {
      name: 'Jon S.',
      spouse: null,
      children: [],
      house: 'Snow'
    }
  ];
  const output = hasChildren(characters, 'Eddard'); //act
  expect(output).toEqual(true);
});