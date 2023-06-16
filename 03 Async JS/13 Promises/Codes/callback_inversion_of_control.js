function internalFn(name, fn) {
  console.log(name);
  console.log("calling the callback function");
  //this internalFn can call the callback once , twice or none
  //we'll never know
  //at calling site , we don't have this control
  // this is known as inversion of control
  // this is a major drawback of callback
  // to resolve this, js introducted promises
  fn();
  console.log("funtion is called once");
  fn();
}

internalFn("arvind", function () {
  for (let i = 0; i < 10; i++) {
    console.log(i, i * i);
  }
});
