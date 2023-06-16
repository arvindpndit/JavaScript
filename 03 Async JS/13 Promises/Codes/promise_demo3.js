function promiseDemo() {
  return new Promise(function (resolve, reject) {
    console.log("inside the promise");
    setTimeout(function timer() {
      console.log("inside the timer callback");
      reject("promise rejected");
    }, 4000);
  });
}

promiseDemo();
