// 09/15/2020 HARD

// https://leetcode-cn.com/problems/sudoku-solver/

/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
  const rowUsed: boolean[][] = []
  const colUsed: boolean[][] = []
  const boxUsed: boolean[][][] = [];
  for (let i = 0; i < 9; i++) {
    rowUsed.push(Array(10).fill(false));
    colUsed.push(Array(10).fill(false));
  }
  for (let i = 0; i < 3; i++) {
    boxUsed[i] = [];
    for (let j = 0; j < 3; j++) {
      boxUsed[i][j] = Array(10).fill(false);
    }
  }
  const row = board.length;
  if (!row) return;
  const col = board[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const num = +board[i][j];
      if (num >= 1 && num <= 9) {
        rowUsed[i][num] = true;
        colUsed[j][num] = true;
        boxUsed[Math.floor(i / 3)][Math.floor(j / 3)][num] = true;
      }
    }
  }
  backTacking(0, 0);
  
  function backTacking(row: number, col: number): boolean {
    if (col === board[0].length) {
      col = 0;
      row++;
      if (row === board.length) {
        return true
      }
    }
    if (board[row][col] === '.') {
      for (let k = 1; k <= 9; k++) {
        const canUsed = !rowUsed[row][k] && !colUsed[col][k] && !boxUsed[Math.floor(row / 3)][Math.floor(col / 3)][k];
        if (canUsed) {
          rowUsed[row][k] = true;
          colUsed[col][k] = true;
          boxUsed[Math.floor(row / 3)][Math.floor(col / 3)][k] = true;
          board[row][col] = `${k}`;
          if (backTacking(row, col + 1)) return true;
          board[row][col] = '.';
          rowUsed[row][k] = false;
          colUsed[col][k] = false;
          boxUsed[Math.floor(row / 3)][Math.floor(col / 3)][k] = false;
        }
      }
    } else {
      return backTacking(row, col + 1);
    }
    return false;
  }
};
