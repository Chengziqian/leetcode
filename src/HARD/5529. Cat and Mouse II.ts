// 01/18/2021 HARD

// https://leetcode-cn.com/problems/cat-and-mouse-ii/

/*
A game is played by a cat and a mouse named Cat and Mouse.

The environment is represented by a grid of size rows x cols, where each element is a wall, floor, player (Cat, Mouse), or food.

Players are represented by the characters 'C'(Cat),'M'(Mouse).
Floors are represented by the character '.' and can be walked on.
Walls are represented by the character '#' and cannot be walked on.
Food is represented by the character 'F' and can be walked on.
There is only one of each character 'C', 'M', and 'F' in grid.
Mouse and Cat play according to the following rules:

Mouse moves first, then they take turns to move.
During each turn, Cat and Mouse can jump in one of the four directions (left, right, up, down). 
They cannot jump over the wall nor outside of the grid.
catJump, mouseJump are the maximum lengths Cat and Mouse can jump at a time, respectively.
Cat and Mouse can jump less than the maximum length.
Staying in the same position is allowed.
Mouse can jump over Cat.
The game can end in 4 ways:

If Cat occupies the same position as Mouse, Cat wins.
If Cat reaches the food first, Cat wins.
If Mouse reaches the food first, Mouse wins.
If Mouse cannot get to the food within 1000 turns, Cat wins.
Given a rows x cols matrix grid and two integers catJump and mouseJump, 
return true if Mouse can win the game if both Cat and Mouse play optimally, otherwise return false.

 

Example 1:



Input: grid = ["####F","#C...","M...."], catJump = 1, mouseJump = 2
Output: true
Explanation: Cat cannot catch Mouse on its turn nor can it get the food before Mouse.
Example 2:



Input: grid = ["M.C...F"], catJump = 1, mouseJump = 4
Output: true
Example 3:

Input: grid = ["M.C...F"], catJump = 1, mouseJump = 3
Output: false
Example 4:

Input: grid = ["C...#","...#F","....#","M...."], catJump = 2, mouseJump = 5
Output: false
Example 5:

Input: grid = [".M...","..#..","#..#.","C#.#.","...#F"], catJump = 3, mouseJump = 1
Output: true
 

Constraints:

rows == grid.length
cols = grid[i].length
1 <= rows, cols <= 8
grid[i][j] consist only of characters 'C', 'M', 'F', '.', and '#'.
There is only one of each character 'C', 'M', and 'F' in grid.
1 <= catJump, mouseJump <= 8

 */
// memo dp: TLE
// function canMouseWin(grid: string[], catJump: number, mouseJump: number): boolean {
//   const row = grid.length;
//   const col = grid[0].length;
//   const dp: number[][][] = new Array(2);
//   const d: number[][] = [[1, 0], [-1, 0], [0, 1], [0, -1]];
//   for (let i = 0; i < dp.length; i++) {
//     dp[i] = new Array(row * col * row * col);
//     for (let k = 0; k < dp[i].length; k++) {
//       dp[i][k] = new Array(1001).fill(-1);
//     }
//   }
//   let mousePos;
//   let catPos ;
//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       if (grid[i][j] === 'M') {
//         mousePos = [i, j];
//       } else if (grid[i][j] === 'C') {
//         catPos = [i, j];
//       }
//     }
//   }
//  
//   return !!search(true, mousePos, catPos, 1);
//  
//  
//   function search(isMouse: boolean, mousePos: number[], catPos: number[], round: number) {
//     const [mx, my] = mousePos;
//     const [cx, cy] = catPos;
//     if (round === 1001) return 0;
//     if (isMouse && grid[mx][my] === 'F') return 1;
//     if (!isMouse && grid[cx][cy] === 'F') return 1;
//     if (isMouse && mx === cx && my === cy) return 0;
//     if (!isMouse && mx === cx && my === cy) return 1;
//     const idx = getIndex(mousePos, catPos);
//     if (dp[+isMouse][idx][round] >= 0) return dp[+isMouse][idx][round];
//     if (isMouse) {
//       if (search(false, mousePos, catPos, round) === 0) {
//         dp[+isMouse][idx][round] = 1;
//         return 1;
//       }
//       for (let i = 0; i < d.length; i++) {
//         const [dx, dy] = d[i];
//         for (let k = 1; k <= mouseJump; k++) {
//           const [nx, ny] = [mx + k * dx, my + k * dy];
//           if (nx < 0 || nx >= row || ny < 0 || ny >= col) break;
//           if (grid[nx][ny] === '#') break;
//           if (search(false, [nx, ny], catPos, round) === 0) {
//             dp[+isMouse][idx][round] = 1;
//             return 1;
//           }
//         }
//       }
//     } else {
//       if (search(true, mousePos, catPos, round + 1) === 0) {
//         dp[+isMouse][idx][round] = 1;
//         return 1;
//       }
//       for (let i = 0; i < d.length; i++) {
//         const [dx, dy] = d[i];
//         for (let k = 1; k <= catJump; k++) {
//           const [nx, ny] = [cx + k * dx, cy + k * dy];
//           if (nx < 0 || nx >= row || ny < 0 || ny >= col) break;
//           if (grid[nx][ny] === '#') break;
//           if (search(true, mousePos, [nx, ny], round + 1) === 0) {
//             dp[+isMouse][idx][round] = 1;
//             return 1;
//           }
//         }
//       }
//     }
//     dp[+isMouse][idx][round] = 0;
//     return 0;
//   }
//  
//   function getIndex(mousePos: number[], catPos: number[]) {
//     const [mx, my] = mousePos;
//     const [cx, cy] = catPos;
//     const mIdx = mx * col + my;
//     const cIdx = cx * col + cy;
//     return cIdx * row * col + mIdx;
//   }
// };

