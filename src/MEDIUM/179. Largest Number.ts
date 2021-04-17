// 04/11/2021 MEDIUM

// https://leetcode-cn.com/problems/largest-number/

/*
Given a list of non-negative integers nums, arrange them such that they form the largest number.

Note: The result may be very large, so you need to return a string instead of an integer.

 

Example 1:

Input: nums = [10,2]
Output: "210"
Example 2:

Input: nums = [3,30,34,5,9]
Output: "9534330"
Example 3:

Input: nums = [1]
Output: "1"
Example 4:

Input: nums = [10]
Output: "10"
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 109

*/

function largestNumber(nums: number[]): string {
  const sorted: string[] = nums.map(n => n.toString());
  sorted.sort((a, b) => {
    let index = 0;
    const aFront = `${a}${b}`;
    const bFront = `${b}${a}`;
    index = 0;
    while(index < a.length + b.length) {
      if (aFront[index] > bFront[index]) return -1;
      else if (aFront[index] < bFront[index]) return 1;
      index++;
    }
    return 1;
  });
  const ans = sorted.join('');
  return ans[0] === '0' ? '0' : ans
};