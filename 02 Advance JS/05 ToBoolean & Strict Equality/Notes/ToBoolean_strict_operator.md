# Coercion 4 - ToBoolean & Equality Operator

## ToBoolean

The ToBoolean abstract operation converts the given type to a boolean value. ToBoolean works differently compared to ToString or ToNumber. It maintains a list of values that, when received as an argument, return false (known as falsy values), while everything else returns true (known as truthy values).

List of falsy values:

- null
- undefined
- +0
- -0
- NaN
- "" (empty string)
- false

If any of these values are present in the argument, ToBoolean returns false; otherwise, it returns true.

We can test the ToBoolean operation using the logical NOT operator (!).

Example:

```javascript
!a
oldValue = ToBoolean(a);
if (oldValue is True) return false;
else return true;
```

You can read more about the ToBoolean operation in the [ECMAScript specification Section 7.1.2: ToBoolean](https://262.ecma-international.org/13.0/#sec-toboolean).

## Equality Operator

The equality operator in JavaScript comes in two forms: strict equality (`===`) and abstract equality (`==`).

The main difference between `==` and `===` is that `==` performs type coercion if the types are not the same, while `===` strictly compares both the values and types without any coercion.

Strict equality examples:

```javascript
console.log(7 === 7); // true

console.log(NaN === NaN);
/**
 * In JavaScript, NaN is the only primitive value not equal to itself.
 */

let x = NaN;
console.log(x === x); // false (as per the above rule)

console.log(undefined === undefined); // true
console.log(null === null); // true

console.log({} === {});
/**
 * These two objects are at different memory locations,
 * hence they won't be equal.
 * false
 */

let y = { a: "arvind" };
console.log(y === y);
/**
 * Here, y indicates the {a: "arvind"} object,
 * so it will give true.
 */

console.log(-0 === 0); // true
```

In JavaScript, NaN is the only primitive value not equal to itself.

By understanding the concepts of ToBoolean and the Equality Operator, we can effectively convert values to booleans and compare values with different equality operators, considering both type and value aspects.

You can refer to the [ECMAScript specification Section 7.1.2: ToBoolean](https://262.ecma-international.org/13.0/#sec-toboolean) for more information on ToBoolean, and the [ECMAScript specification Section 7.2.14: Strict Equality Comparison](https://262.ecma-international.org/13.0/#sec-isstrictlyequal) for more details on the strict equality operator.
