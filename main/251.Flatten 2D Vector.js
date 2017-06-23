/**
 * Created by gxy on 2017/6/20.
 */
/****************************************************************
 251.Flatten 2D Vector
 Implement an iterator to flatten a 2d vector.

 For example,
 Given 2d vector =
 [[1,2],[3],[4,5,6]]
 By calling next repeatedly until hasNext returns false, the order of elements
 returned by next should be: [1,2,3,4,5,6].

 Hint:

 How many variables do you need to keep track?
 Two variables is all you need. Try with x and y.
 Beware of empty rows. It could be the first few rows.
 To write correct code, think about the invariant to maintain. What is it?
 The invariant is x and y must always point to a valid point in the 2d vector.
 Should you maintain your invariant ahead of time or right when you need it?
 Not sure? Think about how you would implement hasNext(). Which is more complex?
 Common logic in two different places should be refactored into a common method.
 Follow up:
 As an added challenge, try to code it using only iterators in C++ or iterators in Java.
****************************************************************/
var Flatten2D = function (nums) {
  this.nums=nums;
  this.i=0; //row
  this.j=0; //col
};

Flatten2D.prototype = {
  hasNext: function () {
    while(this.i<this.nums.length && this.j==this.nums[this.i].length) {
      this.i++;
      this.j=0;
    }
    return this.i<this.nums.length && this.j<this.nums[this.i].length;
  },
  next: function () {
    this.hasNext();
    return this.nums[this.i][this.j++];
  }
};