/**
 * isNaN is coerces the argument before checking for NaN
 */

let a = "arvind";
console.log(isNaN(a));
/**
 * isNaN("arvind")
 * isNaN coerces the string "arvind" -> ToNumber("arvind") -> NaN
 * so it will print true
 */

let b = undefined;
console.log(isNaN(b)); //ToNumber(undefined) -> NaN

let c = Infinity;
console.log(isNaN(c)); //false

let d = "arvind";
typeof d == "number" && isNaN(d) ? console.log("NaN") : console.log("Not NaN");
