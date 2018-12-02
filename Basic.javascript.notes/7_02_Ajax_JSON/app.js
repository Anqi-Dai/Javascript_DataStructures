// Working with local JSON files in XHR
// customer.json with a single customer(info displayed when clicking button1); customers.json with multiple customers(info displayed when clicking button2)

document.getElementById("button1").addEventListener("click", loadCustomer);

document.getElementById("button2").addEventListener("click", loadCustomers);

// Load a single customer

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "customer.json", true); // true for Asynchronous
  xhr.onload = function() {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);

      const output = `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Gender: ${customer.gender}</li>
        <li>School: ${customer.school}</li>
      </ul>
    `;

      document.getElementById("customer").innerHTML = output;
    }
  };

  xhr.send();
}

// Load multiple customers

function loadCustomers(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "customers.json", true); // true for Asynchronous
  xhr.onload = function() {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);
      let output = ""; // again it's crucial where to init the var first. AND If you don't set it to be an empty string here it gonna show up as undefined first.
      customers.forEach(function(customer) {
        output += `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Gender: ${customer.gender}</li>
        <li>School: ${customer.school}</li>
      </ul>
    `;
      });

      document.getElementById("customers").innerHTML = output;
    }
  };

  xhr.send();
}
