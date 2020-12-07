// 12/04/2020 MEDIUM

// https://leetcode-cn.com/problems/split-array-into-consecutive-subsequences/

/*
Given an array nums sorted in ascending order,
 return true if and only if you can split it into 1 or more subsequences 
 such that each subsequence consists of consecutive integers and has length at least 3.

 

Example 1:

Input: [1,2,3,3,4,5]
Output: True
Explanation:
You can split them into two consecutive subsequences : 
1, 2, 3
3, 4, 5
Example 2:

Input: [1,2,3,3,4,4,5,5]
Output: True
Explanation:
You can split them into two consecutive subsequences : 
1, 2, 3, 4, 5
3, 4, 5
Example 3:

Input: [1,2,3,4,4,5]
Output: False
 

Constraints:

1 <= nums.length <= 10000

 */
import { PriorityQueue } from '../../utils/PriorityQueue';

function isPossible(nums: number[]): boolean {
  const recordMap: {[Key: string]: PriorityQueue<number>} = {};
  for (let i = 0; i < nums.length; i++) {
    if (!recordMap[nums[i]]) {
      recordMap[nums[i]] = new PriorityQueue((a, b) => a < b);
    }
    if (!recordMap[nums[i] - 1]) {
      recordMap[nums[i]].add(1);
    } else {
      const len = recordMap[nums[i] - 1].remove() as number;
      if (!recordMap[nums[i] - 1].size()) {
        delete recordMap[nums[i] - 1];
      }
      recordMap[nums[i]].add(len + 1);
    }
  }
  return Object.keys(recordMap).every(key => recordMap[key].front() >= 3);
};
