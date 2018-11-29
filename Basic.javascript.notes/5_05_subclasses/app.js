// ES6 subclasses (inheritance from parent classes)

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `How are you doing ${this.firstName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipPrice() {
    return 500;
  }
}

let val;
const lingyu = new Customer("Lingyu", "Zhou", "555-555-5555", "Standard");
val = lingyu.greeting();
val = lingyu;
val = Customer.getMembershipPrice();
console.log(val);
