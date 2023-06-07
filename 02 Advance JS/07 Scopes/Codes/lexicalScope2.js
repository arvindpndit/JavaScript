var myName = "arvind";

console.log(myName); //arvind
console.log(mathsMarks); //error : mathsMarks is not defined

function printMathsMarks() {
  var mathsMarks = 99;
  console.log(myName); //arvind
  console.log(mathsMarks); //99
}

printMathsMarks();
