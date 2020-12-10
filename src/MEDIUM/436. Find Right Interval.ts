// 12/10/2020 MEDIUM

// https://leetcode-cn.com/problems/find-right-interval/

/*

You are given an array of intervals, where intervals[i] = [starti, endi] and each starti is unique.

The right interval for an interval i is an interval j such that startj >= endi and startj is minimized.

Return an array of right interval indices for each interval i. If no right interval exists for interval i, then put -1 at index i.

 

Example 1:

Input: intervals = [[1,2]]
Output: [-1]
Explanation: There is only one interval in the collection, so it outputs -1.
Example 2:

Input: intervals = [[3,4],[2,3],[1,2]]
Output: [-1,0,1]
Explanation: There is no right interval for [3,4].
The right interval for [2,3] is [3,4] since start0 = 3 is the smallest start that is >= end1 = 3.
The right interval for [1,2] is [2,3] since start1 = 2 is the smallest start that is >= end2 = 2.
Example 3:

Input: intervals = [[1,4],[2,3],[3,4]]
Output: [-1,2,-1]
Explanation: There is no right interval for [1,4] and [3,4].
The right interval for [2,3] is [3,4] since start2 = 3 is the smallest start that is >= end1 = 3.
 

Constraints:

1 <= intervals.length <= 2 * 104
intervals[i].length == 2
-106 <= starti <= endi <= 106
The start point of each interval is unique.

 */
// function findRightInterval(intervals: number[][]): number[] {
//   const ans: number[] = new Array(intervals.length);
//   const indexByStart = intervals.map((item, index) => index);
//   const indexByEnd = intervals.map((item, index) => index);
//   indexByStart.sort((a, b) => intervals[a][0] - intervals[b][0]);
//   indexByEnd.sort((a, b) => intervals[a][1] - intervals[b][1]);
//   let left = 0, right = 0;
//   while (left < indexByEnd.length) {
//     if (right >= indexByStart.length) {
//       ans[indexByEnd[left]] = -1;
//       left++;
//       continue;
//     }
//     const curLeft = intervals[indexByEnd[left]];
//     const curRight = intervals[indexByStart[right]];
//     if (curLeft[1] <= curRight[0]) {
//       ans[indexByEnd[left]] = indexByStart[right];
//       left++;
//     } else {
//       right++;
//     }
//   }
//   return ans;
// };

function findRightInterval(intervals: number[][]): number[] {
  const ans: number[] = new Array(intervals.length);
  const indexByStart = intervals.map((item, index) => index);
  indexByStart.sort((a, b) => intervals[a][0] - intervals[b][0]);
  for (let i = 0; i < indexByStart.length; i++) {
    const cur = intervals[indexByStart[i]];
    const index = find(i + 1, indexByStart.length - 1, cur[1]);
    ans[indexByStart[i]] = index === -1 ? -1 : indexByStart[index];
  }
  return ans;
  
  function find(left: number, right: number, target: number) {
    const limit = right + 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      const midIndex = indexByStart[mid];
      if (intervals[midIndex][0] >= target) right = mid - 1;
      else left = mid + 1;
    }
    return left < limit ? left : -1;
  }
};
