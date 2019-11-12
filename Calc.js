class Calculator {
  constructor(a, answ) {
    this.a = a;
    this.answ = answ;
  }
  return() {
    return this;
  }
  add(c) {
    this.a = this.a + c;
    return this;
  }
  subtract(b) {
    this.a = this.a - b;
    return this;
  }
  multiply(b) {
    this.a = this.a * b;
    return this;
  }
  divide(b) {
    this.a = this.a / b;
    return this;
  }
  clear() {
    this.a = 0;
    return this;
  }
  equals() {
    this.answ = this.a;
    return this.answ;
  }
}
console.log(
  new Calculator(5)
    .add(3)
    .subtract(3)
    .add(1200)
    .clear()
    .subtract(2)
    .multiply(2)
    .divide(98)
    .equals()
);
