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
