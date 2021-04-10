// 03/22/2021 HARD

// https://leetcode-cn.com/problems/count-pairs-with-xor-in-a-range/

/*
Given a (0-indexed) integer array nums and two integers low and high, return the number of nice pairs.

A nice pair is a pair (i, j) where 0 <= i < j < nums.length and low <= (nums[i] XOR nums[j]) <= high.

 

Example 1:

Input: nums = [1,4,2,7], low = 2, high = 6
Output: 6
Explanation: All nice pairs (i, j) are as follows:
    - (0, 1): nums[0] XOR nums[1] = 5 
    - (0, 2): nums[0] XOR nums[2] = 3
    - (0, 3): nums[0] XOR nums[3] = 6
    - (1, 2): nums[1] XOR nums[2] = 6
    - (1, 3): nums[1] XOR nums[3] = 3
    - (2, 3): nums[2] XOR nums[3] = 5
Example 2:

Input: nums = [9,8,4,2,1], low = 5, high = 14
Output: 8
Explanation: All nice pairs (i, j) are as follows:
​​​​​    - (0, 2): nums[0] XOR nums[2] = 13
    - (0, 3): nums[0] XOR nums[3] = 11
    - (0, 4): nums[0] XOR nums[4] = 8
    - (1, 2): nums[1] XOR nums[2] = 12
    - (1, 3): nums[1] XOR nums[3] = 10
    - (1, 4): nums[1] XOR nums[4] = 9
    - (2, 3): nums[2] XOR nums[3] = 6
    - (2, 4): nums[2] XOR nums[4] = 5
 

Constraints:

1 <= nums.length <= 2 * 104
1 <= nums[i] <= 2 * 104
1 <= low <= high <= 2 * 104

 */
namespace CountPairs {
  interface TrieNode {
    count: number
    children: TrieNode[]
  }
  function countPairs(nums: number[], low: number, high: number): number {
    const tree: TrieNode = { count: 0, children: new Array(2) };
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
      ans += query(nums[i], high + 1) - query(nums[i], low);
      insert(nums[i]);
    }
    return ans;

    function insert(n: number) {
      let p = tree;
      for (let i = 31; i >= 0; i--) {
        const index = n & (1 << i) ? 1 : 0;
        if (!p.children[index]) {
          p.children[index] = { count: 0, children: new Array(2) };
        }
        p = p.children[index];
        p.count++;
      }
    }

    function query(n: number, limit: number) {
      let p = tree;
      let ans = 0;
      for (let i = 31; i >= 0; i--) {
        if (!p) return ans;
        const limitIndex = limit & (1 << i);
        const numIndex = n & (1 << i) ? 1 : 0;
        if (limitIndex) {
          if (p.children[numIndex]) {
            ans += p.children[numIndex].count;
          }
          p = p.children[1 - numIndex];
        } else {
          p = p.children[numIndex];
        }
      }
      return ans;
    }
  };
}
