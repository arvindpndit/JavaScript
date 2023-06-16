function toDoTask() {
  return new Promise(function (resolve, reject) {
    console.log("inside promise");
    resolve("promise resolved");
  });
}

toDoTask();
