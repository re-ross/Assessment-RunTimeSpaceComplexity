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

// space complexity: O(n)