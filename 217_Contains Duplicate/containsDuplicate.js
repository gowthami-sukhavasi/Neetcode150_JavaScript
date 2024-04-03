//brute force approach:

/*
var containsDuplicate = function (nums) {
  var flag = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        flag++;
        if (flag === 1) return true;
      }
    }
  }
  return false;
};

*/

var containsDuplicate = function (nums) {
  const set = new Set(nums);
  return set.size != nums.length;
};

module.exports = containsDuplicate;
