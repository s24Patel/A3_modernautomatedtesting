import calculateCanvasSize from '../calculateCanvasSize';

describe('calculateCanvasSize', () => {
  test('should calculate canvas size correctly for positive values', () => {
    expect(calculateCanvasSize('5', '10')).toBe(30);
    expect(calculateCanvasSize('3', '7')).toBe(20);
  });

  test('should return 0 when length and width are 0', () => {
    expect(calculateCanvasSize('0', '0')).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(calculateCanvasSize('-5', '10')).toBe(30);
    expect(calculateCanvasSize('5', '-10')).toBe(30);
    expect(calculateCanvasSize('-5', '-10')).toBe(30);
  });

  test('should throw an error for non-numeric inputs', () => {
    expect(() => calculateCanvasSize('abc', '10')).toThrow('Invalid input');
    expect(() => calculateCanvasSize('5', 'xyz')).toThrow('Invalid input');
  });
});
