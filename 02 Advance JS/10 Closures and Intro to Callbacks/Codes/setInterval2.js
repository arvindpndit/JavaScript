var interval = setInterval(function () {
  console.log("hello arvind");
}, 1000);

setTimeout(function () {
  clearInterval(interval);
}, 8000);
