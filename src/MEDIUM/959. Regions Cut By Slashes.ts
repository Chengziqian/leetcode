// 01/25/2021 MEDIUM

// https://leetcode-cn.com/problems/regions-cut-by-slashes/

/*
In a N x N grid composed of 1 x 1 squares, each 1 x 1 square consists of a /, \, or blank space.
 These characters divide the square into contiguous regions.

(Note that backslash characters are escaped, so a \ is represented as "\\".)

Return the number of regions.

 

Example 1:

Input:
[
  " /",
  "/ "
]
Output: 2
Explanation: The 2x2 grid is as follows:

Example 2:

Input:
[
  " /",
  "  "
]
Output: 1
Explanation: The 2x2 grid is as follows:

Example 3:

Input:
["\\/", "/\\"]
Output: 4
Explanation: (Recall that because \ characters are escaped, "\\/" refers to \/, and "/\\" refers to /\.)
The 2x2 grid is as follows:

Example 4:

Input:
["/\\", "\\/"]
Output: 5
Explanation: (Recall that because \ characters are escaped, "/\\" refers to /\, and "\\/" refers to \/.)
The 2x2 grid is as follows:

Example 5:

Input:
["//", "/ "]
Output: 3
Explanation: The 2x2 grid is as follows:

 

Note:

1 <= grid.length == grid[0].length <= 30
grid[i][j] is either '/', '\', or ' '.

 */

import { UnionFind } from '../../utils/UnionFind';

function regionsBySlashes(grid: string[]): number {
  const n = grid.length;
  const [TOP, RIGHT, BOTTOM, LEFT] = [0, 1, 2, 3];
  const uf = new UnionFind(n * n * 2);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const current = grid[i][j];
      const currentIndex = getIndex(i, j);
      if (current === ' ') {
        uf.union(currentIndex[0], currentIndex[1]);
      }
      const [rightI, rightJ] = [i, j + 1];
      const [bottomI, bottomJ] = [i + 1, j];
      if (rightJ < n) {
        const rightIndex = getIndex(rightI, rightJ);
        uf.union(currentIndex[RIGHT], rightIndex[LEFT]);
      }
      if (bottomI < n) {
        const bottomIndex = getIndex(bottomI, bottomJ);
        uf.union(currentIndex[BOTTOM], bottomIndex[TOP]);
      }
    }
  }
  
  return uf.cc;
  
  function getIndex(i: number, j: number) {
    const index = i * n + j;
    if (grid[i][j] === '/') {
      return [index * 2, index * 2 + 1, index * 2 + 1, index * 2]
    } else if (grid[i][j] === '\\') {
      return [index * 2, index * 2, index * 2 + 1, index * 2 + 1]
    }
    return [index * 2, index * 2 + 1, index * 2, index * 2 + 1]
  }
}; 
