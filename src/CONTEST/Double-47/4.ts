function countPairs(n: number, edges: number[][], queries: number[]): number[] {
  const degree: number[] = new Array(n + 1).fill(0);
  const r: Map<string, number> = new Map<string, number>();
  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i];
    degree[u]++;
    degree[v]++;
    const key = `${Math.min(u, v)}-${Math.max(v, u)}`;
    r.set(key, r.has(key) ? r.get(key) + 1 : 1);
  }
  const index: number[] = new Array(queries.length);
  for (let i = 0; i < index.length; i++) {
    index[i] = i;
  }
  const record: Map<number, number> = new Map<number, number>();
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const key = `${i}-${j}`;
      const res = degree[i] + degree[j] - (r.get(key) || 0);
      record.set(res, record.has(res) ? record.get(res) + 1 : 1);
    }
  }
  const keys = [...record.keys()].sort((a, b) => b - a);
  index.sort((a, b) => queries[b] - queries[a]);
  const ans: number[] = new Array(queries.length).fill(0);
  let p = 0;
  for (let k = 0; k < index.length; k++) {
    const cnt = queries[index[k]];
    if (k > 0) ans[index[k]] += ans[index[k - 1]];
    while(p < keys.length && keys[p] > cnt) {
      ans[index[k]] += record.get(keys[p]);
      p++;
    }
  }
  return ans;
};