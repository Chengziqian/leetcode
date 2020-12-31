function maximizeXor(nums: number[], queries: number[][]): number[] {
  nums.sort((a, b) => a - b);
  const ans: number[] = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const [x, m] = queries[i];
    // 二分查找
    const index = find(m);
    let max = -1;
    // 就剩下几分钟了，暴力获取最大，运气好卡时间过了
    for (let k = index; k >= 0; k--) {
      max = Math.max(max, x ^ nums[k]);
    }
    ans[i] = max;
  }
  return ans;
  function find(target: number) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (nums[mid] <= target) left = mid + 1;
      else right = mid - 1;
    }
    return right;
  }
};