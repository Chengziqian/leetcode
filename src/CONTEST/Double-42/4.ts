function minMoves(nums: number[], k: number): number {
  let i = 0, j = k - 1;
  let used: boolean[] = new Array(nums.length).fill(false);
  const oneIndex: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) oneIndex.push(i);
  }
  let ans = Number.MAX_SAFE_INTEGER;
  while (j < nums.length) {
    let step = 0;
    for (let n = i; n <= j; n++) {
      if (nums[n] === 1) {
        used[n] = true;
        continue;
      };
      const findIndex = find(n);
      step += Math.abs(oneIndex[findIndex] - n);
      used[findIndex] = true;
    }
    ans = Math.min(ans, step);
    used = new Array(nums.length).fill(false);
    i++;
    j++;
  }

  return ans;

  function find(target: number): number {
    let left = 0, right = oneIndex.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (oneIndex[mid] > target) right = mid - 1;
      else left = mid + 1
    }
    if (left >= oneIndex.length) {
      let ans = left - 1;
      while(ans >= 0 && used[ans]) ans--;
      return ans;
    } else if (right < 0) {
      let ans = right + 1;
      while(ans < oneIndex.length && used[ans]) ans++;
      return ans;
    } else {
      let leftAns = right;
      let rightAns = left;
      while(leftAns >= 0 && used[leftAns]) leftAns--;
      while(rightAns < oneIndex.length && used[rightAns]) rightAns++;
      return target - oneIndex[leftAns] < oneIndex[rightAns] - target ? leftAns : rightAns; 
    }
  }
};