function stoneGameVII(stones: number[]): number {
  const sum: number[] = new Array(stones.length).fill(0);
  sum[0] = stones[0];
  for (let i = 1; i < stones.length; i++) {
    sum[i] = sum[i - 1] + stones[i];
  }
  let isAlice = true;
  let aliceScore = 0, bobScore = 0;
  let left = 0, right = stones.length - 1;
  while(left < right) {
    if (isAlice) {
      if (stones[left] < stones[right]) {
        aliceScore += sum[right] - sum[left];
        left++;
      } else {
        aliceScore += sum[right - 1] - (sum[left - 1] || 0);
        right--;
      }
    } else {
      const removeLeft = aliceNextScore(left + 1, right);
      const removeRight = aliceNextScore(left, right - 1);
      const leftDiff = removeLeft - (sum[right] - sum[left]);
      const rightDiff = removeRight - (sum[right - 1] - (sum[left - 1] || 0))
      if (leftDiff > rightDiff) {
        bobScore += sum[right - 1] - (sum[left - 1] || 0);
        right--;
      } else {
        bobScore += sum[right] - sum[left];
        left++;
      }
    }
    isAlice = !isAlice;
  }

  return aliceScore - bobScore;

  function aliceNextScore(left: number, right: number) {
    let aliceScore = 0;
    if (left < right) {
      if (stones[left] < stones[right]) {
        aliceScore = sum[right] - sum[left];
      } else {
        aliceScore = sum[right - 1] - (sum[left - 1] || 0);
      }
    }
    return aliceScore;
  }
};