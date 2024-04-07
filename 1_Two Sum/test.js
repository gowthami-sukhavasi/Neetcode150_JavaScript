const twoSum = require("./isAnagram");

test("twoSum is a function", () => {
  expect(typeof twoSum).toEqual("function");
});

test("When nums = [2,7,11,15], target = 9", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("When nums = [3,2,4], target = 6", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test("When nums = [3,3], target = 6", () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});

test("When nums = [2,5,5,11], target = 10", () => {
  expect(twoSum([2, 5, 5, 11], 10)).toEqual([1, 2]);
});

test("When nums = [3,2,3], target = 6", () => {
  expect(twoSum([3, 2, 3], 6)).toEqual([0, 2]);
});
