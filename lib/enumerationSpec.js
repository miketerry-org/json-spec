// enumerationSpec.js:

"use strict";

// load all necessary modules
const PropertySpec = require("./propertySpec");

class EnumerationSpec extends PropertySpec {
  constructor(name, title, required, values) {
    super("enumeration", name, title, required, undefined, undefined, values);
  }

  check(data) {
    let value = super.check(data);
    let valueType = typeof value;
    switch (valueType) {
      // if value not defined an is not required
      case ("undefined", "null"):
        return value;

      case "string":
        // try to find matching string in array of enumeration values
        const result = this.values.find((item) => {
          return item.toLowerCase() === value.toLowerCase();
        });

        // if matching value then return the fault as properly capitalized value
        if (result) {
          return result;
        } else {
          throw new Error(
            `"${this.title}" is ${value} which is not a valid enumeration.`
          );
        }
        break;

      default:
        this.invalid(value);
    }
  }
}

// export the enumeration specification class
module.exports = EnumerationSpec;
