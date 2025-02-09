// booleanSpec.js:

"use strict";

// load all required modules
const PropertySpec = require("./propertySpec");

const trueStrings = ["1", "y", "yes", "t", "true"];
const falseStrings = ["0", "n", "no", "f", "false"];

class BooleanSpec extends PropertySpec {
  constructor(name, title, required) {
    super("boolean", name, title, required, undefined, undefined, undefined);
  }

  check(data = {}) {
    // call parent check function
    let value = super.check(data);

    // handle any data conversion needed
    let valueType = typeof value;
    switch (typeof value) {
      // if value is not defined and is not required then just return value
      case ("undefined", "null"):
        return value;

      case "boolean":
        break;

      case "number":
        if (value === 1) {
          value = true;
        } else if (value === 0) {
          value = false;
        } else {
          this.invalid(value);
        }
        break;

      case "string":
        if (trueStrings.includes(value.toLowerCase())) {
          value = true;
        } else if (falseStrings.includes(value.toLowerCase())) {
          value = false;
        } else {
          this.invalid(value);
        }
        break;

      default:
        this.invalid(value);
    }

    // return the boolean value
    return value;
  }
}

// export the booleanSpec class
module.exports = BooleanSpec;
