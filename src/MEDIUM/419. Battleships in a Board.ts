function countBattleships(board: string[][]): number {
  let visited = board.map(row => row.map(() => false));
  let res: number = 0;
  let row = board.length;
  let col = 0;
  if (row) {
    col = board[0].length;
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (!visited[i][j]) {
        if (board[i][j] === 'X') travel(i, j);
        visited[i][j] = true;
      }
    }
  }
  return res;

  function travel(i: number, j: number) {
    visited[i][j] = true;
    if (i + 1 < row && board[i + 1][j] === 'X') travel(i + 1, j);
    else if (j + 1 < col && board[i][j + 1] === 'X') travel(i, j + 1);
    else res++;
  }
};

//answer
// var countBattleships = function(board) {
//   let count = 0;
//   if(!board || board.length === 0) {
//     return count;
//   }
//   for(let i = 0; i < board.length; i++) {
//     for(let j = 0; j < board[0].length; j++) {
//       if(board[i][j] === '.' ||
//         (i > 0 && board[i-1][j] === 'X') ||
//         (j > 0 && board[i][j-1] === 'X')) {
//         continue;
//       }
//       count++;
//     }
//   }
//   return count;
// };
