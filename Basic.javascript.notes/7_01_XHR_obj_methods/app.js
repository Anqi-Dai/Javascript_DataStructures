// AJAX: Asynchronous JavaScript And XML
// load some data without refreshing the page.

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"

// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

document.getElementById("button").addEventListener("click", loadDataThroughXHR);

function loadDataThroughXHR() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "data.txt", true);

  xhr.onprogress = function() {
    // the below outputs 3 which is processing request, this is the time you may consider adding a spinner or loader.
    console.log(this.readyState);
  };

  xhr.onload = function() {
    if (this.status === 200) {
      document.getElementById("output").innerHTML = `<h1>${
        this.responseText
      }</h1>`;
    }
  };

  // Below is the old way since don't have the onload function so you have to check the ready state yourself.
  // xhr.onreadystatechange = function() {
  //   if ((this.status === 200) & (this.readyState === 4)) {
  //     document.getElementById("output").innerHTML = `<h1>${
  //       this.responseText
  //     }</h1>`;
  //   }
  // };

  // when there might be an error
  xhr.onerror = function() {
    console.log("Request error ....");
  };
  xhr.send();
}
