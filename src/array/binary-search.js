const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  let lastFoundElement = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (target == arr[mid]) {
      lastFoundElement = mid;
      return mid;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

let ans = binarySearch([1, 3, 5, 7, 9, 5], 3);

console.log(ans);
