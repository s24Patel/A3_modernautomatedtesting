import calculateCanvasSize from "./calculateCanvasSize";
import calculatePaintRequired from "./calculatePaintRequired";

function main(): void {
  try {
    const canvasArea: number = calculateCanvasSize("10", "20");
    const coveragePerLiter: number = 11.4;

    if (isNaN(canvasArea) || canvasArea <= 0) {
      throw new Error("Invalid canvas area calculated.");
    }

    const paintRequired: number = calculatePaintRequired(canvasArea, coveragePerLiter);

    console.log(`${paintRequired} liters of paint are required to cover ${canvasArea} square meters of canvas.`);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

main();