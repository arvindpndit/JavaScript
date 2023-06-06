# Coercion-2: ToString

In the previous sections, we explored the concept of coercion, abstract operations, and ToNumber conversion in JavaScript. Now, let's dive into another important abstract operation called ToString. ToString is responsible for converting values to their string representations.

## Using the Addition Operator for ToString

In JavaScript, we can mimic the ToString abstract operation using the addition operator (+). The addition operator performs either string concatenation or numeric addition, depending on the types of the operands involved.

## Conversion Process with ToString

Consider two variables, `a` and `b`, and perform the operation `a + b`. Here, `a` represents the lval (left value), and `b` represents the rval (right value).

If either operand is not a number, it will undergo the ToPrimitive abstract operation:

- `lprim = ToPrimitive(a)`
- `rprim = ToPrimitive(b)`

If `lprim` or `rprim` is a string, the operation will perform string concatenation. Otherwise, both `lprim` and `rprim` are converted to numbers using the ToNumber abstract operation:

- `lnum = ToNumber(lprim)`
- `rnum = ToNumber(rprim)`

Finally, the result is obtained by performing the numeric addition (`lnum + rnum`).

## String Conversion Examples

Here are some examples of string conversion using ToString:

- `null` ➡️ `"null"`
- `undefined` ➡️ `"undefined"`
- `true` ➡️ `"true"`
- `2.3` ➡️ `"2.3"`
- `0` ➡️ `"0"`
- `-0` ➡️ `"0"`
- `[]` ➡️ `""`
- `[1,2,3]` ➡️ `"1,2,3"`
- `[null, undefined]` ➡️ `","`
- `[[], [], []]` ➡️ `", , ,"`
- `[,,,]` ➡️ `",,,"`

## Examples of ToString Conversion

Let's explore some examples of ToString conversion in JavaScript using the addition operator:

```javascript
console.log(3 + 5);
// Output: 8
// Since both values are numbers, they are added together: 3 + 5 = 8

console.log(7 + "6");
// Output: "76"
// The rval is a string, so the lval is converted to a string using the ToString abstract operation:
// 7 ➡️ "7"
// "7" + "6" = "76"

console.log(typeof (7 + "6")); // Output: "string"
console.log(typeof (3 + 5)); // Output: "number"

console.log(undefined + "7"); // Output: "undefined7"
console.log(undefined + 7); // Output: "NaN"

console.log(true + 5);
// Output: 6
// Since both values are not strings, the operation tries to perform string concatenation.
// The true value undergoes the ToNumber abstract operation: true ➡️ 1
// 1 + 5 = 6

console.log(null + undefined);
// Output: NaN
// undefined ➡️ NaN and null ➡️ 0
// 0 + NaN = NaN

console.log("null" + undefined); // Output: "nullundefined"
```

By understanding the ToString abstract operation and utilizing the addition operator, we can effectively convert values to their string representations in JavaScript.
