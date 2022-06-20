function isPalindrome(word) {
  // Write your algorithm here
    if (word.length <= 1) {
      return true
    } else {
      if(word[0] === word[word.length - 1]) {
        isPalindrome(word.slice(1, -1))
        return true
      } else {
        return false
      }
    }
  }
  

/* 
  Add your pseudocode here
Give output as true if the word is less than or equal to one.
if the first anad last letters of the word are the same, then give an output of true.
If the output is not true give output as false. 
*/



/*
  Add written explanation of your solution here
If the word input is a letter, the first portion shows that it is correct.
The second section specifies that the term is true if the first and last letters are the same, and it continues to check the word as it enters by removing the first and last letters.
It is false if neither test is passed, according to the third section.
*/




// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
