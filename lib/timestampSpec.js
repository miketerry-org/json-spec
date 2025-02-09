// timestampSpec.js:

"use strict";

// load all necesary modules
const PropertySpec = require("./propertySpec");

class TimestampSpec extends PropertySpec {
  constructor(
    name,
    title,
    required,
    minTimestamp = undefined,
    maxTimestamp = undefined
  ) {
    super(
      "timestamp",
      name,
      title,
      required,
      minTimestamp,
      maxTimestamp,
      undefined
    );
  }
}

// export the timestamp specification class
module.exports = TimestampSpec;
