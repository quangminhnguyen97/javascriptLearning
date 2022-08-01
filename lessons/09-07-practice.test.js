import { isAllPerfectNumbersV1, isAllPerfectNumbersV2, isAllPerfectNumbersV3 } from './09-07-practice'

describe('isAllPerfectNumbersV1', () => {
  test('should return false when invalid input', () => {
    expect(isAllPerfectNumbersV1("")).toBe(false)
    expect(isAllPerfectNumbersV1(null)).toBe(false)
    expect(isAllPerfectNumbersV1(undefined)).toBe(false)
    expect(isAllPerfectNumbersV1(1)).toBe(false)
    expect(isAllPerfectNumbersV1([])).toBe(false)
  });
  test('should return false when array do not have all perfect numbers', () => {
     expect(isAllPerfectNumbersV1([1,2,3,4])).toBe(false)
     expect(isAllPerfectNumbersV1([4,5,6,7])).toBe(false)
  });
  test('should return false when array have negative number', () => {
    expect(isAllPerfectNumbersV1([-1,6])).toBe(false)
  });
  test('should return true when array have all perfect numbers', () => {
    expect(isAllPerfectNumbersV1([6])).toBe(true)
    expect(isAllPerfectNumbersV1([28])).toBe(true)
  });
});

describe('isAllPerfectNumbersV2', () => {
  test('should return false when invalid input', () => {
    expect(isAllPerfectNumbersV2("")).toBe(false)
    expect(isAllPerfectNumbersV2(null)).toBe(false)
    expect(isAllPerfectNumbersV2(undefined)).toBe(false)
    expect(isAllPerfectNumbersV2(1)).toBe(false)
    expect(isAllPerfectNumbersV2([])).toBe(false)
  });
  test('should return false when array do not have all perfect numbers', () => {
     expect(isAllPerfectNumbersV2([1,2,3,4])).toBe(false)
     expect(isAllPerfectNumbersV2([4,5,6,7])).toBe(false)
  });
  test('should return false when array have negative number', () => {
    expect(isAllPerfectNumbersV2([-1,6])).toBe(false)
  });
  test('should return true when array have all perfect numbers', () => {
    expect(isAllPerfectNumbersV2([6])).toBe(true)
    expect(isAllPerfectNumbersV2([28])).toBe(true)
  });
});

describe('isAllPerfectNumbersV3', () => {
  test('should return false when invalid input', () => {
    expect(isAllPerfectNumbersV3("")).toBe(false)
    expect(isAllPerfectNumbersV3(null)).toBe(false)
    expect(isAllPerfectNumbersV3(undefined)).toBe(false)
    expect(isAllPerfectNumbersV3(1)).toBe(false)
    expect(isAllPerfectNumbersV3([])).toBe(false)
  });
  test('should return false when array do not have all perfect numbers', () => {
     expect(isAllPerfectNumbersV3([1,2,3,4])).toBe(false)
     expect(isAllPerfectNumbersV3([4,5,6,7])).toBe(false)
  });
  test('should return false when array have negative number', () => {
    expect(isAllPerfectNumbersV3([-1,6])).toBe(false)
  });
  test('should return true when array have all perfect numbers', () => {
    expect(isAllPerfectNumbersV3([6])).toBe(true)
    expect(isAllPerfectNumbersV3([28])).toBe(true)
  });
});