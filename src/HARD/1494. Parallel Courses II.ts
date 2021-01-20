// 09/09/2020 HARD

// https://leetcode-cn.com/problems/parallel-courses-ii/

// Label: bit-masking dp

/*
Given the integer n representing the number of courses at some university labeled from 1 to n, 
and the array dependencies where dependencies[i] = [xi, yi] 
represents a prerequisite relationship, that is, the course xi must be taken before the course yi. 
Also, you are given the integer k.

In one semester you can take at most k courses as long as you have taken all the prerequisites for the courses you are taking.

Return the minimum number of semesters to take all courses.
It is guaranteed that you can take all courses in some way.

 

Example 1:



Input: n = 4, dependencies = [[2,1],[3,1],[1,4]], k = 2
Output: 3 
Explanation: The figure above represents the given graph. In this case we can take courses 2 and 3 in the first semester, then take course 1 in the second semester and finally take course 4 in the third semester.
Example 2:



Input: n = 5, dependencies = [[2,1],[3,1],[4,1],[1,5]], k = 2
Output: 4 
Explanation: The figure above represents the given graph. In this case one optimal way to take all courses is: take courses 2 and 3 in the first semester and take course 4 in the second semester, then take course 1 in the third semester and finally take course 5 in the fourth semester.
Example 3:

Input: n = 11, dependencies = [], k = 2
Output: 6
 

Constraints:

1 <= n <= 15
1 <= k <= n
0 <= dependencies.length <= n * (n-1) / 2
dependencies[i].length == 2
1 <= xi, yi <= n
xi != yi
All prerequisite relationships are distinct, that is, dependencies[i] != dependencies[j].
The given graph is a directed acyclic graph.

 */

function minNumberOfSemesters(n: number, dependencies: number[][], k: number): number {
  const N = 1 << n;
  const pre: number[] = new Array(n);
  for (let i = 0; i < dependencies.length; i++) {
    const [u, v] = dependencies[i];
    pre[v - 1] |= 1 << (u - 1);
  }
  const dp: number[] = new Array(N).fill(Number.MAX_SAFE_INTEGER);
  const setPre: number[] = new Array(N).fill(0);
  const valid: boolean[] = new Array(N).fill(false);
  
  for (let mask = 0; mask < N; mask++) {
    if (bitCount(mask) <= k) {
      for (let i = 0; i < n; i++) {
        if (mask & (1 << i)) {
          setPre[mask] |= pre[i];
        }
      }
      valid[mask] = (mask & setPre[mask]) === 0;
    }
  }
  
  dp[0] = 0;
  
  for (let mask = 1; mask < N; mask++) {
    for (let subset = mask; subset; subset = (subset - 1) & mask) {
      if (valid[subset] && setPre[subset] === (mask & setPre[subset])) {
        dp[mask] = Math.min(dp[mask], dp[mask ^ subset] + 1);
      }
    }
  }
  
  return dp[N - 1];
  
  function bitCount(n: number) {
    let ans = 0;
    while (n) {
      if (n & 1) ans++;
      n >>= 1;
    }
    return ans;
  }
};
