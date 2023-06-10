function printName(name) {
  console.log(`name is printed inside printName ${name}`);
  return function printingName() {
    console.log(`name is printed inside printingName ${name}`);
  };
}

var newName = printName("arvind");
newName();
/**
 * newName is accessing the name function outside the printName
 * this is due to the closure
 * and remembers the variable name even executed outside the printName
 */
