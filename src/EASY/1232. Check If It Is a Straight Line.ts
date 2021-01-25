// 01/17/2021 EASY

// https://leetcode-cn.com/problems/check-if-it-is-a-straight-line/

/*
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

 

 

Example 1:



Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true
Example 2:



Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
 

Constraints:

2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates contains no duplicate point.


*/


function checkStraightLine(coordinates: number[][]): boolean {
  if (coordinates.length <= 2) return true;
  const deltaX = coordinates[0][0] - coordinates[1][0];
  const deltaY = coordinates[0][1] - coordinates[1][1];
  const [ox, oy] = coordinates[0];
  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];
    if (deltaX === 0) {
      if (x !== ox) return false;
    } else if (deltaX * (oy - y) !== deltaY * (ox - x)) return false;
  }
  return true;
};