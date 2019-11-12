describe("Calculator", () => {
  test('has a getter on "register" called "equals"'),
    () => {
      const subject = new Calculator(5).expect(subject.equals).toBeDefined();
    };
});
