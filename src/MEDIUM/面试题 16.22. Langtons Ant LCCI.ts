// 11/10/2020 MEDIUM

// https://leetcode-cn.com/problems/langtons-ant-lcci/

/*
An ant is sitting on an infinite grid of white and black squares. It initially faces right. All squares are white initially.

At each step, it does the following:

(1) At a white square, flip the color of the square, turn 90 degrees right (clockwise), and move forward one unit.

(2) At a black square, flip the color of the square, turn 90 degrees left (counter-clockwise), and move forward one unit.

Write a program to simulate the first K moves that the ant makes and print the final board as a grid.

The grid should be represented as an array of strings, where each element represents one row in the grid. 
The black square is represented as 'X', and the white square is represented as '_', 
the square which is occupied by the ant is represented as 'L', 'U', 'R', 'D', which means the left, up, right and down orientations respectively. 
You only need to return the minimum matrix that is able to contain all squares that are passed through by the ant.

Example 1:

Input: 0
Output: ["R"]
Example 2:

Input: 2
Output:
[
  "_X",
  "LX"
]
Example 3:

Input: 5
Output:
[
  "_U",
  "X_",
  "XX"
]
Note:

K <= 100000

 */

namespace LangtonsAntLcci {
  interface Position {
    x: number;
    y: number;
  }
  function printKMoves(K: number): string[] {
    const black: {[Key: string]: Position} = {};
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const faces = ['R', 'D', 'L', 'U'];
    let antDirection = 0;
    const antPos: Position = { x: 0, y: 0 };
    for (let i = 0; i < K; i++) {
      const curPosStr = positionToString(antPos);
      if (!black[curPosStr]) {
        antDirection = (antDirection + 1) % 4;
        black[curPosStr] = {x: antPos.x, y: antPos.y};
      } else {
        antDirection = (antDirection + 3) % 4;
        delete black[curPosStr];
      }
      antPos.x += directions[antDirection][0];
      antPos.y += directions[antDirection][1];
    }
    
    let left = antPos.x;
    let right = antPos.x;
    let top = antPos.y;
    let bottom = antPos.y;
    
    for (let pos in black) {
      left = Math.min(left, black[pos].x);
      right = Math.max(right, black[pos].x);
      top = Math.min(top, black[pos].y);
      bottom = Math.max(bottom, black[pos].y);
    }
    
    const grid: string[][] = new Array(bottom - top + 1);
    for (let i = 0; i < grid.length; i++) {
      grid[i] = new Array(right - left + 1).fill('_');
    }
    
    for (let pos in black) {
      grid[black[pos].y - top][black[pos].x - left] = 'X'
    }
    grid[antPos.y - top][antPos.x - left] = faces[antDirection];
    
    const ans: string[] = [];
    
    for (let i = 0; i < grid.length; i++) {
      ans.push(grid[i].join(''));
    }
    
    return ans;
    
    function positionToString(pos: Position) {
      return `(${pos.x},${pos.y})`
    }
  }
}
