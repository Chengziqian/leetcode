function largestSubmatrix(matrix: number[][]): number {
  const row = matrix.length;
  if (!row) return 0;
  const col = matrix[0].length;
  const colCount: number[] = new Array(col).fill(0);
  for (let j = 0; j < col; j++) {
    for (let i = 0; i < row; i++) {
      colCount[j] += matrix[i][j] === 1 ? 1 : 0;
    }
  }

  const sortCol: number[] = new Array(col);
  for (let i = 0; i < col; i++) sortCol[i] = i;
  sortCol.sort((a, b) => colCount[b] - colCount[a]);

  const leftLen: number[][] = new Array(row);
  for (let i = 0; i < row; i++) {
    leftLen[i] = new Array(col).fill(0);
  }

  for (let i = 0; i < row; i++) {
    for (let k = 0; k < col; k++) {
      if (matrix[i][sortCol[k]] === 1) leftLen[i][k] = k === 0 ? 1 : leftLen[i][k - 1] + 1
    }
  }

  leftLen.unshift(new Array(col).fill(0));
  leftLen.push(new Array(col).fill(0));

  let ans = 0;
  for (let j = 0; j < col; j++) {
    const stack: number[] = [];
    for (let i = 0; i < leftLen.length; i++) {
      while (stack.length && leftLen[stack[stack.length - 1]][j] > leftLen[i][j]) {
        const curIndex = stack.pop() as number;
        const width = leftLen[curIndex][j];
        const upIndex = stack[stack.length - 1];
        const downIndex = i;
        ans = Math.max(ans, width * (downIndex - upIndex - 1))
      }
      stack.push(i);
    }
  }
  return ans;
};