//brute force approach:

/*
var isAnagram = function (s, t) {
  return s.toLowerCase().split("").sort().join("") ===  t.toLowerCase().split("").sort().join("") ? true : false;
};
*/

var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  let count = {};

  for (i = 0; i < s.length; i++) {
    if (!count[s[i]]) count[s[i]] = 0;
    if (!count[t[i]]) count[t[i]] = 0;

    count[s[i]]++;
    count[t[i]]--;
  }

  for (let ch in count) {
    if (count[ch] !== 0) return false;
  }
  return true;
};

module.exports = isAnagram;
