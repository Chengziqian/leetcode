function minTrioDegree(n: number, edges: number[][]): number {
  const adjList: number[][] = new Array(n + 1);
  for (let i = 0; i < adjList.length; i++) {
    adjList[i] = [];
  }
  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i];
    adjList[u].push(v);
    adjList[v].push(u);
  }
  const dfn: number[] = new Array(n + 1).fill(0);
  const low: number[] = new Array(n + 1).fill(0);
  let id: number = 0;
  let ans = 0;
  tarjan(0, 0);
  
  return ans === n - 1 ? -1 : ans;

  function tarjan(u: number, p: number) {
    dfn[u] = low[u] = id++;
    for (let i = 0; i < adjList[u].length; i++) {
      const v = adjList[u][i];
      if (!dfn[v]) {
        tarjan(v, u);
        low[u] = Math.min(low[u], low[v]);
        if (low[v] > dfn[u]) {
          ans++;
        }
      } else {
        if (v !== p) {
          low[u] = Math.min(low[u], dfn[v]);
        }
      }
    }
  }
};
