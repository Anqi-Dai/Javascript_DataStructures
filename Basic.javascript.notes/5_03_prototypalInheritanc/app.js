// Prototypal inheritance

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

const Winnie = new Person("Dijia", "Wu");
let val;
val = Winnie.greeting();

// Customer construnctor that inherits from Person
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// to inherit the prototype functions from Person
Customer.prototype = Object.create(Person.prototype);

// to make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// overwrite the greeting method in the Person()
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${
    this.lastName
  }! Welcome to our company. `;
};

const customer1 = new Customer("Winnie", "Wu", "555-555-5555", "standard");
val = customer1.firstName;
val = customer1.greeting();
val = customer1;
val = customer1.greeting();
console.log(val);
