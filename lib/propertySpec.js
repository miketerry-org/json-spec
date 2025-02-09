// propertySpec.js:

"use strict";

class PropertySpec {
  // internal private variables
  #type;
  #name;
  #title;
  #required;
  #min;
  #max;
  #values;

  constructor(type, name, title, required, min, max, values) {
    this.#type = type;
    this.#name = name;
    this.#title = title;
    this.#required = required;
    this.#min = min;
    this.#max = max;
    this.#values = values;
  }

  check(data = {}) {
    let value = data[this.name];
    if (this.required && (value === undefined || value === null)) {
      console.log("error name", this.name);
      throw new Error(`"${this.label}" value is required`);
    }

    // return the data value to be used in inherited check functions
    return value;
  }

  invalid(value) {
    throw new Error(
      `"${this.label} is "${value}" which is not a valid "${this.type}" value.`
    );
  }

  tooSmall(value) {
    throw new Error(
      `"${this.label}" is "${value}" which is less than the minimum of "${this.min}"`
    );
  }

  tooBig(value) {
    throw new Error(
      `"${this.label}" is "${value}" which is greater than the maximum of "${this.max}"`
    );
  }

  get label() {
    return this.title && this.title !== "" ? this.title : this.name;
  }

  get name() {
    return this.#name;
  }

  get type() {
    return this.#type;
  }

  get title() {
    return this.#title;
  }

  get required() {
    return this.#required;
  }

  get min() {
    return this.#min;
  }

  get max() {
    return this.#max;
  }

  get values() {
    return this.#values;
  }
}

// export the PropertySpec class
module.exports = PropertySpec;
