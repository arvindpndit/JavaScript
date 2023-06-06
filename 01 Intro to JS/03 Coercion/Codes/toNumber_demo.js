//abstract operator - toNumber()

//subtraction operator calls the toNumber() method bts, so let's mimic it using substraction operator

console.log(5 - 6);
//both values are number so the output will be -1

console.log("7" - 5);
/**
 * here, the left value (lval) is a string and the rval is a number
 * so, js implicitly convert "7" to 7
 * 7 - 5 = 2
 */

console.log(true - false);
/*
 * the lval and rval both are boolean
 * so both values undergo toNumber() abstract operation
 * true -> 1    & false -> 0
 * 1 - 0 = 1
 */

console.log(undefined - 1);
/**
 * the lval is undefined (not a number)
 * so it will undergo toNumber abstract operation
 * undefined -> NaN
 * NaN - 1 = NaN
 */

console.log(3 - null);
/**
 * the rval is null, so it will undergo abstract operation
 * null -> 0
 * 3 - 0 = 3
 */

console.log(undefined - null);
/**
 * both the values are not number so they undergo toNumber abstract operation
 * undefined -> NaN           null -> 0
 * NaN - 0 = NaN
 */

console.log("7" - "5");
/**
 * both will undergo toNumber abs op.
 * 7 - 5 = 2
 */

console.log("arvind" - 4);
/**
 * lval is not a number so it will undergo toNumber abstract operation
 * "arvind" -> NaN
 * NaN - 4 = NaN
 */
