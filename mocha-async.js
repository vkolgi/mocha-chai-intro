var chai = require("chai");

chai.should();

describe("Array", function () {
    it("Should check for valid indexOf", function (done) {

        setTimeout(function() {
            var charArray = ["a", "b", "c"];
            var index = charArray.indexOf("b");
            index.should.equal(1);
            console.log("Enter here async");
            done();
        }, 1500);

    });

    it("Should check for length", function () {
        setTimeout(function() {
            var charArray = ["a", "b", "c"];
            charArray.should.have.length(3);
            charArray.should.be.an("array");
        }, 3000);
    });
})
