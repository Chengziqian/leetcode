// 01/10/2021 EASY

// https://leetcode-cn.com/problems/summary-ranges/

/*


ou are given a sorted unique integer array nums.

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
 

Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
Example 3:

Input: nums = []
Output: []
Example 4:

Input: nums = [-1]
Output: ["-1"]
Example 5:

Input: nums = [0]
Output: ["0"]
 

Constraints:

0 <= nums.length <= 20
-231 <= nums[i] <= 231 - 1
All the values of nums are unique.
nums is sorted in ascending order.
*/

function summaryRanges(nums: number[]): string[] {
  const ans: number[][] = [];
  let i = 0, j = i;
  while (i < nums.length) {
    while(j + 1 < nums.length && nums[j] + 1 === nums[j + 1]) j++;
    ans.push([nums[i], nums[j]]);
    i = j + 1;
    j = i;
  }
  return ans.map(v => v[0] === v[1] ? `${v[0]}` : `${v[0]}->${v[1]}`);
};