(function () {
  let debounceDiv = document.querySelector(".debouncing-div");
  let beforeDebounce = document.querySelector("#before-debounce");
  let afterDebounce = document.querySelector("#after-debounce");

  let beforeDebounceCount = 0;
  let afterDebounceCount = 0;

  const debounce = (fn, delay) => {
    let timer;
    return (...arg) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn(...arg);
      }, delay);
    };
  };

  debounceDiv.addEventListener("scroll", (e) => {
    beforeDebounce.innerText = beforeDebounceCount++;
  });

  let handleDebounce = debounce((e) => {
    afterDebounce.innerText = afterDebounceCount++;
  }, 300);

  debounceDiv.addEventListener("scroll", handleDebounce);
})();
