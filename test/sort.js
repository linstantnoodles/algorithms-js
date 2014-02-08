var assert = require("assert");
var arrayUtil = require("../util/array.js");
var bubbleSort = require("../sort/bubble-sort.js");
var insertionSort = require("../sort/insertion-sort.js");
var selectionSort = require("../sort/selection-sort.js");

describe("Sort", function() {
  // To be used by native js array sort
  var comparator = function(a, b) { return a - b; };

  describe("Bubble", function() {

    it("should sort a non-empty list of integers", function(){
      var unsortedList = arrayUtil.randomNumbers(100);
      bubbleSort(unsortedList);
      assert.equal(unsortedList.sort(comparator), unsortedList);
    });

  });

  describe("Insertion", function() {

    it("should sort a non-empty list of integers", function(){
      var unsortedList = arrayUtil.randomNumbers(100);
      insertionSort(unsortedList);
      assert.equal(unsortedList.sort(comparator), unsortedList);
    });

  });

  describe("Selection", function() {

    it("should sort a non-empty list of integers", function(){
      var unsortedList = arrayUtil.randomNumbers(100);
      selectionSort(unsortedList);
      assert.equal(unsortedList.sort(comparator), unsortedList);
    });

  });

});

