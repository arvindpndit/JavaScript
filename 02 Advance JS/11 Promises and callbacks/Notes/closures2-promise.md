# Promises and Callbacks

This README file provides an overview of closures and their role in JavaScript. We will explore various examples to understand how closures work and their significance.

## Example: Using `setTimeout` and Closures

Let's start with an example that demonstrates the concept of closures with the `setTimeout` function.

```javascript
function printName(lastName) {
  setTimeout(function writeName() {
    console.log(`arvind ${lastName}`);
  }, 5000);
  console.log("function printName is ended");
}

console.log("first statement");
printName("pandit");
console.log("last statement");
```

In this code snippet, the `printName` function is called and passed the argument `"pandit"`. However, the `setTimeout` callback function `writeName` is executed after a delay of 5000 milliseconds. Surprisingly, even though the `printName` function has already ended, `writeName` is still able to access the `lastName` variable. This behavior is possible due to closures.

## Closure

A closure is when a function "remembers" its lexical scope, even when it is executed outside that lexical scope.

**Example 1:**

```javascript
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
```

In this example, even though the value of `lastName` is modified inside the `printName` function after the `setTimeout` is defined, the closure allows the `writeName` function to access the updated value when it is eventually executed.

**Example 2:**

```javascript
function printName(name) {
  console.log(`name is printed inside printName ${name}`);
  return function printingName() {
    console.log(`name is printed inside printingName ${name}`);
  };
}

var newName = printName("arvind");
newName();
```

Here, the `printingName` function is returned from the `printName` function and assigned to the variable `newName`. Even when executed outside the lexical scope of `printName`, `newName` can still access the `name` variable due to closures.

**Example 3:**

```javascript
function test() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function exec() {
      console.log(`i: ${i}`);
    }, i * 1000);
  }
}

test();
```

In this example, the `setTimeout` callback function `exec` is executed after a certain time interval. However, the variable `i` is shared among the different callback functions created in each iteration of the loop. As a result, when the callbacks are finally executed, they all access the same value of `i`, which is the last value from the loop (i.e., `3`), due to closures.

**Example 4:**

```javascript
function test() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function exec() {
      console.log(`i: ${i}`);
    }, i * 1000);
  }
}

test();
```

In this modified example, the `let` keyword is used to declare the loop variable `i`. Using `let` creates a new block scope for each iteration of the loop. As a result, each callback function created by `setTimeout` has its own separate copy of `i`, leading to the expected output.

## Conclusion

Closures are a powerful feature in JavaScript that allow functions to retain access to variables from their lexical scope, even when executed outside that scope. Understanding closures is essential for working with asynchronous code, callbacks, and other advanced JavaScript concepts.
