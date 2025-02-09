// floatSpec.js:

"use strict";

// load all necessary modules
const PropertySpec = require("./propertySpec");

class FloatSpec extends PropertySpec {
  constructor(name, title, required, minFloat, maxFloat) {
    super("float", name, title, required, minFloat, maxFloat, undefined);
  }
}

// export the float specification class
module.exports = FloatSpec;
