export function fiveAndGreaterOnly(arr) {
  return arr.filter(item => item > 5);
}

export function evensOnly(arr) {
  return arr.filter(number => number % 2 === 0);
}

export function fiveGum(arr) {
  return arr.filter((item) => item.length < 6);
}

export const illuminati = arr => {
  return arr.filter(person => {
    if (person.member) return person;
  });
};

export const ofAge = arr => {
  return arr.filter(person => {
    if (person.age >= 18) return person;
    else return false;
  });
};