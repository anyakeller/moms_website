//var assert = require("assert");
const expect = require('chai').expect

// A basic test
describe("test0", function() {
    it("should be ok or whatever...", function() {
      //assert.equal([1, 2, 3].indexOf(4), -1);
      expect('ci with travis').to.equal('ci with travis');
    });
});
