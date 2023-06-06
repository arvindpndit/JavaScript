# Coercion

Coercion in programming refers to the process of converting one type of value to another type. It involves type interconversion, where values are transformed from their original type to a different type, either explicitly or implicitly. Coercion is a fundamental concept in many programming languages, including JavaScript.

This type interconversion can be done:

- Explicitly: when we manually command to convert types.
- Implicitly: when the language automatically converts types.

Note: In languages like C, C++, and Java, types exist for variables. For example, in C++:

```cpp
int age = 10;
bool authentication = false;
```

But in JavaScript, types exist for the values:

```javascript
let age = 10;
let name = "arvindPandit";
```

### How JS handles coercion?

Let's first learn about abstract operations.
They are internal algorithms of ECMAScript/JS that end-users cannot use directly. They are made to understand the documentation. Some examples of abstract operations include:

- ToNumber
- ToString
- ToBoolean
- ToPrimitive

Note: We cannot directly call these abstract operators, but a few JS operations like subtraction (-), addition (+), etc., internally call them. Hence, we can mimic them using these operations.

### ToNumber

We can use the subtraction operation (-) to mimic the ToNumber abstract operation.
ECMAScript documentation link: [ToNumber](https://262.ecma-international.org/13.0/#sec-tonumber)

Note: Subtraction always converts both operands to a number.

Let's consider two variables, `a` and `b`, and do `a - b`:
Here, `a` is lval (left value), and `b` is rval (right value).

If any of the operands is not a number, it will undergo the ToNumber abstract operation:

- `lnum = ToNumber(a)`
- `rnum = ToNumber(b)`

Return `lnum - rnum`.

### Some string to number conversion examples:

- "" ➡️ 0
- "0" ➡️ 0
- "arvind" ➡️ NaN
- "009" ➡️ 9
- "24.4" ➡️ 24.4
- "." ➡️ NaN
- "$" ➡️ NaN

### Array to number conversion examples:

- [""] ➡️ 0
- [] ➡️ NaN
- [null] ➡️ 0
- [1,2,3] ➡️ NaN
- [[[]]] ➡️ 0

### Coercion Examples in JavaScript

Now, let's explore some examples of coercion in JavaScript using the subtraction operator:

```javascript
console.log(5 - 6);
// Output: -1
// Both values are numbers, so the output will be -1

console.log("7" - 5);
// Output: 2
// Here, the lval is a string and the rval is a number.
// JS implicitly converts "7" to 7: 7 - 5 = 2

console.log(true - false);
// Output: 1
// Both lval and rval are booleans.
// Both values undergo the ToNumber abstract operation:
// true ➡️ 1 and false ➡️ 0: 1 - 0 = 1

console.log(undefined - 1);
// Output: NaN
// The lval is undefined (not a number).
// It undergoes the ToNumber abstract operation: undefined ➡️ NaN
// NaN - 1 = NaN

console.log(3 - null);
// Output: 3
// The rval is null, so it undergoes the ToNumber abstract operation: null ➡️ 0
// 3 - 0 = 3

console.log(undefined - null);
// Output: NaN
// Both values are not
//numbers, so they undergo the ToNumber abstract operation:
// undefined ➡️ NaN and null ➡️ 0: NaN - 0 = NaN

console.log("7" - "5");
// Output: 2
// Both values undergo the ToNumber abstract operation: 7 - 5 = 2

console.log("arvind" - 4);
// Output: NaN
// The lval is not a number, so it undergoes the ToNumber abstract operation: "arvind" ➡️ NaN
// NaN - 4 = NaN
```

### Conclusion

Coercion is an essential concept in JavaScript, allowing for type interconversion. By understanding the behavior of abstract operations like ToNumber and leveraging certain operators like subtraction, we can effectively perform type conversions in JS. Coercion can be explicit, where we manually command the type conversion, or implicit, where the language automatically converts types based on context. Being aware of how coercion works is crucial for writing robust and predictable JavaScript code.
