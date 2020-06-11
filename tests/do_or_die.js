// makes checking stuff syntax easier
//var assert = require("assert");
var chai = require("chai"),
  chaiHttp = require("chai-http");
chai.use(chaiHttp);
var expect = chai.expect;

// Get the server
const server = require("../server");

// Use Chai for multiple tests
// var requester = chai.request(app).keepOpen()
// remember to call
// requester.close()

// A basic test
describe("Test dotenv", function() {
  it("should be ok or whatever...", function() {
    //assert.equal([1, 2, 3].indexOf(4), -1);
    expect(process.env.WHAT_SHE_SAID).to.equal("thats");
  });
});

// Testing GET to /
describe("Test GET to /", function() {
  it("GETs something", function(done) {
    chai
      .request(server)
      .get("/")
      .end(function(err, res) {
        //expect(res).to.have.status(123);
        expect(res.text).to.equal('did you get this?');
        //console.log(res);
        done();
      });
  });
});
