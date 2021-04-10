// 04/02/2021 HARD

// https://leetcode-cn.com/problems/volume-of-histogram-lcci/

/*
Imagine a histogram (bar graph). Design an algorithm to compute the volume of water it could hold if someone poured water across the top. You can assume that each histogram bar has width 1.



The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

 */

function trap(height: number[]): number {
  const stack: number[] = [];
  let ans = 0;
  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[stack[stack.length - 1]] < height[i]) {
      const current = stack.pop();
      if (!stack.length) break;
      const w = i - stack[stack.length - 1] - 1;
      const h = Math.min(height[stack[stack.length - 1]], height[i]) - height[current];
      ans += w * h;
    }
    stack.push(i);
  }
  return ans;
};
