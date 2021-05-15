function minInterval(intervals: number[][], queries: number[]): number[] {
  const rc: Set<number> = new Set<number>();
  for (let i = 0; i < intervals.length; i++) {
    rc.add(intervals[i][0]);
    rc.add(intervals[i][1]);
  }
  for (let i = 0; i < queries.length; i++) rc.add(queries[i]);
  const sorted = [...rc];
  sorted.sort((a, b) => a - b);
  const n = sorted.length;
  const mapPoint2Index: Map<number, number> = new Map<number, number>();
  const mapIndex2Point: Map<number, number> = new Map<number, number>();
  for (let i = 0; i < sorted.length; i++) {
    mapPoint2Index.set(sorted[i], i);
    mapIndex2Point.set(i, sorted[i]);
  }

  const tree: number[] = new Array(4 * n).fill(Number.MAX_SAFE_INTEGER);
  const lazy: number[] = new Array(4 * n);

  for (let i = 0; i < intervals.length; i++) {
    const [l, r] = intervals[i];
    update(1, 0, n - 1, mapPoint2Index.get(l), mapPoint2Index.get(r));
  }
  const ans: number[] = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const minLen = query(1, 0, n - 1, mapPoint2Index.get(queries[i]))
    ans[i] = minLen === Number.MAX_SAFE_INTEGER ? -1 : minLen;
  }

  return ans;

  function query(root: number, L: number, R: number, index: number): number {
    if (L === R && index === L) return tree[root];
    const mid = L + R >> 1;
    pushDown(root);
    if (index <= mid) return query(root << 1, L, mid, index);
    else return query(root << 1 | 1, mid + 1, R, index);
  }

  function pushDown(root: number) {
    if (lazy[root] !== undefined) {
      tree[root << 1] = Math.min(lazy[root], tree[root << 1]);
      tree[root << 1 | 1] = Math.min(lazy[root], tree[root << 1 | 1]);
      lazy[root << 1] = Math.min(lazy[root], lazy[root << 1] || Number.MAX_SAFE_INTEGER);
      lazy[root << 1 | 1] = Math.min(lazy[root], lazy[root << 1 | 1] || Number.MAX_SAFE_INTEGER);
      lazy[root] = undefined;
    }
  }

  function update(root: number, L: number, R: number, UL: number, UR: number) {
    if (UL <= L && R <= UR) {
      const realLen = mapIndex2Point.get(UR) - mapIndex2Point.get(UL) + 1
      tree[root] = Math.min(tree[root], realLen);
      lazy[root] = Math.min(realLen, lazy[root] || Number.MAX_SAFE_INTEGER);
      return;
    }
    pushDown(root);
    const mid = (L + R) >> 1;
    if (UL <= mid) update(root << 1, L, mid, UL, UR);
    if (UR > mid) update(root << 1 | 1, mid + 1, R, UL, UR);
  }
};