// objectSpec.js:

"use strict";

// load all necessary
const Propertyspec = require("./propertySpec");

class ObjectSpec extends Propertyspec {
  // private values
  #propertySpecs = undefined;

  constructor(name, title, required = true, propertySpecs = []) {
    super("object", name, title, required);

    // ensure at least one property specification is defined
    if (propertySpecs.length === 0) {
      throw new Error(
        `The "${this.constructor.name}" must have at least one property specification`
      );
    }

    // keep track of  the array of property specifications
    this.#propertySpecs = propertySpecs;
  }

  check(data) {
    // if object specification has a name then it is a nested property
    let isNested = this.name !== "";
    if (isNested) {
      data = data[this.name];
    }

    // loop thru all properties validating each property specification
    let newData = {};
    this.#propertySpecs.forEach((property) => {
      newData[property.name] = property.check(data);
    });
    return newData;
  }
}

// export object specification class
module.exports = ObjectSpec;
