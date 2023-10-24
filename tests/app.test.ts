// A A A
describe("Test in app file", () => {
  test("should be 30", () => {
    // 1. Arrange
    const num1 = 20;
    const num2 = 10;

    // 2. Act
    const result = num1 + num2;

    // 3. Assert
    expect(result).toBe(30);
  });
});
