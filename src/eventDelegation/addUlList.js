(function () {
  let btn = document.querySelector("button");

  btn.addEventListener("click", () => {
    let ul = document.getElementById("list");
    let allList = document.querySelectorAll("#list li");
    let serialNum = allList[allList.length - 1].innerText.split(" ")[1];
    let li = document.createElement("li");
    li.innerText = `${"Item"} ${+serialNum + 1}`;
    ul.appendChild(li);
  });

  // delete node

  document.getElementById("list").addEventListener("click", function (event) {
    event.target.remove();
  });

  //   allList.addEventListener("click", (event) => {
  //     console.log(event);
  //   });
})();
