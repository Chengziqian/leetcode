function canEat(candiesCount: number[], queries: number[][]): boolean[] {
  const sum: number[] = new Array(candiesCount.length + 1).fill(0);
  for (let i = 0; i < candiesCount.length; i++) {
    sum[i + 1] = sum[i] + candiesCount[i];
  }
  const ans: boolean[] = new Array(queries.length).fill(false);
  for (let i = 0; i < queries.length; i++) {
    const [type, day, max] = queries[i];
    const minSum = day;
    const maxSum = (day + 1) * max;
    if (sum[type + 1] > minSum && sum[type] < maxSum) ans[i] = true;
  }

  return ans;
};