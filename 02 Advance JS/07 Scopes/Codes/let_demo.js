let myName = "arvind";

function printName() {
  console.log(userName); //Cannot access 'userName' before initialization
  let userName = "arvind pandit";
  console.log(myName);
}

printName();
