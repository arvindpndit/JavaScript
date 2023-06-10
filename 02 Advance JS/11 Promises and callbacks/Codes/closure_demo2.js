function printName(lastName) {
  setTimeout(function () {
    console.log(`arvind ${lastName}`);
  }, 5000);
  console.log("function printName is ended");
  lastName = "pandit prajapati";
}

console.log("first statement");
printName("pandit");
console.log("last statement");
