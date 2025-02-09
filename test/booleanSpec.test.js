// boolean.test.js:

"use strict";

// load all necessary modules
const assert = require("assert");
const { BooleanSpec } = require("../index.js");

const spec = new BooleanSpec("active", "Active", true);
let data = {};
let value = undefined;

test("BooleanSpec undefined", () => {
  assert.throws(() => {
    data.active = undefined;
    value = spec.check(data);
  });
});

test("BooleanSpec null", () => {
  assert.throws(() => {
    data.active = null;
    value = spec.check(data);
  });
});

test("BooleanSpec missing", () => {
  assert.throws(() => {
    data = {};
    value = spec.check(data);
  });
});

test("BooleanSpec true", () => {
  data.active = true;
  value = spec.check(data);
  assert.strictEqual(value, true);
});

test("BooleanSpec false", () => {
  data.active = false;
  value = spec.check(data);
  assert.strictEqual(value, false);
});

test("Boolean 0 number", () => {
  data.active = 0;
  value = spec.check(data);
  assert.strictEqual(value, false);
});

test("BooleanSpec 1 number", () => {
  data.active = 1;
  value = spec.check(data);
  assert.strictEqual(value, true);
});

test("BooleanSpec invalid number", () => {
  assert.throws(() => {
    data.active = 2;
    value = spec.check(data);
  });
});

test("BooleanSpec Yes string", () => {
  data.active = "Yes";
  value = spec.check(data);
  assert.strictEqual(value, true);
});

test("BooleanSpec No string", () => {
  data.active = "No";
  value = spec.check(data);
  assert.strictEqual(value, false);
});

test("BooleanSpec Y string", () => {
  data.active = "Y";
  value = spec.check(data);
  assert.strictEqual(value, true);
});

test("BooleanSpec N string", () => {
  data.active = "N";
  value = spec.check(data);
  assert.strictEqual(value, false);
});

test("BooleanSpec true string", () => {
  data.active = "True";
  value = spec.check(data);
  assert.strictEqual(value, true);
});

test("BooleanSpec false string", () => {
  data.active = "False";
  value = spec.check(data);
  assert.strictEqual(value, false);
});

test("BooleanSpec 1 string", () => {
  data.active = "1";
  value = spec.check(data);
  assert.strictEqual(value, true);
});

test("BooleanSpec 0 string", () => {
  data.active = "0";
  value = spec.check(data);
  assert.strictEqual(value, false);
});

test("BooleanSpec x string", () => {
  assert.throws(() => {
    data.active = "x";
    value = spec.check(data);
  });
});
