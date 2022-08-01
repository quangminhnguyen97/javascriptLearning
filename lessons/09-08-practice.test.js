import { calcAvgOfAllEvenNumbers } from './09-08-practice'

describe('calcAvgOfAllEvenNumbers', () => {
  test('should return 0 when not an array', () => {
    expect(calcAvgOfAllEvenNumbers(null)).toBe(0)
    expect(calcAvgOfAllEvenNumbers(undefined)).toBe(0)
    expect(calcAvgOfAllEvenNumbers('null')).toBe(0)
    expect(calcAvgOfAllEvenNumbers(1)).toBe(0)
    expect(calcAvgOfAllEvenNumbers('')).toBe(0)
  });
  
  test('should return 0 when input is empty array', () => {
    expect(calcAvgOfAllEvenNumbers([])).toBe(0)
  });

  test('should return number when input is array have even number', () => {
    expect(calcAvgOfAllEvenNumbers([1,2,3,4])).toBe(3)
    expect(calcAvgOfAllEvenNumbers([1,1,3,4])).toBe(4)
  });
});