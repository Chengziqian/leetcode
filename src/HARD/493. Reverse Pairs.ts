// 11/28/2020 HARD

// https://leetcode-cn.com/problems/reverse-pairs/

/*
Given an array nums, we call (i, j) an important reverse pair if i < j and nums[i] > 2*nums[j].

You need to return the number of important reverse pairs in the given array.

Example1:

Input: [1,3,2,3,1]
Output: 2
Example2:

Input: [2,4,3,5,1]
Output: 3
Note:
The length of the given array will not exceed 50,000.
All the numbers in the input array are in the range of 32-bit integer.

*/
function reversePairs(nums: number[]): number {
  const allNumber = Array.from(new Set([...nums, ...nums.map(i => 2 * i)]));
  allNumber.sort((a, b) => a - b);
  const value: {[Key: string]: number} = {};
  let index = 1;
  allNumber.forEach(v => {
    value[v] = index++;
  });
  const tree: number[] = new Array(allNumber.length + 1).fill(0);
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    const left = value[nums[i] * 2];
    const right = allNumber.length;
    ans += query(right) - query(left);
    update(value[nums[i]], 1);
  }

  return ans;

  function lowbit(x: number) {
    return (-x) & x;
  }

  function update(x: number, k: number) {
    while(x < tree.length) {
      tree[x] += k;
      x += lowbit(x);
    }
  }

  function query(x: number) {
    let ans = 0;
    while(x) {
      ans += tree[x];
      x -= lowbit(x);
    }
    return ans;
  }
};