function print() {
  console.log("print line 1");
  setTimeout(function timeout() {
    console.log("inside the timeout function");
  }, 3000);
  console.log("print line 2");
}

print();
