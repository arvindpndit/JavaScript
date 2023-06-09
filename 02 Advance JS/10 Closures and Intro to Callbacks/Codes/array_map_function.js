var arr = [1, 2, 3, 4, 5];

var newArr = arr.map(function (element, index) {
  console.log(element, index);
  return element * element;
});

console.log(newArr, arr);

var students = arr.map(function (element) {
  return "student" + element;
});

console.log(students);
