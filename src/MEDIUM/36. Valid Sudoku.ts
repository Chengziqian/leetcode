// 09/10/2020 MEDIUM

// https://leetcode.com/problems/valid-sudoku/

function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    const mapRow: { [Key: string]: boolean } = {};
    const mapCol: { [Key: string]: boolean } = {};
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        if (mapRow[board[i][j]]) return false;
        else mapRow[board[i][j]] = true;
      }
      if (board[j][i] !== '.') {
        if (mapCol[board[j][i]]) return false;
        else mapCol[board[j][i]] = true;
      }
    }
  }
  const startPoint = [
    [0, 0], [0, 3], [0, 6], 
    [3, 0], [3, 3], [3, 6], 
    [6, 0], [6, 3], [6, 6]
  ];
  for (let k = 0; k < startPoint.length; k++) {
    const start = startPoint[k];
    const boardMap: { [Key: string]: boolean } = {};
    for (let i = start[0]; i < start[0] + 3; i++) {
      for (let j = start[1]; j < start[1] + 3; j++) {
        if (board[i][j] !== '.') {
          if (boardMap[board[i][j]]) return false;
          else boardMap[board[i][j]] = true;
        }
      }
    }
  }
  return true;
};
