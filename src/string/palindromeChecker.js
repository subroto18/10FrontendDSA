// 9. Palindrome Checker
// Problem:
// Write a function to check if a string is a palindrome (ignoring non-alphanumeric characters and case).
// Example:
// Input: "A man, a plan, a canal: Panama"
// Output: true
// Follow-up: How would you handle Unicode characters or emojis?

(function () {
  function palindromeChecker(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
      if (!isCharacter(str[i]) == false) {
        result += isCharacter(str[i]);
      }
    }

    let start = 0;
    let end = result.length - 1;

    while (start < end) {
      if (result[start] !== result[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }

  const isCharacter = (char) => {
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      return char;
    } else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 97) {
      let charCode = char.charCodeAt(0);

      let convertIntoLowerCase = String.fromCharCode(charCode + 32);

      return convertIntoLowerCase;
    } else {
      return false;
    }
  };

  let ans = palindromeChecker("A man, a plan, a canal: Panama");

  console.log(ans);
})();
