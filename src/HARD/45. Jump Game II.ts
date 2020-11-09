// 09/08/2020 HARD

// https://leetcode.com/problems/jump-game-ii/


// function jump(nums: number[]): number {
//   const len = nums.length;
//   if (!len) return 0;
//   const dp: number[] = [];
//   dp[0] = 0;
//   for (let i = 1; i < len; i++) {
//     let minStep = Number.MAX_SAFE_INTEGER;
//     for (let j = 0; j < i; j++) {
//       if (nums[j] >= i - j) minStep = Math.min(minStep, dp[j]);
//     }
//     dp[i] = minStep + 1;
//   }
//   return dp[len-1];
// };


// Solution: Greedy
function jump(nums: number[]): number {
  const len = nums.length;
  if (!len) return 0;
  let cur = 0, last = 0, count = 0;
  for (let i = 0; i < len - 1; i++) {
    cur = Math.max(cur, i + nums[i]);
    if (last === i) {
      last = cur;
      count++;
    }
  }
  return count;
};

