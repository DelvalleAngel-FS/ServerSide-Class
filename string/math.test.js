const { add } = require("./math");

describe("Math Tests for adding, subtracting, multiply, and divide", () => {
  test("adds two numbers", () => {
    expect(add(2, 2)).toBe(4);
  });
  test("adds a negative number", () => {
    expect(add(10, -5)).toBe(5);
  });
});

describe("Advance math", () => {
  test("multiplies two numbers", () => {
    expect(mulitply(2, 2)).toBe(4);
  });
});
