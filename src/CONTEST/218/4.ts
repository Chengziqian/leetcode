function minimumIncompatibility(nums: number[], k: number): number {
  const record: {[Key: string]: number} = {};
  let maxCount = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (!record[nums[i]]) {
      record[nums[i]] = 1;
    } else {
      record[nums[i]]++;
    }
    maxCount = Math.max(maxCount, record[nums[i]]);
  }
  if (maxCount > k) return -1;
  let keys = Object.keys(record).sort((a, b) => +a - +b);
  const selected: number[][] = [];
  let selectedCount = 0;
  let index1 = 0
  let index2 = index1 + 1;
  while (selectedCount < nums.length) {
    while(index1 < keys.length && record[keys[index1]] <= 0) index1++;
    while(index2 < keys.length && record[keys[index2]] <= 0) index2++;
    selected.push([+keys[index1], +keys[index2]]);
    record[keys[index1]]--;
    record[keys[index2]]--;
    selectedCount += 2;
    if (index2 === keys.length - 1) {
      index1 = 0;
      index2 = index1 + 1;
    } else {
      index1 = index2;
      index2 = index1 + 1;
    }
  }
  return selected.reduce((pre, cur) => pre + (Math.abs(cur[0] - cur[1])), 0);
};