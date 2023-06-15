function first(fn) {
  console.log("first");
  var x = 10;
  setTimeout(function () {
    console.log("setTimeout is done");
    fn(x);
  }, 4000);
}

function printAge(age) {
  console.log("my age is ", age);
}

first(printAge);
