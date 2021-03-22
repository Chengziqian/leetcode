function nearestValidPoint(x: number, y: number, points: number[][]): number {
  let minDis = Number.MAX_SAFE_INTEGER;
  let ans = -1;
  for (let i = 0; i < points.length; i++) {
    const [cx, cy] = points[i];
    if (cx !== x && cy !== y) continue;
    const distance = Math.abs(cx - x) + Math.abs(cy - y);
    if (distance < minDis) {
      minDis = distance;
      ans = i;
    }
  }
  return ans;
};