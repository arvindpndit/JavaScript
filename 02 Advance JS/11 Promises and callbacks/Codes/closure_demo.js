/**
 * Closure- function remembers its lexical scope
 * even when it is executed outside
 *
 */

function printName(lastName) {
  setTimeout(function () {
    console.log(`arvind ${lastName}`);
  }, 5000);
  console.log("function printName is ended");
}

console.log("first statement");
printName("pandit");
console.log("last statement");
