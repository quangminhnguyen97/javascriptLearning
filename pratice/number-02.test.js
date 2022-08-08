import { statisticsWords } from './number-02'
describe('statisticsWords', () => {
  test('should return {} when string is empty', () => {
   expect(statisticsWords('')).toEqual({});
  });

  test('should return correct object when string is not empty', () => {
    expect(statisticsWords('Nguyen Quang Minh')).toEqual({
      Nguyen: 1,
      Quang: 1,
      Minh: 1
    });
  });

  test('should return correct object when string have more redundant space', () => {
    expect(statisticsWords('Nguyen    Quang     Minh')).toEqual({
      Nguyen: 1,
      Quang: 1,
      Minh: 1
    });
  })
})