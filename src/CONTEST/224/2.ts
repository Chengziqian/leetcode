function tupleSameProduct(nums: number[]): number {
  const record: Map<number, number> = new Map<number, number>();

  for(let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        const m = nums[i] * nums[j];
        // 记录每一个乘积相等的数对
        if (!record.has(m)) record.set(m, 1);
        else record.set(m, record.get(m) + 1)
      }
    }
  }
  let ans = 0;
  // 排列组合
  record.forEach((value) => ans += 4 * (value / 2) * (value / 2 - 1));
  return ans;
};