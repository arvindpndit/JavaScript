console.log(7 === 7);

console.log(NaN === NaN);
/**
 * in JS , NaN is the only primitive value not equal to itself
 */

let x = NaN;
console.log(x === x); //false as per the above rule

console.log(undefined === undefined);
console.log(null === null);

console.log({} === {});
/**
 * these two objects are at different memomy location
 * hence, they wont be equal
 * false
 */

let y = { a: "arvind" };
console.log(y === y);
/**
 * here y indicates the {a : "arvind"}
 * so it will give true
 */

console.log(-0 === 0); //true
