// Tasks:
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a newurl

function downloadData(url, fn) {
  console.log("downloading started");

  setTimeout(function () {
    var data = "ARVIND DATA";
    console.log(data, "downloaded successfully from", url);
    fn(data);
  }, 4000);
}

function saveFile(file, fn) {
  console.log("saving file started");
  setTimeout(function () {
    let newFile = "arvind.txt";
    console.log(
      file,
      "saved successfully on the local device in the filename",
      newFile
    );
    fn(newFile);
  }, 2000);
}

function uploadFile(file, newUrl) {
  console.log("uploading started");
  setTimeout(function () {
    //writing logic
    console.log(file, "file uploaded successfully", newUrl);
  }, 5000);
}

downloadData("www.arvindPandit.com", function download(data) {
  saveFile(data, function writeFile(file) {
    uploadFile(file, "www.arvindPanditNew.com");
  });
});
