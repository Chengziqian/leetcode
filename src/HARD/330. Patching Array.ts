// 9/1/2020 HARD

function minPatches(nums: number[], n: number): number {
  let sum = 1;
  let count = 0;
  let i = 0;
  while (sum <= n) {
    if (i < nums.length && sum >= nums[i]) {
      sum += nums[i];
      i++;
    } else {
      sum += sum;
      count++;
    }
  }
  return count;
};
