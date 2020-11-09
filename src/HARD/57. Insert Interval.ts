// 11/04/2020 HARD

// https://leetcode-cn.com/problems/insert-interval/

/*
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

 

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
Example 3:

Input: intervals = [], newInterval = [5,7]
Output: [[5,7]]
Example 4:

Input: intervals = [[1,5]], newInterval = [2,3]
Output: [[1,5]]
Example 5:

Input: intervals = [[1,5]], newInterval = [2,7]
Output: [[1,7]]
 

Constraints:

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= intervals[i][0] <= intervals[i][1] <= 105
intervals is sorted by intervals[i][0] in ascending order.
newInterval.length == 2
0 <= newInterval[0] <= newInterval[1] <= 105

 */

function insert(intervals: number[][], newInterval: number[]): number[][] {
  let i = 0;
  for (; i < intervals.length; i++) {
    const current = intervals[i];
    const left = Math.max(current[0], newInterval[0]);
    const right = Math.min(current[1], newInterval[1]);
    if (left <= right) {
      intervals[i] = [Math.min(current[0], newInterval[0]), Math.max(current[1], newInterval[1])];
      let j = i + 1;
      const base = intervals[i];
      while (j < intervals.length) {
        const left = Math.max(base[0], intervals[j][0]);
        const right = Math.min(base[1], intervals[j][1]);
        if (left <= right) {
          intervals[i] = [Math.min(base[0], intervals[j][0]), Math.max(base[1], intervals[j][1])];
          intervals.splice(j, 1);
        } else {
          break;
        }
      }
      break;
    } else if (left === current[0]) {
      intervals.splice(i, 0, newInterval);
      break;
    }
  }
  if (i === intervals.length) {
    intervals.push(newInterval);
  }
  return intervals
};
