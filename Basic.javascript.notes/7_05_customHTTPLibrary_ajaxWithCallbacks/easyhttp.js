// Using AJAX and callback functions (finding this conceptually hard)
// To understand what is HTTP request and response, please refer to http://toolsqa.com/client-server/http-response/
// writing in ES5 way
// Resources: Json placeholder(https://jsonplaceholder.typicode.com/) selecting the routs for the different requests.

function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// GET request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);

  // this can't be maintained in the function
  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("There is an error: " + self.status);
    }
  };

  this.http.send();
};

// POST request
// adding data to the db
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open("POST", url, true);

  this.http.setRequestHeader("Content-type", "application/json");

  // this can't be maintained in the function
  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// PUT request
// update some data
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open("PUT", url, true);

  this.http.setRequestHeader("Content-type", "application/json");

  // this can't be maintained in the function
  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// DELETE request
// namely, delete data
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open("DELETE", url, true);

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      // here self.http.responseText is gonne be an empty object, replace it with a more meaningful message instead.
      callback(null, "The post has been deleted.");
    } else {
      callback("There is an error: " + self.status);
    }
  };

  this.http.send();
};
