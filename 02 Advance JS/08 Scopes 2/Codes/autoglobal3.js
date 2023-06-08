x = 10;

function fun() {
  //scope of function fun
  //var x = 20;
  x = 20;
  console.log(x); //20
}
console.log(x); //10
fun();
console.log(x); //20