interface QueueItem {
  catPos: number[],
  mousePos: number[],
  currentPlayer: number,
}
function canMouseWin(grid: string[], catJump: number, mouseJump: number): boolean {
  const row = grid.length;
  const col = grid[0].length;
  
  const res: number[] = new Array(row * col * row * col * 2).fill(0);
  const inDegree: number[] = new Array(row * col * row * col * 2).fill(0);
  
  let catPos, mousePos, foodPos;
  
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 'C') catPos = [i, j];
      if (grid[i][j] === 'M') mousePos = [i, j];
      if (grid[i][j] === 'F') foodPos = [i, j];
    }
  }
  
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] !== '#') {
        for (let k = 0; k < row; k++) {
          for (let l = 0; l < col; l++) {
            if (grid[k][l] !== '#') {
              inDegree[getIndex([i, j], [k, l], 0)] = getNeighbors(k, l, mouseJump).length;
              inDegree[getIndex([i, j], [k, l], 1)] = getNeighbors(i, j, catJump).length;
            }
          }
        }
      }
    }
  }
  
  const queue: QueueItem[] = [];
  
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] !== '#' && grid[i][j] !== 'F') {
        res[getIndex([i, j], [i, j], 0)] = -1;
        queue.push({ catPos: [i, j], mousePos: [i, j], currentPlayer: 0 });
        res[getIndex([i, j], [i, j], 1)] = 1;
        queue.push({ catPos: [i, j], mousePos: [i, j], currentPlayer: 1 });
        
        res[getIndex(foodPos, [i, j], 0)] = -1;
        queue.push({ catPos: [...foodPos], mousePos: [i, j], currentPlayer: 0 });
        res[getIndex([i, j], foodPos, 1)] = -1;
        queue.push({ catPos: [i, j], mousePos: [...foodPos], currentPlayer: 1 });
      }
    }
  }
  
  while (queue.length) {
    const { catPos, mousePos, currentPlayer } = queue.shift();
    const [mx, my] = mousePos;
    const [cx, cy] = catPos;
    const currentIndex = getIndex(catPos, mousePos, currentPlayer);
    if (currentPlayer === 1) {
      const neighbors = getNeighbors(mx, my, mouseJump);
      for (let i = 0; i < neighbors.length; i++) {
        const [ax, ay] = neighbors[i];
        const adjIndex = getIndex(catPos, [ax, ay], 0);
        --inDegree[adjIndex];
        if (!res[adjIndex]) {
          if (res[currentIndex] === -1) {
            res[adjIndex] = 1;
            queue.push({ catPos: [...catPos], mousePos: [ax, ay], currentPlayer: 0 });
          } else if (inDegree[adjIndex] === 0) {
            res[adjIndex] = -1;
            queue.push({ catPos: [...catPos], mousePos: [ax, ay], currentPlayer: 0 });
          }
        }
      }
    } else {
      const neighbors = getNeighbors(cx, cy, catJump);
      for (let i = 0; i < neighbors.length; i++) {
        const [ax, ay] = neighbors[i];
        const adjIndex = getIndex([ax, ay], mousePos, 1);
        --inDegree[adjIndex];
        if (!res[adjIndex]) {
          if (res[currentIndex] === -1) {
            res[adjIndex] = 1;
            queue.push({ catPos: [ax, ay], mousePos: [...mousePos], currentPlayer: 1 });
          } else if (inDegree[adjIndex] === 0) {
            res[adjIndex] = -1;
            queue.push({ catPos: [ax, ay], mousePos: [...mousePos], currentPlayer: 1 });
          }
        }
      }
    }
  }
  
  return res[getIndex(catPos, mousePos, 0)] === 1;
  
  function getNeighbors(x: number, y: number, limit: number) {
    const d: number[][] = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const ans: number[][] = [[x, y]];
    for (let i = 0; i < d.length; i++) {
      const [dx, dy] = d[i];
      for (let k = 1; k <= limit; k++) {
        const [nx, ny] = [x + k * dx, y + k * dy];
        if (nx < 0 || nx >= row || ny < 0 || ny >= col || grid[nx][ny] === '#') break;
        ans.push([nx, ny]);
      }
    }
    return ans;
  }
  
  function getIndex(catPos: number[], mousePos: number[], currentPlayer: number) {
    const [mx, my] = mousePos;
    const [cx, cy] = catPos;
    const mIdx = mx * col + my;
    const cIdx = cx * col + cy;
    return currentPlayer * row * col * row * col + cIdx * row * col + mIdx;
  }
};
