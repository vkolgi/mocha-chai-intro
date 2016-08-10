var assert = require("assert");
describe("Array", function () {
    it("Should check for valid indexOf", function () {
        var charArray = ["a", "b", "c"];
        var index = charArray.indexOf("b");
        assert.equal(index, 2);
    });

    it("Should check for length", function () {
        var charArray = ["a", "b", "c"];
        var len = charArray.length;
        assert.equal(len, 3);
    });


})
