// 04/14/2021 HARD

// https://leetcode-cn.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/

/*
Given a m x n binary matrix mat. 
In one step, you can choose one cell and flip it and all the four neighbours of it if they exist (Flip is changing 1 to 0 and 0 to 1). 
A pair of cells are called neighboors if they share one edge.

Return the minimum number of steps required to convert mat to a zero matrix or -1 if you cannot.

Binary matrix is a matrix with all cells equal to 0 or 1 only.

Zero matrix is a matrix with all cells equal to 0.

 

Example 1:


Input: mat = [[0,0],[0,1]]
Output: 3
Explanation: One possible solution is to flip (1, 0) then (0, 1) and finally (1, 1) as shown.
Example 2:

Input: mat = [[0]]
Output: 0
Explanation: Given matrix is a zero matrix. We don't need to change it.
Example 3:

Input: mat = [[1,1,1],[1,0,1],[0,0,0]]
Output: 6
Example 4:

Input: mat = [[1,0,0],[1,0,0]]
Output: -1
Explanation: Given matrix can't be a zero matrix
 

Constraints:

m == mat.length
n == mat[0].length
1 <= m <= 3
1 <= n <= 3
mat[i][j] is 0 or 1.

 */
function minFlips(mat: number[][]): number {
  const row = mat.length;
  const col = mat[0].length;
  const N = row * col;
  const set = 1 << N;
  const d = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  let ans = Number.MAX_SAFE_INTEGER;
  for (let sub = 0; sub < set; sub++) {
    const record: number[][] = new Array(row);
    for (let i = 0; i < record.length; i++) {
      record[i] = new Array(col).fill(0);
    }
    let count = 0;
    for (let k = 0; k < N; k++) {
      if (sub & (1 << k)) {
        const [i, j] = getIndex(k);
        record[i][j]++;
        for (let n = 0; n < d.length; n++) {
          const [ni, nj] = [i + d[n][0], j + d[n][1]];
          if (ni < 0 || ni >= row || nj < 0 || nj >= col) continue;
          record[ni][nj]++;
        }
        count++;
      }
    }
    if (check(record)) ans = Math.min(ans, count);
  }
  return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
  function check(record: number[][]) {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (mat[i][j] === 1 && !(record[i][j] & 1) || mat[i][j] === 0 && (record[i][j] & 1)) return false;
      }
    }
    return true;
  }
  
  function getIndex(index: number) {
    return [Math.floor(index / col), index % col];
  }
};
