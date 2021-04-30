
export function capitalizeObjectKeys(obj) {
  return Object.keys(obj).map(key => key.toLocaleUpperCase());
};

export function sortKeys(obj) {
  return Object.keys(obj).sort((string1, string2) => string1.length - string2.length);
}

export function getFilteredKey(obj) {
  return Object.keys(obj).filter(key => (key === 'age'));
}

export function getArrayOfKeysAndValues(obj) {
  return Object.entries(obj);
}

export function sortedArraysByValuesLength(obj) {
  return Object.entries(obj).sort((arr1, arr2) => {
    return arr2[1].length - arr1[1].length;
  });
}