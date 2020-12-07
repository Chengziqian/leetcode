function minMoves(nums: number[], limit: number): number {
  const record: {[Key: string]: number[]} = {};
  let left = nums.length / 2 - 1;
  let right = left + 1;
  const initSum = nums[left] + nums[right];
  record[initSum] = new Array(nums.length / 2).fill(0);
  right++;
  left--;
  while(left >= 0 && right < nums.length) {
    const currentSum = nums[left] + nums[right];
    if (!record[currentSum]) {
      Object.keys(record).forEach(key => {
        const sum = +key;
        const needRight = sum - nums[left];
        const needLeft = sum - nums[right];
        if ((needLeft >= 1 && needLeft <= limit) || needRight >= 1 && needRight <= limit) {
          record[key][left] = record[key][left + 1] + 1;
        } else if (sum >= 2 && sum <= 2 * limit) {
          record[key][left] = record[key][left + 1] + 2;
        }
      });
      const arr = new Array(nums.length / 2).fill(0);
      record[currentSum] = arr;
      let innerLeft = nums.length / 2 - 1;
      let innerRight = left + 1;
      while(innerLeft > left && innerRight < right) {
        const sum = currentSum;
        const needRight = sum - nums[left];
        const needLeft = sum - nums[right];
        if ((needLeft >= 1 && needLeft <= limit) || needRight >= 1 && needRight <= limit) {
          arr[left] = 1;
        } else if (sum >= 2 && sum <= 2 * limit) {
          arr[left] = 2;
        } else break;
        innerLeft--;
        innerRight++;
      }
      if (innerRight !== right || innerLeft !== left) delete record[currentSum];
    }
    left--;
    right++;
  }
  let ans = Number.MAX_SAFE_INTEGER;
  Object.keys(record).forEach(key => {
    ans = Math.min(ans, record[key][0])
  });
  return ans;
};