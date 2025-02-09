// timeSpec.js:

"use strict";

// load all necessary modules
const PropertySpec = require("./propertySpec");

class TimeSpec extends PropertySpec {
  constructor(name, title, required, minTime = undefined, maxTime = undefined) {
    super("time", name, title, required, minTime, maxTime, undefined);
  }
}

// export the time specification class
module.exports = TimeSpec;
