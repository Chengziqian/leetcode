function maxIceCream(costs: number[], coins: number): number {
  costs.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < costs.length; i++) {
    if (costs[i] > coins) return ans;
    coins -= costs[i];
    ans++;
  }
  return ans;
};