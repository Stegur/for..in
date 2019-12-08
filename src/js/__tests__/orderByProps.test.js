import orderByProps from '../orderByProps';

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

const expected1 = [
  { key: 'name', value: 'мечник' },
  { key: 'level', value: 2 },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
];

const expected2 = [
  { key: 'level', value: 2 },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
  { key: 'name', value: 'мечник' },
];

const expected3 = [
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
  { key: 'attack', value: 80 },
  { key: 'level', value: 2 },
  { key: 'name', value: 'мечник' },
];


describe('orderByProps', () => {
  it.each([
    [obj, ['name', 'level'], expected1],
    [obj, ['level'], expected2],
    [obj, ['defence', 'health'], expected3],
  ])('with data %o and needle %o should return %o', (hero, needle, expected) => {
    const result = orderByProps(hero, needle);
    expect(result).toEqual(expected);
  });
});
