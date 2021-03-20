function findCenter(edges: number[][]): number {
  const degree: number[] = new Array(edges.length + 2).fill(0);
  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i];
    degree[u]++;
    degree[v]++;
  }
  for (let i = 0; i < degree.length; i++) {
    if (degree[i] > 0 && degree[i] !== 1) return i;
  }
  return 0;
};