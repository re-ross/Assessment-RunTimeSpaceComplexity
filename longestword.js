function longestWord(longest_word)
  {
  return longest_word.reduce(function(word1, word2) 
  {
    return word1.length > word2.length ? word1 : word2.length;
  }, 
"");
}
console.log(longestWord(["hi", "hello"]));

// runtime: O(n)
// space complexity: O(n)
