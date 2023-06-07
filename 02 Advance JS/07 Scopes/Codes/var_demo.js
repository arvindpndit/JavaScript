var myName = "arvind";

function printName() {
  var userName = "arvind pandit";
  console.log(myName);
  console.log(userName);
}

printName();
console.log(myName);
console.log(userName); //throw error ? userName has a scope of printName function
