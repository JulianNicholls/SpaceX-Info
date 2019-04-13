import { lineate } from '../pages/HoldingPage';

const shortString = 'This is a shorter string';
const longString =
  'This is a long string that has multiple spaces obviously, some commas and a colon like this: somewhere';

describe('lineate', () => {
  test('should leave a string shorter than the default wrap length alone', () => {
    const wrapped = lineate(shortString);

    expect(wrapped).toEqual(shortString);
  });

  test('should leave a string shorter than the specified wrap length alone', () => {
    const wrapped = lineate(longString, 160);

    expect(wrapped).toEqual(longString);
  });

  test('should wrap at a space, removing redundant spaces', () => {
    const wrapped = lineate(shortString, 9);

    expect(wrapped).toEqual('This is a\nshorter\nstring');
  });

  test('should wrap longer string at a space, removing redundant spaces', () => {
    const wrapped = lineate(longString, 25);

    expect(wrapped).toEqual(
      'This is a long string\nthat has multiple spaces\nobviously, some commas\nand a colon like this:\nsomewhere'
    );
  });
});
