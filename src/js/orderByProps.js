export default function orderByProps(obj, sortProps) {
  const data = { ...obj };
  const pirimaryArray = [];
  const arrayToSort = [];

  for (const prop of sortProps) {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        if (prop === key) {
          pirimaryArray.push({
            key,
            value: data[key],
          });
          delete data[key];
        }
      }
    }
  }

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      arrayToSort.push({
        key,
        value: data[key],
      });
    }
  }

  arrayToSort.sort((a, b) => (b.key < a.key) - (a.key < b.key));

  return [...pirimaryArray, ...arrayToSort];
}
