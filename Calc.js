const tempNumbers = []; //to store the current list of numbers to be operated on
let answer = []; //to be concatenated at the end to return result
let result = 0;
let addedNum = 0;
let subtractedNum;

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
        // add current numbers until an operator is hit
      }
      if (operators.includes(newString[i])) {
        //when the operator is hit
        let operator = newString[i]; //Pull the operator
        switch (
          operator //apply operator to numbers within tempNumbers Array
        ) {
          case "+":
            for (i = 0; i < tempNumbers.length; i++) {
              //length of numbers to be added
              addedNum += tempNumbers[i]; //increment addedNum var by every tempNum
            }
            tempNumbers.length = 0; //clear tempNum
            answer.push(addedNum); //push addedNum to answer to eb calculated array
            break;
          case "-":
            answer.push(tempNumbers[0] - tempNumbers[1]);
            console.log("you subtracted!");
            break;
          case "*":
            answer.push(tempNumbers[0] * tempNumbers[1]);
            break;
          case "/":
            answer.push(tempNumbers[0] / tempNumbers[1]);
            break;
          default:
            answer.push(0);
        }
        //Take result and incorporate into answer array
      }
    }
    for (let i = 0; i < answer.length; i++) {
      result += answer[i];
      // console.log('here you go it"s the ' + result);
    }
    console.log(result);
  }
}

new Rpncalc().rpn("20 12 -");

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
