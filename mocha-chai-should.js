var chai = require("chai");

chai.should();

describe("Array", function () {
    it("Should check for valid indexOf", function () {

        var charArray = ["a", "b", "c"];
        var index = charArray.indexOf("b");
        index.should.equal(1);

    });

    it("Should check for length", function () {
        var charArray = ["a", "b", "c"];
        charArray.should.have.length(3);
        charArray.should.be.an("array");
    });

})
