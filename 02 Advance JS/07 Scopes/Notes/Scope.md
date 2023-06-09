# Scopes in JavaScript

In JavaScript, scope refers to the visibility and accessibility of variables and functions within a program. Scopes determine where variables and functions are available for use. JavaScript has three types of scopes: global scope, function scope, and block scope.

## Global Scope

Variables declared outside any function or block have global scope. They are accessible from anywhere within the JavaScript file.

Example:

```javascript
var myName = "arvind"; // Global scope

function printName() {
  console.log(myName);
}

printName(); // Output: arvind
```

In the above example, the variable `myName` is declared in the global scope and can be accessed from the `printName` function.

## Function Scope

Variables declared within a function have function scope. They are only accessible within the function.

Example:

```javascript
function printName() {
  var myName = "arvind"; // Function scope
  console.log(myName);
}

printName(); // Output: arvind
console.log(myName); // Error: myName is not defined
```

In the above example, the variable `myName` is declared within the `printName` function and can only be accessed from within that function.

## Block Scope

Block scope was introduced in ECMAScript 6 (ES6) with the introduction of `let` and `const` declarations. Variables declared with `let` and `const` have block scope, which means they are only accessible within the block where they are defined.

Example:

```javascript
{
  var myName = "arvind"; // Block scope with var
  let age = 25; // Block scope with let
  const country = "USA"; // Block scope with const

  console.log(myName); // Output: arvind
  console.log(age); // Output: 25
  console.log(country); // Output: USA
}

console.log(myName); // Output: arvind
console.log(age); // Error: age is not defined
console.log(country); // Error: country is not defined
```

In the above example, the variable `myName` is declared with `var` and has block scope. However, `age` and `country` are declared with `let` and `const`, respectively, and have block scope as well.

## Variable Declarations: var, let, and const

In JavaScript, variable declarations can be made using `var`, `let`, and `const` keywords, each with its own scoping rules.

- `var`: Variables declared with `var` have function scope or global scope, depending on where they are declared. They are hoisted to the top of their scope during the parsing phase.

- `let`: Variables declared with `let` have block scope. They are not hoisted and are only accessible within the block where they are defined.

- `const`: Variables declared with `const` also have block scope like `let`. However, `const` variables are read-only and cannot be reassigned after declaration.

It is recommended to use `let` and `const` for variable declarations to avoid common pitfalls associated with `var`.

## Variable Usage: Target vs Source

In your JavaScript code, each variable can be used in one of two ways: as a target or as a source.

- **Target Usage**: When a variable is used as a target, it means that a value is being assigned to that variable.

Example:

```javascript
x = 10; // x is a target variable
```

In the above example, the variable `x` is used as a target to assign the value `10` to it.

- **Source Usage**: When a variable is used as a source, it means that the variable is being used to retrieve a value or as part of an expression.

Example:

```javascript
y = 10 + x; // x is a source variable
console.log(x); // x is a source variable
```

In the above examples, the variable `x` is used as a source. It is either used to retrieve its value (`10 + x`) or printed to the console.

## Parsing Phase and Execution

JavaScript follows a two-phase process when executing code: parsing and execution.

During the parsing phase, JavaScript assigns scopes to variables and functions without executing the code. It looks for formal declarations and allocates scopes accordingly. However, it does not assign values to variables during this phase.

During the execution phase, JavaScript reads and executes the code, utilizing the assigned scopes. Variables are assigned values and functions are executed.

Example:

```javascript
var myName = "arvind";

function printMathsMarks() {
  var mathsMarks = 99;
  console.log(myName); // Output: arvind
  console.log(mathsMarks); // Output: 99
}

printMathsMarks();
```

In the above example, during the parsing phase, JavaScript assigns scopes to the variables `myName` and `mathsMarks`. In the execution phase, the code is executed, and the assigned values are accessed and printed.

## Lexical Scope

Lexical scope refers to the scope resolution based on the placement of variables and functions in the source code. In JavaScript, lexical scope is determined at the time of code compilation and remains static during runtime. It means that a variable or function can access variables and functions in its outer scope.

Example:

```javascript
function outerFunction() {
  var outerVariable = "I'm from outer function";

  function innerFunction() {
    var innerVariable = "I'm from inner function";
    console.log(outerVariable); // Output: I'm from outer function
    console.log(innerVariable); // Output: I'm from inner function
  }

  innerFunction();
}

outerFunction();
```

In the above example, the variable `outerVariable` defined in the outer function is accessible within the inner function due to lexical scoping.

## Autoglobals

Autoglobals refer to variables that are automatically considered in the global scope if they are not found in any outer scope during the execution phase. This happens when a variable is used as a target reference (assignment) rather than a source reference (value retrieval).

Example:

```javascript
function printMathsMarks() {
  console.log(myName); // Output: arvind
  englishMarks = 98; // Autoglobal: JavaScript assigns it to the global scope
  console.log(englishMarks); // Output: 98
}

printMathsMarks();
console.log(englishMarks); // Output: 98
```

In the above example, the variable `englishMarks` is not declared within the function. However, when it is assigned a value (`englishMarks = 98`), JavaScript automatically considers it as a global variable and assigns it to the global scope.

## Conclusion

Understanding scopes in JavaScript is crucial for writing efficient and bug-free code. Scopes define the visibility and accessibility of variables and functions, ensuring that they are used appropriately within the program. By grasping the concepts of global scope, function scope, block scope, lexical scope, and autoglobals, developers can write better JavaScript code and avoid common pitfalls.

---
