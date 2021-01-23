// 01/21/2021 MEDIUM

// https://leetcode-cn.com/problems/maximum-number-of-events-that-can-be-attended/

/*
Given an array of events where events[i] = [startDayi, endDayi]. 
Every event i starts at startDayi and ends at endDayi.

You can attend an event i at any day d where startTimei <= d <= endTimei. 
Notice that you can only attend one event at any time d.

Return the maximum number of events you can attend.

 

Example 1:


Input: events = [[1,2],[2,3],[3,4]]
Output: 3
Explanation: You can attend all the three events.
One way to attend them all is as shown.
Attend the first event on day 1.
Attend the second event on day 2.
Attend the third event on day 3.
Example 2:

Input: events= [[1,2],[2,3],[3,4],[1,2]]
Output: 4
Example 3:

Input: events = [[1,4],[4,4],[2,2],[3,4],[1,1]]
Output: 4
Example 4:

Input: events = [[1,100000]]
Output: 1
Example 5:

Input: events = [[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]]
Output: 7
 

Constraints:

1 <= events.length <= 105
events[i].length == 2
1 <= startDayi <= endDayi <= 105

 */
import { PriorityQueue } from '../../utils/PriorityQueue';

function maxEvents(events: number[][]): number {
  const queue: PriorityQueue<number> = new PriorityQueue<number>((a, b) => a < b);
  const time: number[][] = new Array(1e5 + 1);
  for (let i = 0; i < time.length; i++) {
    time[i] = [];
  }
  for (let i = 0; i < events.length; i++) {
    time[events[i][0]].push(events[i][1]);
  }
  let ans = 0;
  for (let i = 0; i < time.length; i++) {
    for (let j = 0; j < time[i].length; j++) {
      queue.add(time[i][j]);
    }
    while (queue.size() && queue.front() < i) queue.remove();
    if (queue.size()) {
      queue.remove();
      ans++;
    }
  }
  return ans;
};
