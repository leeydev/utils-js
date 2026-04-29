import { debounce, throttle, deepClone, isEmpty, randomBetween, capitalize, chunk } from '../src/index';

describe('Utils', () => {
  test('debounce should delay function execution', (done) => {
    const fn = jest.fn();
    const debounced = debounce(fn, 100);
    debounced();
    expect(fn).not.toHaveBeenCalled();
    setTimeout(() => {
      expect(fn).toHaveBeenCalled();
      done();
    }, 150);
  });

  test('deepClone should create deep copy', () => {
    const obj = { a: 1, b: { c: 2 } };
    const cloned = deepClone(obj);
    cloned.b.c = 3;
    expect(obj.b.c).toBe(2);
  });

  test('isEmpty checks empty values', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty([1])).toBe(false);
  });

  test('capitalize should capitalize first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('chunk should split array into chunks', () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });
});
