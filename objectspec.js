// objectSpec.js:

"use strict";

// load all necessary modules
const PropertySpec = require("./propertySpec");

class objectSpec {
  // private values
  #name = undefined;
  #propertySpecs = undefined;

  constructor(name, propertySpecs = []) {
    // ensure at least one property specification is defined
    if (propertySpecs.length === 0) {
      throw new Error(
        `The "${this.constructor.name}" must have at least one property specification`
      );
    }

    // keep track of any object name and the array of property specifications
    this.#name = name;
    this.#propertySpecs = propertySpecs;
  }

  check(data) {
    // if object specification has a name then it is a nested property
    if (!this.#name) {
      data = data[this.#name];
    }

    // loop thru all properties validating each property specification
    let newData = {};
    this.#propertySpecs.forEach((property) => {
      newData[property.name] = property.check(data);
    });
    return newData;
  }
}

// export the object specification class
module.exports = objectSpec;
