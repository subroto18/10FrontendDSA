// 8. Flatten Nested Arrays
// Problem:
// Write a function to flatten a deeply nested array in JavaScript.
// Example:
// Input: [1, [2, [3, [4]], 5]
// Output: [1, 2, 3, 4, 5]
// Follow-up: How would you handle flattening an array of objects with nested properties?

(function () {
  function flattenArray(arr) {
    let result = [];

    function construct(subArray) {
      for (let i = 0; i < subArray.length; i++) {
        if (Array.isArray(subArray[i])) {
          construct(subArray[i]);
        } else {
          result.push(subArray[i]);
        }
      }
    }

    construct(arr);

    return result;
  }

  let ans = flattenArray([1, [2, [3, [4]], 5]]);
  console.log(ans);
})();
