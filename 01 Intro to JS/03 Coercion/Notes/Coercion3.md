# Coercion 3 - ToPrimitive

In JavaScript, the ToPrimitive function is responsible for converting an input argument into a non-object type, also known as a primitive type. If the conversion is not possible, it throws a TypeError.

ToPrimitive takes an optional parameter called preferredType, which helps determine the preferred type of the result if multiple values are possible. If preferredType is not provided, a hint variable is automatically initialized and set to the default. If preferredType is "string", the hint is set to "string". If preferredType is "number", the hint is set to "number".

The conversion process depends on the hint value:

## Hint is String

If the hint is "string", ToPrimitive first calls the toString method on the input value. If the result is a non-object, it is returned. If the result is an object, the valueOf method is called. If the result of valueOf is a non-object, it is returned. If the result is still an object, a TypeError is thrown.

## Hint is Number

If the hint is "number", ToPrimitive first calls the valueOf method on the input value. If the result is a non-object, it is returned. If the result is an object, the toString method is called. If the result of toString is a non-object, it is returned. If the result is still an object, a TypeError is thrown.

Certainly! Here's a tree diagram for the conversion process with the hint as "string" or "number":

```
                        ToPrimitive (hint: string)
                            |
                            |
                            v
                        toString()
                /                      \
      Primitive Value           Object
            |                    (Call toString)
            |                            |
            |                            |
            v                            v
  Non-Object Result          Primitive Result
       (Return)                      (Return)


                        ToPrimitive (hint: number)
                            |
                            |
                            v
                         valueOf()
                /                     \
      Primitive Value            Object
            |                    (Call valueOf)
            |                            |
            |                            |
            v                            v
  Non-Object Result          Primitive Result
       (Return)                      (Return)
```

In this tree diagram, the process starts with the ToPrimitive function at the top. When the hint is "string", it directly calls the toString method. If the result is a non-object, it returns the primitive value as the final result. If the result is an object, it continues to the "Object (Call toString)" branch, where the toString method is called on the object. Again, if the result is a non-object, it returns the primitive value. If the result is still an object, it indicates an error.

Similarly, when the hint is "number", the process starts with the valueOf method. If the result is a non-object, it returns the primitive value as the final result. If the result is an object, it continues to the "Object (Call valueOf)" branch, where the valueOf method is called on the object. Once again, if the result is a non-object, it returns the primitive value. If the result is still an object, it indicates an error.

This tree diagram provides a clearer representation of the conversion process, showcasing the paths taken and the final results for both "string" and "number" hints.

Note: valueOf and toString are not abstract operations and can be called directly.

By default, for objects:

- toString returns "[object Object]"
- valueOf returns the same object

By default, for arrays:

- toString prints the array without the brackets
- valueOf returns the same array

EcmaScript Documentation Link: https://262.ecma-international.org/13.0/#sec-toprimitive

## Examples of ToPrimitive Conversion

Let's explore some examples of ToPrimitive conversion using objects and arrays in JavaScript:

```javascript
console.log(5 - { a: 6 });
// Output: NaN
// The rval is an object, so it undergoes the ToPrimitive abstract operation.
// Since the hint is 'number', valueOf and toString are called.
// valueOf returns the same object { a: 6 }
// toString returns '[object Object]', which is a primitive.
// '[object Object]' is then converted to NaN using the ToNumber operation.
// 5 - NaN = NaN

console.log("arvind" + { a: 10 });
// Output: "arvind[object Object]"
// The rval is an object, so it undergoes the ToPrimitive abstract operation.
// Since the hint is 'number', valueOf and toString are called.
// valueOf returns the same object { a: 10 }
// toString returns '[object Object]', which is a string (primitive).
// "arvind" + "[object Object]" = "arvind[object Object]"

console.log(
  "arvind" +
    {
      a: 10,
      valueOf() {
        return "pandit";
      },
    }
);
// Output: "arvindpandit"
// The rval is an object, so it undergoes the ToPrimitive abstract operation.
// Since the hint is 'number', valueOf and toString are called.
// valueOf returns "pandit", which is a non-object.
// "arvind" + "pandit" = "arvindpandit"

console.log(
  7 +
    {
      x: 10,
      valueOf() {
        return 8;
      },
    }
);
// Output: 15
// The rval is an object, so it undergoes the ToPrimitive abstract operation.
// Since the hint is 'number', valueOf and toString are called.
// valueOf returns 8, which is a

non -
  object.console // 7 + 8 = 15
    .log(
      "arvind" +
        {
          a: 10,
          valueOf() {
            return {};
          },
          toString() {
            return "pandit";
          },
        }
    );
// Output: "arvindpandit"
// The rval is an object, so it undergoes the ToPrimitive abstract operation.
// Since the hint is 'number', valueOf and toString are called.
// valueOf returns an empty object, which is still an object.
// toString returns "pandit", which is a non-object.
// "arvind" + "pandit" = "arvindpandit"

console.log(
  7 -
    {
      x: 10,
      valueOf() {
        return 8;
      },
    }
);
// Output: -1
// The rval is an object, so it undergoes the ToPrimitive abstract operation.
// Since the hint is 'number', valueOf and toString are called.
// valueOf returns 8, which is a non-object.
// 7 - 8 = -1
```

By understanding the ToPrimitive function and its conversion process, we can handle coercion in JavaScript and ensure the correct conversion of values into non-object types.
