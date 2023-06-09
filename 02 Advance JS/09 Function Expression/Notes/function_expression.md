# Function Expressions

Function expressions are a way to define functions in JavaScript. They provide flexibility in creating and using functions within your code. This README file explores the concept of function expressions and their characteristics.

## Function Expression vs. Function Definition

**Function Expression**: A function expression is created by assigning a function to a variable. The variable then becomes a reference to the function.

**Function Definition**: A function definition, also known as a function declaration, is created using the `function` keyword followed by the function name.

```javascript
// Function Expression
var printName = function printing() {
  console.log("hello, arvind");
};

// Function Definition
function fun() {
  console.log("inside fun");
}
```

In the above example, `printName` is a function expression, as it is assigned to a variable using the `function` keyword. `fun` is a function definition, as it uses the `function` keyword directly.

Function expressions offer more flexibility as they can be used as values, passed as arguments to other functions, or assigned dynamically. Function definitions, on the other hand, are hoisted and can be accessed anywhere within their scope.

## Types of Function Expressions

There are two types of function expressions:

1. **Anonymous Function**: An anonymous function is a function without a name. It is commonly used when the function is used only once or as a callback function.

2. **Named Function**: A named function expression has a name assigned to it. It aids in better stack traces and self-reference within the function body.

```javascript
var hello = function () {
  console.log("hello");
};

var hello2 = function namedFunction() {
  console.log("named function");
};

hello();
hello2();
```

In the above example, `hello` is an anonymous function, as it does not have a name. `hello2` is a named function, as it is assigned a name `namedFunction`.

Note: Anonymous functions can be harder to debug, and recursion within them can be trickier due to the absence of a named reference.

## Scope of Function Expressions

The scope of a function expression depends on where it is defined and assigned. It follows the scope rules of variables in JavaScript.

```javascript
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

console.log(z()); //string because we're returning string "arvind"
```

This code example demonstrates the usage of function expressions. `x` is a function expression with the name `anonyMous`. It is called using `x()`, and the scope of the function is within the scope of the `x` variable. The code also shows the difference in `typeof` for the function itself (`typeof x`) and the result of calling the function (`typeof x()`). Additionally, the example includes `y`, a function expression that returns a number, and `z`, a function expression that returns a string.

## Conclusion

Function expressions provide a flexible way to define functions in JavaScript. They can be assigned to variables, used as values, and passed as arguments to other functions. Understanding the differences between function expressions and function definitions, as well as the scope of function expressions, is crucial for effective JavaScript programming.
