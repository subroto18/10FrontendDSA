// 7. Memoization
// Problem:
// Write a memoized version of a recursive Fibonacci function in JavaScript to optimize performance.
// Example:

// javascript
// Copy
// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// Follow-up: How would you handle clearing the cache for the memoized function?

(function () {
  function fibonacciWrapper() {
    let cache = {};

    function fib(n) {
      if (n in cache) {
        return cache[n];
      }
      
      if (n <= 1) {
        return n;
      }

      cache[n] = fib(n - 1) + fib(n - 2);

      return cache[n];
    }

    fib.cacheRemove = function () {
      Object()
        .keys(cache)
        .forEach((key) => {
          delete cache[key];
        });
    };

    return fib;
  }

  let fibonacci = fibonacciWrapper();

  let ans = fibonacci(8);

  console.log(ans);
})();
