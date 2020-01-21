"use strict";
const findLongestWord = function(string) {
  const stringArray = string.split(" ");
  let max = stringArray[0];
  for (const iterator of stringArray) {
    if (max.length < iterator.length) {
      max = iterator;
    }
  }
  return max;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
