function intervalIntersection(A: number[][], B: number[][]): number[][] {
  let i = 0, j = 0;
  let res = [];
  while (i < A.length && j < B.length) {
    const left = Math.max(A[i][0], B[j][0]);
    const right = Math.min(A[i][1], B[j][1]);
    if (left <= right) res.push([left, right]);
    if (A[i][1] < B[j][1]) i++;
    else j++;
  }
  return res;
}
