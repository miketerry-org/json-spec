// stringSpec.js:

"use strict";

// load all necesary modules
const PropertySpec = require("./propertySpec");

class StringSpec extends PropertySpec {
  constructor(name, title, required, minLength = 0, maxLength = undefined) {
    super("string", name, title, required, minLength, maxLength, undefined);
  }
}

// export the string specification class
module.exports = StringSpec;
