function maxValue(n: number, index: number, maxSum: number): number {
  let left = 1, right = maxSum;
  while (left <= right) {
    const mid = (left + right) >> 1;
    let leftVal = 0;
    let rightVal = 0;
    const leftCount = index;
    const rightCount = n - index - 1
    if (leftCount < mid) {
      leftVal = ((mid - 1) + (mid - leftCount)) * leftCount / 2;
    } else {
      leftVal = ((mid - 1) + 1) * (mid - 1) / 2 + leftCount - mid + 1;
    }
    if (rightCount < mid) {
      rightVal = ((mid - 1) + (mid - rightCount)) * rightCount / 2;
    } else {
      rightVal = ((mid - 1) + 1) * (mid - 1) / 2 + rightCount - mid + 1;
    }
    const sum = leftVal + rightVal + mid;
    console.log(mid, leftVal, rightVal, sum);
    if (sum <= maxSum) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};