// 9/7/2020 MEDIUM
// https://leetcode.com/problems/132-pattern/

// https://leetcode-cn.com/problems/132-pattern/

// solution 1: fix the I number as it is minimal
// function find132pattern(nums: number[]): boolean {
//   let numberI = Number.MAX_SAFE_INTEGER;
//   if (!nums.length) return false;
//   for (let j = 0; j < nums.length; j++) {
//     numberI = Math.min(numberI, nums[j]);
//     if (numberI === nums[j]) continue;
//     for (let k = j + 1; k < nums.length; k++) {
//       if (numberI < nums[k] && nums[k] < nums[j]) return true;
//     }
//   }
//   return false
// };

// solution 2: find interval 
// function find132pattern(nums: number[]): boolean {
//   const len = nums.length;
//   if (!len) return false;
//   let i = 0, j = 0, k = 0;
//   while (i < len) {
//     while (i < len - 1 && nums[i] >= nums[i + 1]) i++;
//     j = i + 1;
//     while (j < len - 1 && nums[j] <= nums[j + 1]) j++;
//     k = j + 1;
//     while (k < len) {
//       if (nums[i] < nums[k] && nums[k] < nums[j]) return true;
//       k++;
//     }
//     i = j + 1;
//   }
//   return false;
// };

// solution 3: stack
function find132pattern(nums: number[]): boolean {
  const len = nums.length;
  if (!len) return false;
  const stack: number[] = [];
  let numK = Number.MIN_SAFE_INTEGER;
  for (let i = len - 1; i >= 0; i--) {
    if (nums[i] < numK) return true;
    while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
      numK = stack.pop() as number;
    }
    stack.push(nums[i]);
  }
  return false;
};



