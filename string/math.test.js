const { add, divide, mulitply, subtract } = require("./math");

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

// describe("Advance math", () => {
//   test("multiplies two numbers", () => {
//     expect(mulitply(2, 2)).toBe(4);
//   });
// });
