// emailSpec.js:

"use strict";

// load all necessary modules
const PropertySpec = require("./propertySpec");

class EmailSpec extends PropertySpec {
  constructor(name, title, required) {
    super("email", name, title, required, undefined, undefined, undefined);
  }

  check(data) {
    let value = super.check(data);

    // handle value types
    let valueType = typeof value;
    switch (valueType) {
      case ("undefined", "null"):
        return value;

      case "string":
        break;

      default:
        this.invalid(value);
    }

    // ensure the value is a valid email address
    if (!isEmail(value)) {
      throw new Error(
        `"${this.title} is "${value}" which is not a valid email address.`
      );
    }

    // return the email string
    return value;
  }

  static isEmail(value) {
    // Regular expression for validating an email address
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value);
  }
}

// export the email specification class
module.exports = EmailSpec;
