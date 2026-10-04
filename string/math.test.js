const {
  add,
  divide,
  mulitply,
  subtract,
  findMax,
  squareRoot,
} = require("./math");

//Math tests of + - * /

describe("Math Tests for adding, subtracting, multiply, and divide", () => {
  test("adds two numbers", () => {
    expect(add(2, 2)).toBe(4);
  });
  test("divides two numbers returning the quotient", () => {
    expect(divide(10, 5)).toBe(2);
  });
  test("multiplies two numbers returning the product", () => {
    expect(mulitply(20, 10)).toBe(200);
  });
  test("subtract two numbers returning the difference", () => {
    expect(subtract(35, 5)).toBe(30);
  });
});

//Advance Math Tests consisting of square root and a max

describe("Advance math", () => {
  test("returns max number from two numbers", () => {
    expect(findMax(30, 10)).toBe(30);
  });

  test("returns the correct square root for perfect squares", () => {
    expect(squareRoot(4)).toBe(2);
    expect(squareRoot(9)).toBe(3);
    expect(squareRoot(100)).toBe(10);
  });
});
