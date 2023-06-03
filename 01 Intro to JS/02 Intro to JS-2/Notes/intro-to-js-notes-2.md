# Introduction to JavaScript - Part 2

In this document, we will continue our exploration of JavaScript by discussing various operators and control flow statements. We will cover comparison operators, string-based operators, bitwise operators, the ternary operator, conditionals, loops, break and continue statements, switch statements, and unary operators. Let's dive in!

## Comparison Operators

Comparison operators are used to compare two values and return a boolean value (true or false). Here are the commonly used comparison operators in JavaScript:

- `>`: Greater than
- `<`: Less than
- `>=`: Greater than or equal to
- `<=`: Less than or equal to
- `!=`: Not equal to (type coercion)
- `!==`: Not equal to (strict comparison)
- `==`: Equal to (type coercion)
- `===`: Equal to (strict comparison)

## String-Based Operators

JavaScript provides a concatenation operator (`+`) to join two or more strings together. Here's an example:

```javascript
console.log("Arvind " + "Pandit"); // Output: Arvind Pandit
console.log("Js basics " + 2); // Output: Js basics 2 (coercion discussed later)
```

## Bitwise Operators

Bitwise operators manipulate the binary representation of numbers. Here are the bitwise operators available in JavaScript:

- `&`: Bitwise AND
- `|`: Bitwise OR
- `^`: Bitwise XOR
- `~`: Bitwise NOT
- `<<`: Left shift
- `>>`: Right shift

## Ternary Operator

The ternary operator provides a concise way to write conditional statements. It takes three operands: a condition, a value to be returned if the condition is true, and a value to be returned if the condition is false. Here's an example:

```javascript
2 < 1 ? console.log("Arvind") : console.log("Pandit"); // Output: Pandit
```

## Conditionals

Conditionals in JavaScript allow you to execute different blocks of code based on certain conditions. The most common conditional statement is the `if` statement. Here's an example:

```javascript
let x = 10;

if (x >= 10) {
  console.log("Greater than or equal to 10");
} else {
  console.log("Less than 10");
}
```

Additionally, you can use the `if-else if-else` structure for multiple conditions.

## Loops

Loops allow you to repeatedly execute a block of code. JavaScript provides two commonly used loop structures: `for` and `while` loops.

### `for` Loop

The `for` loop repeats a block of code for a specified number of times. Here's an example:

```javascript
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
```

### `while` Loop

The `while` loop repeats a block of code as long as a specified condition is true. Here's an example:

```javascript
let x = 0;
while (x <= 10) {
  console.log(x);
  x++;
}
```

## Break and Continue

The `break` statement is used to exit the nearest enclosing loop or switch statement. The `continue` statement skips the current iteration and proceeds to the next iteration. Here are some examples:

```javascript
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log("Breaking out the nearest loop");
    break;
  } else {
    console.log(i);
  }
}

let text = "";
for (let i = 0; i < 10; i++) {
  if (i <= 3) {
    continue;
  }
  text = text + i;
}
console.log(text);
```

## Switch Statement

The `switch` statement allows you to perform different actions based on different conditions. Here's an example:

```javascript
let day = "wednesday";

switch (day) {
  case "monday":
    console.log("Monday");
    break;
  case "tuesday":
    console.log("Tuesday");
    break;
  case "sunday":
    console.log("Sunday");
    break;
  default:
    console.log("Not a valid day");
}
```

## Unary Operators

Unary operators are used to perform operations on a single operand. Some commonly used unary operators in JavaScript are:

- `x++`: Post-increment
- `++x`: Pre-increment
- `x--`: Post-decrement
- `--x`: Pre-decrement

Let's see some examples:

```javascript
let x = 10;
let y = x++;

console.log(y); // Output: 10
console.log(x); // Output: 11

let m = 100;
let c = m--;

console.log(c); // Output: 100
console.log(m); // Output: 99
```

In the first example, `x++` is a post-increment operator, which means the value of `x` is first assigned to `y`, and then `x` is incremented by 1.

In the second example, `m--` is a post-decrement operator, which means the value of `m` is first assigned to `c`, and then `m` is decremented by 1.

Remember that post-increment and post-decrement operators first assign the current value and then perform the increment or decrement operation.

## Conclusion

In this readme file, we explored various operators and control flow statements in JavaScript. We discussed comparison operators, string-based operators, bitwise operators, the ternary operator, conditionals, loops, break and continue statements, switch statements, and unary operators. Understanding these concepts will greatly enhance your ability to write powerful and efficient JavaScript code.
