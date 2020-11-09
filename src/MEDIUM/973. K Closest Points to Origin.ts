// 11/09/2020 MEDIUM

// https://leetcode-cn.com/problems/k-closest-points-to-origin/

/*
We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

 

Example 1:

Input: points = [[1,3],[-2,2]], K = 1
Output: [[-2,2]]
Explanation: 
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
Example 2:

Input: points = [[3,3],[5,-1],[-2,4]], K = 2
Output: [[3,3],[-2,4]]
(The answer [[-2,4],[3,3]] would also be accepted.)
 

Note:

1 <= K <= points.length <= 10000
-10000 < points[i][0] < 10000
-10000 < points[i][1] < 10000

 */

// function kClosest(points: number[][], K: number): number[][] {
//   return points.sort((a, b) => (a[0] * a[0] + a[1] * a[1]) - (b[0] * b[0] + b[1] * b[1])).slice(0, K);
// };

function kClosest(points: number[][], K: number): number[][] {
  if (points.length <= K) return points;
  quick(0, points.length - 1);
  return points.slice(0, K);
  
  function quick(start: number, end: number) {
    if (start >= end) return;
    let i = start;
    let j = end;
    let pivot = distance(points[start]);
    let value = points[start];
    while (i < j) {
      while (i < j && pivot < distance(points[j])) j--;
      if (i < j) {
        points[i] = points[j];
        i++;
      }
      while (i < j && pivot > distance(points[i])) i++;
      if (i < j) {
        points[j] = points[i];
        j--;
      }
    }
    points[i] = value;
    if (i === K) return;
    else if (i < K) {
      quick(i + 1, end);
    } else {
      quick(start, i - 1);
    }
  }
  
  function distance(point: number[]) {
    return point[0] * point[0] + point[1] * point[1];
  }
};
