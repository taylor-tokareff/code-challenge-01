export function getHouses(obj) {
  const houses = Object.values(obj).map(item => {
    return item.house;
  });
  return houses;
}
