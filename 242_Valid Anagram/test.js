const isAnagram = require("./isAnagram");

test("isAnagram is a function", () => {
  expect(typeof isAnagram).toEqual("function");
});

test("When s = rat, t = car", () => {
  expect(isAnagram("rat", "car")).toEqual(false);
});

test("When s = anagram, t = nagaram", () => {
  expect(isAnagram("anagram", "nagaram")).toEqual(true);
});

test("When s = aacc, t = ccac", () => {
  expect(isAnagram("aacc", "ccac")).toEqual(false);
});
