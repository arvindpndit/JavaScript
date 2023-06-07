# Coercion 5 - Abstract equality & NaN

## Abstract Equality

Abstract equality (`==`) in JavaScript first checks whether the types of the left and right operands are the same. If they are of the same type, it calls strict equality (`===`). If the types are not the same, it performs an algorithm known as the Abstract Equality Comparison, which is defined in the [ECMAScript specification Section 7.2.14: IsLooselyEqual](https://262.ecma-international.org/13.0/#sec-islooselyequal).

Some examples of abstract equality comparisons:

```javascript
// If x is null and y is undefined, return true.
console.log(null == undefined);
//If x is undefined and y is null, return true.
console.log(undefined == null);

//If Type(x) is Number and Type(y) is String, return ! IsLooselyEqual(x, ! ToNumber(y)).
console.log(7 == "7"); //ToNumber('7') -> 7 => 7 == 7 => true
console.log(7 == "seven"); //ToNumber("seven") => NaN => false

// If Type(x) is String and Type(y) is Number, return ! IsLooselyEqual(! ToNumber(x), y).
console.log("10" == 10);

//If Type(x) is Boolean, return ! IsLooselyEqual(! ToNumber(x), y).
console.log(false == 0); //ToNumber(false) ->return 0 => true

//If x or y are any of NaN, +∞𝔽, or -∞𝔽, return false.
console.log(NaN == NaN);
console.log(undefined == undefined); //true

// If Type(x) is either String, Number, BigInt, or Symbol and Type(y) is Object, return ! IsLooselyEqual(x, ? ToPrimitive(y)).

console.log(10 == { a: 10 }); //false
console.log(
  10 ==
    {
      valueOf() {
        return 10;
      },
    }
); //true

console.log(
  "arvind" ==
    {
      a: 10,
      valueOf() {
        return 10;
      },
      toString() {
        return "arvind";
      },
    }
); //false

console.log(
  "arvind" ==
    {
      a: 10,
      valueOf() {
        return {};
      },
      toString() {
        return "arvind";
      },
    }
); //true
```

You can learn more about the Abstract Equality Comparison algorithm in the [ECMAScript specification Section 7.2.14: IsLooselyEqual](https://262.ecma-international.org/13.0/#sec-islooselyequal).

## NaN

NaN stands for "Not a Number," but it actually represents an invalid number. It is the result of operations that cannot produce a meaningful numeric value.

NaN has some interesting characteristics:

- NaN is the only primitive value in JavaScript that doesn't follow the identity property and is not equal to itself.
- When comparing NaN with NaN using strict equality (`===`) or abstract equality (`==`), the result is always false.

Additional functions related to NaN:

- `isNaN`: The `isNaN` function coerces the argument before checking for NaN. It converts the argument to a number and then checks if it is NaN. However, be cautious when using `isNaN`, as it can produce unexpected results for non-numeric values. It's recommended to use `Number.isNaN` for more reliable NaN checks.
- `Number.isNaN`: The `Number.isNaN` function is a more reliable way to check for NaN. It performs a strict check and does not perform any coercion. It returns true only if the provided value is exactly NaN.

Here are the code snippets related to NaN:

```javascript
// Using isNaN function
let a = "arvind";
console.log(isNaN(a)); // true

let b = undefined;
console.log(isNaN(b)); // true

let c = Infinity;
console.log(isNaN(c)); // false

let d = "arvind";
typeof d == "number" && isNaN(d) ? console.log("NaN") : console.log("

Not NaN");

// Using Number.isNaN function
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(Infinity)); // false
console.log(Number.isNaN("arvind")); // false
```

Remember to handle NaN comparisons and checks with caution due to their unique behavior.

## Conclusion

In this readme, we explored one of the most important topics in JavaScript: coercion. We learned about abstract operators like ToNumber, ToString, ToPrimitive, and ToBoolean. We also delved into the differences between strict equality (`===`) and abstract equality (`==`), as well as the peculiarities of NaN.

Understanding coercion is crucial for writing robust and predictable code in JavaScript. Coercion plays a significant role in JavaScript's type system, influencing how values are compared and transformed.

Feel free to experiment with different scenarios and refer to the ECMAScript specification for a comprehensive understanding of coercion and related concepts.

Remember to always write clear and readable code, considering the behavior of coercion and choosing the appropriate equality operator based on your specific use case.
