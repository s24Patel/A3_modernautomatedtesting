export default function calculateCanvasSize(length: string, width: string): number {
  const lengthNum = parseFloat(length);
  const widthNum = parseFloat(width);

  if (isNaN(lengthNum) || isNaN(widthNum)) {
    throw new Error("Invalid dimensions provided.");
  }

  return lengthNum * widthNum;
}