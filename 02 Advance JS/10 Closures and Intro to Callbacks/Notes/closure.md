# Closures

This README.md file provides an overview of closures and their relation to special functions like `setTimeout`, `setInterval`, and `.map()`. Understanding closures requires familiarity with these functions and concepts. Let's dive into each of them.

## setTimeout

`setTimeout` is a function that allows us to execute a task once after a specific time interval.

**Code Example:**

```javascript
// setTimeout is a function performed after a given interval of time

setTimeout(function () {
  console.log("arvind");
}, 2000);

setTimeout(function () {
  console.log("pandit");
}, 3000);
```

## setInterval

`setInterval` is a function that enables the execution of a task repeatedly after a specified time interval.

**Code Example:**

```javascript
// setInterval performs a task repeatedly after a given interval of time

setInterval(function () {
  console.log("hello! arvind");
}, 1000);
```

## Callback Function

A callback function is a function that is passed as an argument to another function. In mathematical terms, it can be seen as `f(g(x))`, where `g(x)` is the callback function passed inside function `f`.

Let's consider an example to understand callbacks:

```javascript
function arvind(fn) {
  // fn is a callback function -> function passed inside another function
  console.log("arvind");
  fn();
}

function pandit() {
  console.log("pandit");
}

arvind(pandit);
```

In the above code, `pandit` is a callback function passed as an argument to the `arvind` function.

Note: Both `setTimeout` and `setInterval` accept callbacks as arguments.

## The .map() Function

The `.map()` function is another function that takes a callback. It is used to transform elements in an array and return a new array with the modified values.

**Code Example:**

```javascript
var arr = [1, 2, 3, 4, 5];

var newArr = arr.map(function (element, index) {
  console.log(element, index);
  return element * element;
});

console.log(newArr, arr);

var students = arr.map(function (element) {
  return "student" + element;
});

console.log(students);
```

In the above code, we use the `.map()` function to square each element of the `arr` array and create a new array `newArr`. We also demonstrate how to append "student" to each element of the `arr` array using the `.map()` function.

## Conclusion

In this README, we introduced the concept of closures and their relationship with special functions like `setTimeout`, `setInterval`, and `.map()`. Closures play a vital role in JavaScript and will be explored further in the next lesson.
