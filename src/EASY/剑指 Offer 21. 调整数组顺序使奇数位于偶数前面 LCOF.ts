// 01/25/2021 EASY

// https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/

/*
 */

function exchange(nums: number[]): number[] {
  let low = 0, fast = 0;
  while (fast < nums.length) {
    if (nums[fast] & 1) {
      [nums[low], nums[fast]] = [nums[fast], nums[low]]
      low++;
    }
    fast++;
  }
  return nums;
};
