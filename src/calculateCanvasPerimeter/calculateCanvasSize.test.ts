import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "20");
    expect(result).toEqual(200);
  });

  test("throws error for invalid dimensions", () => {
    expect(() => calculateCanvasSize("invalid", "20")).toThrow("Invalid dimensions provided.");
    expect(() => calculateCanvasSize("10", "invalid")).toThrow("Invalid dimensions provided.");
  });
});