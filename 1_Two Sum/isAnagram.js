//brute force approach:

/*
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i != j) return [i, j];
    }
  }
};

*/

var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (!map.has(diff)) map.set(nums[i], i);
    else return [map.get(diff), i];
  }
};

module.exports = twoSum;
