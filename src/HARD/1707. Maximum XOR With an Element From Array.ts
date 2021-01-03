// 1/1/20201 HARD

// https://leetcode-cn.com/problems/maximum-xor-with-an-element-from-array/

/* 
You are given an array nums consisting of non-negative integers. You are also given a queries array, where queries[i] = [xi, mi].

The answer to the ith query is the maximum bitwise XOR value of xi and any element of nums that does not exceed mi. In other words, the answer is max(nums[j] XOR xi) for all j such that nums[j] <= mi. If all elements in nums are larger than mi, then the answer is -1.

Return an integer array answer where answer.length == queries.length and answer[i] is the answer to the ith query.

 

Example 1:

Input: nums = [0,1,2,3,4], queries = [[3,1],[1,3],[5,6]]
Output: [3,3,7]
Explanation:
1) 0 and 1 are the only two integers not greater than 1. 0 XOR 3 = 3 and 1 XOR 3 = 2. The larger of the two is 3.
2) 1 XOR 2 = 3.
3) 5 XOR 2 = 7.
Example 2:

Input: nums = [5,2,4,6,6,3], queries = [[12,4],[8,1],[6,3]]
Output: [15,-1,5]
 

Constraints:

1 <= nums.length, queries.length <= 105
queries[i].length == 2
0 <= nums[j], xi, mi <= 109

*/

interface TrieNode {
  children: TrieNode[]
}
function maximizeXor(nums: number[], queries: number[][]): number[] {
  const root: TrieNode = { children: new Array(2) };
  nums.sort((a, b) => a - b);
  const qid: number[] = new Array(queries.length);
  for (let i = 0; i < qid.length; i++) qid[i] = i;
  qid.sort((a, b) => queries[a][1] - queries[b][1]);

  const ans: number[] = new Array(queries.length);
  let index = 0;
  for (let i = 0; i < qid.length; i++) {
    const [ x, limit ] = queries[qid[i]];
    while (index < nums.length && nums[index] <= limit) insert(nums[index++]);
    if (index === 0) ans[qid[i]] = -1;
    else ans[qid[i]] = query(x) ^ x;
  }
  return ans;

  function insert(n: number) {
    let p = root;
    for (let i = 30; i >= 0; i--) {
      const next = (n & (1 << i)) ? 1 : 0;
      if (!p.children[next]) p.children[next] = { children: new Array(2) };
      p = p.children[next];
    }
  }

  function query(x: number) {
    let res = 0;
    let p = root;
    for (let i = 30; i >= 0; i--) {
      const need = (x & (1 << i)) ? 0 : 1;
      if (p.children[need]) {
        p = p.children[need];
        res |= (need << i);
      } else {
        p = p.children[+!need];
        res |= (+!need << i);
      }
    }
    return res;
  }
};