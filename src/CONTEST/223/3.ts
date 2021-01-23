function minimumHammingDistance(source: number[], target: number[], allowedSwaps: number[][]): number {
  const parent: number[] = new Array(source.length);
  for (let i = 0; i < parent.length; i++) parent[i] = i;
  for (let i = 0; i < allowedSwaps.length; i++) {
    const [x, y] = allowedSwaps[i];
    union(x, y);
  }
  const record: Map<number, Map<number, number>> = new Map<number, Map<number, number>>();
  for (let i = 0; i < target.length; i++) {
    const p = find(i);
    if (!record.has(p)) {
      record.set(p, new Map<number, number>());
    }
    const r = record.get(p);
    if (r.has(target[i])) {
      r.set(target[i], r.get(target[i]) + 1);
    } else {
      r.set(target[i], 1);
    }
  }
  let ans = 0;
  for (let i = 0; i < source.length; i++) {
    const p = find(i);
    const r = record.get(p);
    if (!r.has(source[i]) || r.get(source[i]) <= 0) ans++;
    else r.set(source[i], r.get(source[i]) - 1);
  }

  return ans;

  function find(a: number): number {
    return parent[a] === a ? a : parent[a] = find(parent[a])
  }

  function union(x: number, y: number) {
    const px = find(x);
    const py = find(y);
    if (px === py) return;
    parent[px] = py;
  }
};