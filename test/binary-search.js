var assert = require("assert");
var arrayUtil = require("../util/array.js");
var binarySearch = require("../binary-search/client.js");

describe("Binary Search", function() {
  describe("#Iterative", function() {
    it("should return null on search miss", function() {
      var range = 100;
      for (var i = 0; i < 5; i++) {
        var sortedList = arrayUtil.randomNumbers(100, range, true);
        var randTarget = range + Math.floor(Math.random() * 10);
        assert.equal(binarySearch.iterative(sortedList, randTarget), null);
      }
    });

    it("should return valid index on search hit", function() {
      for (var i = 0; i < 5; i++) {
        var sortedList = arrayUtil.randomNumbers(100, 100, true);
        var randIndex = Math.floor(Math.random() * sortedList.length);
        var randTarget = sortedList[randIndex];
        assert.equal(binarySearch.iterative(sortedList, randTarget), randIndex);
      }
    });
  });

  describe("#Recursive", function() {
    it("should return null on search miss", function() {
      var range = 100;
      for (var i = 0; i < 5; i++) {
        var sortedList = arrayUtil.randomNumbers(100, range, true);
        var randTarget = range + Math.floor(Math.random() * 10);
        assert.equal(binarySearch.recursive(sortedList, randTarget, 0, sortedList.length - 1), null);
      }
    });

    it("should return valid index on search hit", function() {
      for (var i = 0; i < 5; i++) {
        var sortedList = arrayUtil.randomNumbers(100, 100, true);
        var randIndex = Math.floor(Math.random() * sortedList.length);
        var randTarget = sortedList[randIndex];
        assert.equal(binarySearch.recursive(sortedList, randTarget, 0, sortedList.length - 1), randIndex);
      }
    });
  });
});

