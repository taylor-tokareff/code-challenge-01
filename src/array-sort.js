export const leastToGreat = arr => {
  return arr.sort((a, b) => {
    return a - b;
  });
};

export const greatToLeast = arr => {
  return arr.sort((firstNum, secondNum) => {
    return secondNum - firstNum;
  });
};

export const lengthSort = arr => {
  return arr.sort((a, b) => {
    return a.length - b.length;
  });
};

export const alpha = arr => {
  return arr.sort((word1, word2) => {
    return word1.localeCompare(word2);
  });
};

export const byAge = arr => {
  return arr.sort((person1, person2) => {
    return person1.age - person2.age;
  });
};