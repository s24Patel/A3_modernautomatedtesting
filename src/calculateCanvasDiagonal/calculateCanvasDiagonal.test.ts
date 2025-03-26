import calculateCanvasDiagonal from '../calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  test('should calculate diagonal correctly for positive values', () => {
    expect(calculateCanvasDiagonal('3', '4')).toBeCloseTo(5, 2);
    expect(calculateCanvasDiagonal('6', '8')).toBeCloseTo(10, 2);
    expect(calculateCanvasDiagonal('5', '12')).toBeCloseTo(13, 2);
  });

  test('should return 0 for length and width of 0', () => {
    expect(calculateCanvasDiagonal('0', '0')).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(calculateCanvasDiagonal('-3', '4')).toBeCloseTo(5, 2);
    expect(calculateCanvasDiagonal('3', '-4')).toBeCloseTo(5, 2);
    expect(calculateCanvasDiagonal('-3', '-4')).toBeCloseTo(5, 2);
  });

  test('should handle non-numeric strings by throwing an error', () => {
    expect(() => calculateCanvasDiagonal('abc', '4')).toThrow('Invalid input: length and width must be numbers');
    expect(() => calculateCanvasDiagonal('3', 'xyz')).toThrow('Invalid input: length and width must be numbers');
  });
});
