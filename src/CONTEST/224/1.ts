function countGoodRectangles(rectangles: number[][]): number {
  // 记录可分割边长个数
  const record: Map<number, number> = new Map<number, number>();
  let max = 0;
  for (let i = 0; i < rectangles.length; i++) {
    const [x, y] = rectangles[i];
    const cur = Math.min(x, y);
    // 更新最大边长
    max = Math.max(cur, max);
    // 更新个数
    if (!record.has(cur)) record.set(cur, 1);
    else record.set(cur, record.get(cur) + 1)
  }
  // 返回最大边长的个数
  return record.get(max);
};