function arvind(fn) {
  //fn is a callback function -> function passed inside other function
  console.log("arvind");
  fn();
}

function pandit() {
  console.log("pandit");
}

arvind(pandit);
