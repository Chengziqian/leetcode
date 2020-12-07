function mostCompetitive(nums: number[], k: number): number[] {
  if (nums.length === k) return nums;
  const ans = [];
  let left = 0;
  for (let i = k; i > 0; i--) {
    let minValue = Number.MAX_SAFE_INTEGER;
    let minIndex = left;
    for (let j = left; j <= nums.length - i; j++) {
      if (minValue > nums[j]) {
        minValue = nums[j];
        minIndex = j;
      }
    }
    left = minIndex + 1;
    ans.push(minValue);
  }
  return ans;
};