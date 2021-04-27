export function doubleNumbers(arr) {
  return arr.map(item => {
    const multiply = item * 2;
    return multiply;
  });

}

export function stringyMaJig(arr) {
  return arr.map(item => {
    const stringy = item + '';
    return stringy;
  });
}

export function theCapitolizer(arr) {
  return arr.map(item =>
    item[0].toUpperCase() + item.slice(1).toLowerCase());
}

export function namesOnly(arr) {
  return arr.map(item => {
    const happy = item.name;
    return happy;
  });
}

export function ageFunction(arr) {
  return arr.map(item => {
    return `${item.name} ${item.age < 18 ? 'is under age!!' : 'can go to The Matrix'}`;
  });
}

export function makeHeader(arr) {
  return arr.map(item => {
    return `<h1>${item.name}</h1><h2>${item.age}</h2>`;
  });
}
