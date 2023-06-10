function test() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function exec() {
      console.log(`i : ${i}`); // 'i: ' + i
    }, i * 1000);
  }
}

test();
