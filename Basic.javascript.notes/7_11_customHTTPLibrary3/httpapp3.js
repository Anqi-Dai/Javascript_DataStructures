// The EasyHTTP library
// The http class with the methods and use async and await

class easyHTTP {
  // The GET request
  async get(url) {
    const response = await fetch(url);

    const data = await response.json();

    return data;
  }

  // THe POST request
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();

    return resData;
  }

  // The PUT request
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();

    return resData;
  }

  // The DELETE request
  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    });

    const resData = await "Resource deleted";

    return resData;
  }
}
