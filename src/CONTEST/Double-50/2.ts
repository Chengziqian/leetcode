function countPoints(points: number[][], queries: number[][]): number[] {
  const ans: number[] = new Array(queries.length).fill(0);
  for (let i = 0; i < queries.length; i++) {
    for (let k = 0; k < points.length; k++) {
      const [x, y] = points[k];
      const [qx, qy, r] = queries[i];
      if (r * r >= (qx - x) * (qx - x) + (qy - y) * (qy - y)) ans[i]++;
    }
  }
  return ans;
};