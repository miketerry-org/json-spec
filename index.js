// index.js:

// load all necessary modules
const PropertySpec = require("./lib/propertySpec");
const ObjectSpec = require("./lib/objectSpec");
const Arrayspec = require("./lib/arrayspec");
const BooleanSpec = require("./lib/booleanSpec");
const DateSpec = require("./lib/dateSpec");
const EmailSpec = require("./lib/emailSpec");
const EnumerationSpec = require("./lib/enumerationSpec");
const FloatSpec = require("./lib/floatSpec");
const IntegerSpec = require("./lib/integerSpec");
const StringSpec = require("./lib/stringSpec");
const TimeSpec = require("./lib/timeSpec");
const TimestampSpec = require("./lib/timestampSpec");

// export all property specification classes
module.exports = {
  Arrayspec,
  BooleanSpec,
  DateSpec,
  EmailSpec,
  EnumerationSpec,
  FloatSpec,
  IntegerSpec,
  ObjectSpec,
  PropertySpec,
  StringSpec,
  TimeSpec,
  TimestampSpec,
};
