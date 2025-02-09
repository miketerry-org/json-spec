// arraySpec.js:

"use strict";

// load all necessary modules
const PropertySpec = require("./propertySpec");

class ArraySpec extends PropertySpec {
  #elementSpec = undefined;

  constructor(name, title, spec, required, min = undefined, max = undefined) {
    super("array", name, title, required, min, max);
    this.#elementSpec = spec;
  }
}

// export the array specification class
module.exports = ArraySpec;
