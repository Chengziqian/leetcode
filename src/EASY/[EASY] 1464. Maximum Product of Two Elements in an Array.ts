// 8/26/2020 EASY

// function maxProduct(nums: number[]): number {
//   let max = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i != j) {
//         max = Math.max(max, (nums[i] - 1) * (nums[j] - 1))
//       }
//     }
//   }
//   return max
// };

// answer
function maxProduct(nums: number[]): number {
  const max = Math.max(...nums);
  const maxIndex = nums.indexOf(max);
  nums.splice(maxIndex, 1);
  const lowerMax = Math.max(...nums);
  return (max - 1) * (lowerMax - 1);
};
