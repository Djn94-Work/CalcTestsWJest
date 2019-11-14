describe("Calculator has methods", () => {
  test.todo('has a setter on "register" called "equals"'),
    () => {
      const subject = new Calculator(5).expect(subject.equals).toBeDefined();
    };
  test.todo('has a getter on "register" called "return"'),
    () => {
      const subject = new Calculator(5).expect(subject.return).toBeDefined();
    };
  test.todo('has a getter on "register" called "add"'),
    () => {
      const subject = new Calculator(5).expect(subject.add).toBeDefined();
    };
  test.todo('has a getter on "register" called "subtract"'),
    () => {
      const subject = new Calculator(5).expect(subject.subtract).toBeDefined();
    };
  test.todo('has a getter on "register" called "multiply"'),
    () => {
      const subject = new Calculator(5).expect(subject.multiply).toBeDefined();
    };
  test.todo('has a getter on "register" called "divide"'),
    () => {
      const subject = new Calculator(5).expect(subject.divide).toBeDefined();
    };
});

describe("Calculator Method Functionality", () => {
  test.todo("Check 2 plus 3"),
    () => {
      expect(new Calculator(2).add(3)).toBe(5);
    };
  test.todo("Check 666 divided by 2 equals 666"),
    () => {
      expect(new Calculator(666).divide(2).equals()).toBe(333);
    };
  test.todo("Check 6 times 7"),
    () => {
      expect(new Calculator(6).multiply(7)).toBe(42);
    };
  test.todo("Check 666 divided by 1"),
    () => {
      expect(new Calculator(666).divide(1)).toBe(666);
    };
  test.todo("Check 6 times 7"),
    () => {
      expect(new Calculator(6).multiply(7)).toBe(42);
    };
  test.todo("Check 44 minus 3"),
    () => {
      expect(new Calculator(44).subtract(3)).toBe(41);
    };
});

describe("Calculator RPN Functionality", () => {
  test.todo("Check 1 plus 2"),
    () => {
      expect(new Calculator().rpn("1 2 +")).toBe(3);
    };
  test.todo("Check 1 plus 2 minus 3"),
    () => {
      expect(new Calculator().rpn("1 2 + 3 -")).toBe(0);
    };
  test.todo("Check 1 plus 2 times 6"),
    () => {
      expect(new Calculator().rpn("1 2 + 6 *")).toBe(18);
    };
  test.todo("Check 1 plus 2 times 6 divided by 2"),
    () => {
      expect(new Calculator().rpn("1 2 + 6 * 2 /")).toBe(9);
    };
});
