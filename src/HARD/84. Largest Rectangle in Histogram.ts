// 12/05/2020 HARD

// https://leetcode-cn.com/problems/largest-rectangle-in-histogram/

/* 
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

 


Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

 


The largest rectangle is shown in the shaded area, which has area = 10 unit.

 

Example:

Input: [2,1,5,6,2,3]
Output: 10

*/

function largestRectangleArea(heights: number[]): number {
  if (!heights.length) return 0;
  heights = [0, ...heights, 0]
  const stack: number[] = [];
  let ans = 0;
  for (let i = 0; i < heights.length; i++) {
    while(stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const curIndex = stack.pop() as number, height = heights[curIndex];
      const leftIndex = stack[stack.length - 1] as number;
      ans = Math.max(ans, height * (i - leftIndex));
    }
    stack.push(i);
  }
  return ans;
};