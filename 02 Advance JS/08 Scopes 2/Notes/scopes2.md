# Scopes 2

In JavaScript, scopes play a crucial role in determining the visibility and accessibility of variables within a program. This README file explores various concepts related to scopes and their behaviors.

## Undefined and Undeclared Variables

**Undefined** refers to the variable state when it exists in the scope, but during the execution phase, it has not been assigned a value yet.

Example:

```javascript
console.log(myName); // undefined
var myName = "arvind";
console.log(myName); // arvind
```

In the above example, `myName` is initially `undefined` as it exists in the scope but has not been assigned a value. Later, it is assigned the value `"arvind"`, resulting in `arvind` being printed.

**Undeclared** refers to the variable state when a variable is used before it is formally declared or assigned a value. It typically leads to an error.

Example:

```javascript
console.log(myName); // Error: Cannot access 'myName' before initialization
let myName = "arvind";
console.log(myName); // arvind
```

In the above example, `myName` is used before it is formally declared, resulting in an error. Once declared and assigned a value, it can be accessed without issues.

## Autoglobals

Autoglobals are variables that are automatically considered to have global scope when they are used in a scope where they are not declared.

Example 1:

```javascript
function printName() {
  myName = "arvind"; // autoglobal
  console.log(myName);
}

printName();
```

In the above example, `myName` is not declared within the `printName` function, but it is used as a target (assigned a value). JavaScript automatically considers it as a global variable, and its value is printed successfully.

Example 2:

```javascript
myName = "arvind"; // autoglobal
function printName() {
  console.log(myName);
}

printName();
```

In this example, `myName` is assigned a value outside any function, making it a global variable. It can be accessed within the `printName` function and its value is printed successfully.

## Strict Mode

Strict mode is a feature in JavaScript that enforces stricter rules and helps in writing cleaner and more reliable code. It enables a safer subset of JavaScript, preventing the use of certain error-prone practices.

Example:

```javascript
"use strict";

function fun() {
  x = "arvind"; // Error: x is not defined
  console.log(x);
}

fun();
```

In the above example, the `"use strict"` directive enables strict mode. The code attempts to assign a value to an undeclared variable `x`, leading to an error. Strict mode helps in identifying such issues and promotes better coding practices.

## Hoisting

Hoisting is a behavior in JavaScript where function and variable declarations are moved to the top of their containing scope during the compilation phase. This allows us to access functions and variables before they are formally declared.

Example:

```javascript
fun();

function fun() {
  var doFun = "let's do fun";
  console.log(doFun);
}
```

In the above example, the function `fun()` is called before its formal declaration. However, due to hoisting, the function is moved to the top during the parsing phase, allowing it to be invoked successfully.

## Conclusion

Scopes in JavaScript govern the visibility and accessibility of variables. Understanding the concepts of undefined and undeclared variables, autoglobals, strict mode, and hoisting is essential for writing reliable and maintainable code. By mastering these concepts, you can effectively manage variables and their scope within your JavaScript programs.
