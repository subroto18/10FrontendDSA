(function () {
  function thottling(fn, limit) {
    let lastCall = 0;
    return function (...arg) {
      let now = Date.now();
      if (now - lastCall >= limit) {
        lastCall = now;
        fn.apply(this, arg);
      }
    };
  }

  let thottlingBtn = document.querySelector("#throttling-btn");

  let beforeThottlingTargetedDiv = document.querySelector("#before-thottling");
  let beforeThottlingCount = 0;
  let afterThottlingCount = 0;
  let afterThottlingTargetedDiv = document.querySelector("#after-thottling");

  let handleThottling = thottling(() => {
    afterThottlingTargetedDiv.innerText = afterThottlingCount++;
  }, 1000);

  thottlingBtn.addEventListener("click", () => {
    beforeThottlingTargetedDiv.innerText = beforeThottlingCount++;
  });

  thottlingBtn.addEventListener("click", handleThottling);
})();
