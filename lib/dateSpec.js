// dateSpec.js:

"use strict";

// load all necessary modules
const PropertySpec = require("./propertySpec");

class DateSpec extends PropertySpec {
  constructor(name, title, required, minDate = undefined, maxDate = undefined) {
    super("date", name, title, required, min, max, undefined);
  }

  check(data) {
    // use parent function to check existence  of value
    let value = super.check(data);

    // perform any data conversion needed
    let valueType = typeof value;
    switch (valueThype) {
      // if value is undefinedor null and not required then just return value and exit function
      case ("undefined", "null"):
        return value;

      // if value is numeric date then no conversion
      case "date":
        break;

      // if type of value is a string then try to convert to numeric date
      case "string": {
        try {
          value = new Date(value);
        } catch (err) {
          this.invalid(value);
        }
        break;
      }

      // for any other type, throw an error
      default:
        this.invalid(value);
    }

    // if minDate specified then verify value is greater than or equal to it
    if (this.min && value < this.min) {
      this.tooSmall(value);
    }

    // if max date is specified then ensure value is less than or equal to it
    if (this.max && value > this.max) {
      this.tooBig(value);
    }

    // return numeric date value
    return value;
  }
}

// export the date specification class
module.exports = DateSpec;
