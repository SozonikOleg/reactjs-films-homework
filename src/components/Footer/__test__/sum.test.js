/* eslint-disable no-undef */
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 13 + 23 to equal 36', () => {
  expect(sum(13, 23)).toBe(36);
});
