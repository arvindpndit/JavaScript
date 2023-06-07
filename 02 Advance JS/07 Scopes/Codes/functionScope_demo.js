var myName = "arvind"; //global scope

function printName() {
  console.log(myName); //undefined
  /**
   * when js comes to the execution phase
   * myName variable exists in the scope printName function
   * but it is not assigned any value here
   * so "undefined" will be printed
   */
  var myName = "arvind pandit"; //scope of printName
  console.log(myName);
  /**
   * when js comes to the execution phase
   * myName variable exists in the scope printName function
   * and it has assigned the value "arvind pandit"
   * so "arvind pandit" will be printed
   */
}

console.log(myName);
printName();
