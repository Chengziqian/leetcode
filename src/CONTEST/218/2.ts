function maxOperations(nums: number[], k: number): number {
  const record: {[Key: string]: number} = {};
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (record[k - nums[i]] > 0) {
      record[k - nums[i]]--;
      ans++;
    } else {
      if (!record[nums[i]]) {
        record[nums[i]] = 1;
      } else {
        record[nums[i]]++;
      }
    }
  }
  return ans;
};