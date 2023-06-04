/**
 * List of falsy values
 * null
 * undefined
 * +0
 * -0
 * NaN
 * "" (empty string)
 * false
 *
 * expect all these , everthing is a truthy values
 */

//testing ToBoolean operator, we use logical NOT operator (!)

console.log(!3);
/**
 * 3 is truthy
 * 3 -> true
 * !3 -> false
 */

console.log(!0);
/**
 * 0 is falsy
 * 0 -> false
 * !0 -> true
 */

console.log(!undefined);
/**
 * undefined is fasly
 * undefined -> false
 * !undefined -> true
 *
 */

console.log(!NaN);
/**
 * NaN is fasly
 * NaN -> false
 * !NaN -> true
 *
 */

console.log(!"arvind"); //false
console.log(!""); //true

console.log(!("arvind" || 0)); //false
console.log(!("arvind" && 0)); //true
console.log(!(0 && "arvind")); //true

console.log(!{});
/**
 * object -> true
 * false
 */
