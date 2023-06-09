var x = function anonyMous() {
  console.log(
    "the scope of this anonymous function is inside the scope of the x"
  );
};

x();
//anonyMous(); //throw an error -anonyMous is not defined
console.log(typeof x); //function

console.log(typeof x()); //undefined
/**
 * if nothing is returned from a function
 * then it returns "undefined" by default
 */

var y = function () {
  return 7;
};

console.log(typeof y); //function
console.log(typeof y()); //number because we're returning number 7;

var z = function () {
  return "arvind";
};

console.log(z()); //string because we're returing string "arvind"
