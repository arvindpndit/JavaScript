var myName = "arvind";

function printMathsMarks() {
  console.log(myName); //arvind
  englishMarks = 98; //autoglobal ->js will make assign this variable global scope
  console.log(englishMarks);
}
//console.log(englishMarks); //throw an error
printMathsMarks();
