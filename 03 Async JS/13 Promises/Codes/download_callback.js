function downloadData(url, fn) {
  console.log("downloading started");

  setTimeout(function () {
    var data = "ARVIND DATA";
    console.log(data, "downloaded successfully from", url);
    fn(data);
  }, 4000);
}

var x = downloadData("www.arvindPandit.com", function (data) {
  console.log(data);
  return data;
});
