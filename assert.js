var assert = require('assert');

assert.throws(
  function() {
    throw new Error("Wrong value");
  },
  Error
);

assert.equal("Navin", "Navin", ["Value Message"]);

assert.equal("Navin", "Navin1", ["Value Message1"]);