console.log(myName); //error - Cannot access 'myName' before initialization
let myName = "arvind";
/**
 * let is a block scoped variable
 * so we cannot use it before initializing
 *
 */
console.log(myName); //arvind
