function check(nums: number[]): boolean {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      index = i + 1;
      break;
    }
  }
  let count = nums.length - 1;
  let i = index;
  while (count--) {
    const next = (i + 1) % nums.length;
    if (nums[i] > nums[next]) return false;
    i = next;
  }
  return true;
};
