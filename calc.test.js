describe("Calculator", () => {
  test.todo('has a getter on "register" called "equals"'),
    () => {
      const subject = new Calculator(5).expect(subject.equals).toBeDefined();
    };
});
describe("Calculator", () => {
  test.todo('has a getter on "register" called "return"'),
    () => {
      const subject = new Calculator(5).expect(subject.return).toBeDefined();
    };
});
describe("Calculator", () => {
  test.todo('has a getter on "register" called "add"'),
    () => {
      const subject = new Calculator(5).expect(subject.add).toBeDefined();
    };
});
describe("Calculator", () => {
  test.todo('has a getter on "register" called "subtract"'),
    () => {
      const subject = new Calculator(5).expect(subject.subtract).toBeDefined();
    };
});
describe("Calculator", () => {
  test.todo('has a getter on "register" called "multiply"'),
    () => {
      const subject = new Calculator(5).expect(subject.multiply).toBeDefined();
    };
});
describe("Calculator", () => {
  test.todo('has a getter on "register" called "divide"'),
    () => {
      const subject = new Calculator(5).expect(subject.divide).toBeDefined();
    };
});

describe("Calculator Functionality", () => {
  test.todo("Check 2 plus 3"),
    () => {
      expect(new Calculator(2).add(3)).toBe(5);
    };
});

describe("Calculator Functionality", () => {
  test.todo("Check 6 times 7"),
    () => {
      expect(new Calculator(6).multiply(7)).toBe(42);
    };
});

describe("Calculator Functionality", () => {
  test.todo("Check 44 minus 3"),
    () => {
      expect(new Calculator(44).subtract(3)).toBe(41);
    };
});

describe("Calculator Functionality", () => {
  test.todo("Check 666 divided by 1"),
    () => {
      expect(new Calculator(666).divide(1)).toBe(666);
    };
});
