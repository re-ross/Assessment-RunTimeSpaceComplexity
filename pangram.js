function isPangram(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return false
     }
    }
   
   return true;
 }

 console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
 console.log(isPangram("I like cats, but not mice"));

 //runtime: O(n)
 //space complexity: O(n)