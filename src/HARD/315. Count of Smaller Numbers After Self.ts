// 01/20/2021 HARD

// https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/

/*
You are given an integer array nums and you have to return a new counts array.
The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

 

Example 1:

Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
 

Constraints:

0 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4

 */

function countSmaller(nums: number[]): number[] {
  if (!nums.length) return []
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[i]);
  }
  const bitTree: number[] = new Array(max - min + 2).fill(0);
  const ans: number[] = new Array(nums.length).fill(0);
  for (let i = nums.length - 1; i >= 0; i--) {
    const index = nums[i] - min + 1
    ans[i] = query(index);
    update(index, 1);
  }
  
  return ans;
  
  function lowbit(x: number) {
    return x & (-x);
  }
  
  function update(x: number, delta: number) {
    while (x < bitTree.length) {
      bitTree[x] += delta;
      x += lowbit(x);
    }
  }
  
  function query(x: number) {
    x--;
    let ans = 0;
    while (x > 0) {
      ans += bitTree[x];
      x -= lowbit(x);
    }
    return ans;
  }
};
