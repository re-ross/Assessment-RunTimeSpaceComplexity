
 const addToZero = (arr) => {
    let start = 0;
  
    while (start < arr.length) {
      if (arr[start] < 0) {
        for (let i = 0 + 1; i < arr.length; i++) {
          if (arr[start] + arr[i] === 0) {
            return true;
          }
        }
      }
      start += 1;
    }
    return false;
  };
console.log(addToZero([]));
console.log(addToZero([1]));
console.log(addToZero([1, 2, 3]));
console.log(addToZero([1, 2, 3, -2]))

// space complexity: 0(n2)