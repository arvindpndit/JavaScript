/**
 * List of falsy values
 * null
 * undefined
 * +0, -0
 * NaN
 * "" (empty string)
 * false
 *
 * except these values everything is truthy in JS*
 *
 */

let a = true;

if (a) {
  console.log("hello arvind");
}
if (a == 1) {
  // a  is boolean so it will undergo ToNumber abstract operation
  // ToNumber(true) -->  1
  // 1 == 1
  // it will print the below string
  console.log("js is beautiful");
}

let b = "arvind";

if (b) {
  console.log("arvind");
}
if (b == NaN) {
  // b is string it will undergo ToNumber("arvind") -> NaN
  // NaN == NaN
  //false
  //won't print the output
  console.log("js is interesting");
}
