function isPalindrome(word) {
    // Convert the word to lowercase to make the comparison case-insensitive
    word = word.toLowerCase();
  
    // Base case: an empty word or a word containing a single character is a palindrome
    if (word.length <= 1) {
      return true;
    }
  
    // Compare the characters at the ends of the word
    if (word[0] === word[word.length - 1]) {
      // Recursively test the rest of the word
      return isPalindrome(word.slice(1, -1));
    } else {
      // Characters at the ends are different, not a palindrome
      return false;
    }
  };
  
  // Example usage:
  console.log(isPalindrome("gag"));     // true
  console.log(isPalindrome("kayak"));   // true
  console.log(isPalindrome("php"));     // false
  console.log(isPalindrome("radar"));   // true
  console.log(isPalindrome("hello"));   // false
  