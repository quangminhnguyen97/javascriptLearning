import { calcSum } from './01'

describe('S(n) = 1 + 2 + 3 + ... + n', () => {
  test('should return 0 when n <= 0', () => {
    expect(calcSum(-1)).toBe(0);
    expect(calcSum(0)).toBe(0);
    expect(calcSum(undefined)).toBe(0)
  });
  test('should return number when n > 0', () => {
    expect(calcSum(3)).toBe(6);
    expect(calcSum(2)).toBe(3);
  });
});