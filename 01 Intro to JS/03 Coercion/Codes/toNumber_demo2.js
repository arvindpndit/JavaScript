// +   -> toString (if any value is string {basically tries to concatenate})
// -   -> toNumber abstract operator

//let's play with non primitive data type like objects and arrays

console.log(5 - { a: 6 });
/**
 * reason-
 * the rval is an object not a primitive so it will undergo toPrimitive abstract operation
 * hint variable is initialized   with preferredType 'number'
 * now it call OrdinaryToPrimitive(input, preferredType).
 *
 * since , hint is a number
 *  - valueOf is called
 *  - toString is called
 *
 * valueOf return the same object {a : 6}
 * to string will return '[object Object]'  which is primitive
 * So call ToNumber on '[object Object]' again which gives NaN
 *
 * 5 - NaN
 * NaN
 */

console.log("arvind" + { a: 10 });
/**
 * reason-
 * the rval is an object not a primitive so it will undergo toPrimitive abstract operation
 * hint variable is initialized   with preferredType 'number'
 * now it call OrdinaryToPrimitive(input, preferredType).
 *
 * since , hint is a number
 *  - valueOf is called
 *  - toString is called
 * *
 *
 *  we first call valueOf on {"a" : 10} -> and it returns same object
 * we call toString -> toStrign will return '[object Object]' which is a string i.e. primitive
 *
 * "arvind" + "[object Object]"
 * arvind[object Object]
 */

console.log(
  "arvind" +
    {
      a: 10,
      valueOf() {
        return "pandit";
      },
    }
);
//arvindpandit

console.log(
  7 +
    {
      x: 10,
      valueOf() {
        return 8;
      },
    }
);

//15

console.log(
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
//arvindpandit

console.log(
  7 -
    {
      x: 10,
      valueOf() {
        return 8;
      },
    }
);

//-1
