// 8/25/2020 EASY

function findLengthOfLCIS(nums: number[]): number {
  let count = 0;
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] > nums[i]) count++;
    else {
      res = Math.max(res, count + 1);
      count = 0;
    }
  }
  return res;
};
