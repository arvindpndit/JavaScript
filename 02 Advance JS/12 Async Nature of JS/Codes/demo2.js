function demo() {
  console.log("first");

  setTimeout(function fun() {
    console.log("inside function fun");
  }, 2000);

  for (var i = 0; i < 1000000000; i++) {
    //some time consuming task
  }

  setTimeout(function gun() {
    console.log("inside function gun");
  }, 0);

  console.log("last");
}

demo();
