console.log(myName);
/**
 * when js comes to the execution phase
 * myName variable exists in the global scope
 * but it is not assigned any value here
 * so "undefined" will be printed
 */

var myName = "arvind"; //global scope

function printName() {
  console.log(myName);
}

printName();
