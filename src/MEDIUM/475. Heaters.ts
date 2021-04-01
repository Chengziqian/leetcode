// 03/31/2021 MEDIUM

// https://leetcode-cn.com/problems/heaters/

/*
Winter is coming! During the contest, your first job is to design a standard heater with a fixed warm radius to warm all the houses.

Every house can be warmed, as long as the house is within the heater's warm radius range. 

Given the positions of houses and heaters on a horizontal line, return the minimum radius standard of heaters so that those heaters could cover all houses.

Notice that all the heaters follow your radius standard, and the warm radius will the same.

 

Example 1:

Input: houses = [1,2,3], heaters = [2]
Output: 1
Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.
Example 2:

Input: houses = [1,2,3,4], heaters = [1,4]
Output: 1
Explanation: The two heater was placed in the position 1 and 4. We need to use radius 1 standard, then all the houses can be warmed.
Example 3:

Input: houses = [1,5], heaters = [2]
Output: 3
 

Constraints:

1 <= houses.length, heaters.length <= 3 * 104
1 <= houses[i], heaters[i] <= 109

 */

function findRadius(houses: number[], heaters: number[]): number {
  heaters.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < houses.length; i++) {
    const target = houses[i];
    let left = 0, right = heaters.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (heaters[mid] <= target) left = mid + 1;
      else right = mid - 1;
    }
    if (right < 0) ans = Math.max(ans, Math.abs(heaters[right + 1] - target));
    else if (left >= heaters.length) ans = Math.max(ans, Math.abs(heaters[left - 1] - target))
    else ans = Math.max(ans, Math.min(Math.abs(heaters[right] - target), Math.abs(heaters[left] - target)));
  }
  return ans;
};
