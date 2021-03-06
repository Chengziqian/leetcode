import { PriorityQueue } from '../../../utils/PriorityQueue'

function closestCost(baseCosts: number[], toppingCosts: number[], target: number): number {
  const N = toppingCosts.length;
  let ans = baseCosts[0];
  for(let i = 0; i < baseCosts.length; i++) {
    for (let k = 0; k < (1 << N); k++) {
      for (let s = k; s < (1 << N); s++) {
        let current = baseCosts[i];
        for (let l = 0; l < N; l++) {
          if (k & (1 << l)) current += toppingCosts[l];
          if (s & (1 << l)) current += toppingCosts[l];
        }
        if (Math.abs(current - target) < Math.abs(ans - target)) ans = current;
        else if (Math.abs(current - target) === Math.abs(ans - target)) ans = Math.min(ans, current);
      }
    }
  }
  return ans;
};