export default function calculateCanvasDiagonal(length: string, width: string): number {
  // Convert to numbers
  const numLength = parseFloat(length);
  const numWidth = parseFloat(width);

  // Validate input
  if (isNaN(numLength) || isNaN(numWidth)) {
    throw new Error("Invalid input: length and width must be numbers");
  }

  // Ensure values are positive
  const absLength = Math.abs(numLength);
  const absWidth = Math.abs(numWidth);

  // Calculate diagonal using Pythagorean theorem
  return Math.sqrt(absLength ** 2 + absWidth ** 2);
}
