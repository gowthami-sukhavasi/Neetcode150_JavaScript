//brute force approach: using sorting

/*
var groupAnagrams = function (strs) {
  if (strs.length === 1) return [strs];

  let map = new Map();

  for (let word of strs) {
    let sortedWord = word.split("").sort().join("");
    if (!map.has(sortedWord)) map.set(sortedWord, [word]);
    else map.get(sortedWord).push(word);
  }

  return Array.from(map.values());
};
*/

var groupAnagrams = function (strs) {
  if (strs.length === 1) return [strs];
  let ans = {};

  for (let str of strs) {
    let count = Array(26).fill(0);

    for (let char of str) {
      let code = char.charCodeAt(0) - "a".charCodeAt(0);
      count[code]++;
    }

    let key = JSON.stringify(count);

    if (ans[key]) ans[key].push(str);
    else ans[key] = [str];
  }
  return Object.values(ans);
};

module.exports = groupAnagrams;
