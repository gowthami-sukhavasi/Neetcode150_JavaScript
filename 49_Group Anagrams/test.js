const groupAnagrams = require("./groupAnagrams");

test("groupAnagrams is a function", () => {
  expect(typeof groupAnagrams).toEqual("function");
});

test("When strs = ['eat','tea','tan','ate','nat','bat']", () => {
  expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
    ["eat", "tea", "ate"],
    ["tan", "nat"],
    ["bat"],
  ]);
});

test("When strs = ['']", () => {
  expect(groupAnagrams([""])).toEqual([[""]]);
});

test("When strs = ['a']", () => {
  expect(groupAnagrams(["a"])).toEqual([["a"]]);
});
