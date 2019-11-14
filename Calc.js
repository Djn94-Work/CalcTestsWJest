class Calculator {
  constructor(a) {
    this.a = a;
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
    return this.a;
  }
  RPN(string) {
    const operators = ["+", "-", "*", "/"];
    console.log(string.split("+", "-", "/", "*"));
  }
}
class Rpncalc {
  constructor() {}
  rpn(string) {
    let newString = string.split(" "); //removes spaces, returns
    for (let i = 0; i < newString.length; i++) {
      //iterate through the given problem
      let answer = 0; //
      let tempNumbers = []; //to store the current list of numbers to be operated on
      let operators = ["+", "-", "/", "*"]; //operator array
      if (!operators.includes(newString[i])) {
        //if the input is a number not a sign
        newString[i].parseInt(); //turn the string into a number
        tempNumbers.push(newString[i]); // add current numbers until an operator is hit
      }
      if (operators.includes(newString[i])) {
        //when the operator is hit
        let operator = newString[i]; //Pull the operator
        let tempAnswer = tempNumbers[1] + operator + tempNumber[2]; //Calculate the answer chunk
        // console.log(newString[i] + "is an operator");
        //apply operator to numbers within tempNumbers Array
        //Take result and incorporate into answer variable
      }
    }
  }
}

//Sort through string, if entry is number, store to side, if entry is operator, operate on side stored
//integers and incorporate into answer variable.
console.log(new Rpncalc().rpn("1 2 +"));

// console.log(
//   new Calculator(5)
//     .add(3)
//     .subtract(3)
//     .add(1200)
//     .clear()
//     .subtract(2)
//     .multiply(2)
//     .divide(98)
//     .equals()
// );
