function promiseDemo() {
  return new Promise(function (resolve, reject) {
    console.log("inside the promise");
    setTimeout(function timer() {
      console.log("inside the timer callback");
      resolve("promise resolved");
    }, 4000);
  });
}

promiseDemo();
