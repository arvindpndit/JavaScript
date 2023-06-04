// addition operator calls toString bts, so let's mimic it using '+' operator
//The addition operator either performs string concatenation - if one val is string
//or numeric addition.

console.log(3 + 5);
/**
 * since, both the values are number so it will add the number
 */

console.log(7 + "6");
/**
 * since , the rval is a string so it will convert the lval to string using toString abstract operation
 * 7 -> "7"
 * "7" + "6" = "76"
 */

console.log(typeof (7 + "6")); //string , got it!
console.log(typeof (3 + 5)); //number , got it!

console.log(undefined + "7"); // "undefined7"
console.log(undefined + 7); // "NaN"

console.log(true + 5);
/**
 * since, none of the values are string so it will try to concatenate
 * true will undergo toNumber abstract operation
 * true -> 1
 * 1 + 5 = 6
 */

console.log(null + undefined);
/**
 * undefined -> NaN        null -> 0
 * 0 + NaN = NaN
 */

console.log("null" + undefined); //null undefined
