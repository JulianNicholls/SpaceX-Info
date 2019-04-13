function wrapped(data) {
  return Object.keys(data).reduce((updated, key) => {
    const value = data[key];

    if (typeof value == 'string') updated[key] = lineate(value, 70);
    else if (typeof value === 'object') updated[key] = wrapped(value);
    else updated[key] = value;

    return updated;
  }, {});
}

export function lineate(text, maxLine = 75) {
  const strLen = text.length;

  let retText = '';
  let start = 0;

  while (start + maxLine < strLen) {
    let len = maxLine;

    while (text[start + len] !== ' ' && len) {
      // console.log({ len, char: text[start + len] });
      --len;
    }

    if (len === 0)
      return console.error('Oops', { start, text: text.substring(start) });

    retText += text.substring(start, start + len) + '\n';
    start += len + 1;
    // console.log({ retText, start });
  }

  return retText + text.substring(start, start + maxLine);
}

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
