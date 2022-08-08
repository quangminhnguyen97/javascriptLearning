import { isIncreasingNumber } from './number-01'
describe('isIncreasingNumber', () => {
  it('should return false when number < 10', () => {
    [...Array(10).keys()].map(i => {
      expect(isIncreasingNumber(i)).toBe(false);
    })
  });

  test('should return false when num is not increasing', () => {
    [11, 22, 33, 44, 55, 66, 51, 101, 132, 133, 202, 205, 898, 784, 1003,
    1231, 5432, 9989, 12343, 34566, 666472, 999997].map(i => {
      expect(isIncreasingNumber(i)).toBe(false)
    })
  });

  test('should return true when number is increasing', () => {
    [12, 34, 123, 345, 2459, 2345, 4569, 14679].map(i => {
        expect(isIncreasingNumber(i)).toBe(true)
      })
  })
})