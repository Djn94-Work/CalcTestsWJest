const tempNumbers = []; //to store the current list of numbers to be operated on
let answer = []; //to be concatenated at the end to return result

class Rpncalc {
  constructor() {}
  rpn(string) {
    let newString = string.split(" "); //removes spaces, returns
    for (let i = 0; i < newString.length; i++) {
      //iterate through the given problem
      let operators = ["+", "-", "/", "*"]; //operator
      if (!operators.includes(newString[i])) {
        //if the input is a number not a sign
        let stringnum = parseInt(newString[i]); //turn the string into a number
        tempNumbers.push(stringnum);
        console.log(tempNumbers);
        // add current numbers until an operator is hit
      }
      if (operators.includes(newString[i])) {
        //when the operator is hit
        let operator = newString[i]; //Pull the operator

        console.log(operator);
        switch (
          operator //apply operator to numbers within tempNumbers Array
        ) {
          case "+":
            answer.push(tempNumbers[0] + tempNumbers[1]);
            console.log("you added!");
            break;
          case "-":
            answer.push(tempNumbers[0] - tempNumbers[1]);
            console.log("you added!");
            break;
          case "*":
            answer.push(tempNumbers[0] * tempNumbers[1]);
            console.log("you added!");
            break;
          case "/":
            answer.push(tempNumbers[0] / tempNumbers[1]);
            console.log("you added!");
            break;
          default:
            answer.push(0);
        }
        //Take result and incorporate into answer array
      }
    }
    console.log(answer);
  }
}

new Rpncalc().rpn("1 2 +");

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

//Sort through string, if entry is number, store to side, if entry is operator, operate on side stored
//integers and incorporate into answer variable.

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
