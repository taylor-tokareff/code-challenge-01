export function getHouses(obj) {
  const houses = Object.values(obj).map(item => {
    return item.house;
  });
  return houses;
}
export function changeNumbers(obj) {
  const array = [];
  Object.keys(obj).forEach(booger => {
    console.log(booger);
    array.push(`${booger}: ${obj[booger]}`);
  });
  return array;
};

export function totalCharacters(arr) {
  let count = 0;

  arr.forEach((item) => {

    if (item.name) count++;

    if (item.spouse) count++;

    if (item.children) count = count + item.children.length;
  });
  return count;

};

export function sortByChildAmount(arr) {
  const anArray = arr.sort((a, b) => {
    return a.children.length - b.children.length;
  })
    .sort((a, b) => {
      return a.name - b.name;
    });
  return anArray;
};

export function hasChildren(arr, character) {
  let hasChildren = false;

  arr.forEach((item) => {
    if (item.name === character) {
      if (item.children.length > 0) return hasChildren = true;
    };
  });
  return hasChildren;
}