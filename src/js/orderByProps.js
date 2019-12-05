export default function orderByProps(obj, sortProps) {
  const array = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      array.push({
        key,
        value: obj[key],
      });
    }
  }

  array.sort((a, b) => (b.key < a.key) - (a.key < b.key));

  return array;
}
