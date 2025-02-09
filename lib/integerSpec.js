// integerSpec.js:

"use strict";

// load all necessay modules
const PropertySpec = require("./propertySpec");

class IntegerSpec extends PropertySpec {
  constructor(
    name,
    title,
    required,
    minInteger = undefined,
    maxInteger = undefined
  ) {
    super("integer", name, title, required, minInteger, maxInteger, undefined);
  }
}

// export the integer specification class
module.exports = IntegerSpec;
