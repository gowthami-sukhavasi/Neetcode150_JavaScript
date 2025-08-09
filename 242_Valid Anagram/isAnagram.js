//brute force approach:

/*
var isAnagram = function (s, t) {
  return s.toLowerCase().split("").sort().join("") ===  t.toLowerCase().split("").sort().join("") ? true : false;
};
*/

/*
In case of extra characters or spaces add a regex

function isAnagram(str1, str2) {
    const format = str =>  str.toLowerCase().replace(/[^a-z]/g,'').split('').sort().join('')
    return format(str1) === format(str2);
}
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
