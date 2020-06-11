// makes checking stuff syntax easier
//var assert = require("assert");
const expect = require('chai').expect

// the server
const server = require('../server');

// A basic test
describe("test0", function() {
    it("should be ok or whatever...", function() {
      //assert.equal([1, 2, 3].indexOf(4), -1);
      expect(process.env.WHAT_SHE_SAID).to.equal('thats');
    });
});
