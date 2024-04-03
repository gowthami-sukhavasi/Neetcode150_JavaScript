const containsDuplicate = require("./containsDuplicate");

test("containsDuplicate is a function", () => {
  expect(typeof containsDuplicate).toEqual("function");
});

test("When nums=[1,2,3,1]", () => {
  expect(containsDuplicate([1, 2, 3, 1])).toEqual(true);
});

test("When nums = [1,2,3,4]", () => {
  expect(containsDuplicate([1, 2, 3, 4])).toEqual(false);
});

test("When nums = [1,1,1,3,3,4,3,2,4,2]", () => {
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
});

test("When nums = [2,14,18,22,22]", () => {
  expect(containsDuplicate([2, 14, 18, 22, 22])).toEqual(true);
});
