function hasUniqueChars(str){

    for(let i = 0; i <= str.length; i++) {
      for(let j = i+1; j <= str.length; j++) {
          if(str[j] == str[i]) {
              return false;
          }
      }
    }
    return true;
    }
console.log(hasUniqueChars("Monday"))
console.log(hasUniqueChars("Moonday"));

// runtime: O(n2)
// space complexity: O(n)