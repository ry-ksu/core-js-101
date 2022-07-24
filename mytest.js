function swapHeadAndTail(arr) {
  if (arr.length === 1) {
    return arr;
  }
  return arr.length % 2 === 0
    ? arr.splice((arr.length / 2)).concat(arr.splice(-(arr.length / 2), Math.floor(arr.length / 2)))
    : arr.splice(Math.ceil(arr.length / 2))
      .concat(arr[Math.floor(arr.length / 2)])
      .concat(arr.splice(-(Math.ceil(arr.length / 2)) - 1, Math.ceil(arr.length / 2)));
}

console.log(swapHeadAndTail([1, 2, 3, 4]));
