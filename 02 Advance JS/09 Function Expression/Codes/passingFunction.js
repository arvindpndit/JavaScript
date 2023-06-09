function first(fn) {
  console.log("inside first function");
  fn();
}

function second() {
  console.log("inside second function");
}

first(second);
