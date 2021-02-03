// 01/29/2021 MEDIUM

// https://leetcode-cn.com/problems/path-with-minimum-effort/

/*
You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.

A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.

Return the minimum effort required to travel from the top-left cell to the bottom-right cell.

 

Example 1:



Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
Output: 2
Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.
Example 2:



Input: heights = [[1,2,3],[3,8,4],[5,3,5]]
Output: 1
Explanation: The route of [1,2,3,4,5] has a maximum absolute difference of 1 in consecutive cells, which is better than route [1,3,5,3,5].
Example 3:


Input: heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]
Output: 0
Explanation: This route does not require any effort.
 

Constraints:

rows == heights.length
columns == heights[i].length
1 <= rows, columns <= 100
1 <= heights[i][j] <= 106

 */

function minimumEffortPath(heights: number[][]): number {
  const row = heights.length;
  const col = heights[0].length;

  const d: number[][] = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  let left = 0, right = 999999;
  while (left <= right) {
    const mid = (left + right) >> 1;
    const visited: boolean[][] = new Array(row);
    for (let i = 0; i < row; i++) {
      visited[i] = new Array(col).fill(false);
    }
    const queue: number[][] = [[0, 0]];
    visited[0][0] = true;
    while (queue.length) {
      const [i, j] = queue.shift();
      for (let k = 0; k < d.length; k++) {
        const [dx, dy] = d[k];
        const [nx, ny] = [i + dx, j + dy];
        if (nx >= 0 && nx < row && ny >= 0 && ny < col && !visited[nx][ny] && Math.abs(heights[i][j] - heights[nx][ny]) <= mid) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
    if (visited[row - 1][col - 1]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
  
};

// import { UnionFind } from '../../utils/UnionFind';
//
// function minimumEffortPath(heights: number[][]): number {
//   const row = heights.length;
//   const col = heights[0].length;
//
//   const edges: number[][] = [];
//  
//   for (let j = 1; j < col; j++) {
//     edges.push([getIndex(0, j), getIndex(0, j - 1), Math.abs(heights[0][j] - heights[0][j - 1])]);
//   }
//
//   for (let i = 1; i < row; i++) {
//     edges.push([getIndex(i, 0), getIndex(i - 1, 0), Math.abs(heights[i][0] - heights[i - 1][0])]);
//   }
//
//   for (let i = 1; i < row; i++) {
//     for (let j = 1; j < col; j++) {
//       const index = getIndex(i, j);
//       edges.push([index, getIndex(i - 1, j), Math.abs(heights[i][j] - heights[i - 1][j])]);
//       edges.push([index, getIndex(i, j - 1), Math.abs(heights[i][j] - heights[i][j - 1])]);
//     }
//   }
//
//   const uf = new UnionFind(row * col);
//  
//   edges.sort((a, b) => a[2] - b[2]);
//  
//   let start = getIndex(0, 0);
//   let end = getIndex(row - 1, col - 1);
//  
//   for (let k = 0; k < edges.length; k++) {
//     const [u, v, w] = edges[k];
//     uf.union(u, v);
//     if (uf.find(start) === uf.find(end)) {
//       return w;
//     }
//   }
//   return 0;
//  
//   function getIndex(i: number, j: number) {
//     return i * col + j;
//   }
// };
