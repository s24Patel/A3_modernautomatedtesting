export default function calculateCanvasSize(length: string, width: string) {
  const lengthNum = parseInt(length, 10);
  const widthNum = parseInt(width, 10);

  if (isNaN(lengthNum) || isNaN(widthNum)) {
    throw new Error('Invalid input');
  }

  if (lengthNum < 0 || widthNum < 0) {
    return Math.abs(2 * (lengthNum + widthNum)); // Ensuring non-negative result
  }

  return 2 * (lengthNum + widthNum);
}
