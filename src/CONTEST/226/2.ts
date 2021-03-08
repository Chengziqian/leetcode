function restoreArray(adjacentPairs: number[][]): number[] {
  const adjList: number[][] = new Array(adjacentPairs.length + 1);

  const inDegree: number[] = new Array(adjList.length).fill(0);

  for (let i = 0; i < adjList.length; i++) {
    adjList[i] = [];
  }

  const index: Map<number, number> = new Map<number, number>();
  const value: Map<number, number> = new Map<number, number>();
  let count = 0;
  for (let i = 0; i < adjacentPairs.length; i++) {
    const [u, v] = adjacentPairs[i];
    if (!index.has(u)) {
      value.set(count, u);
      index.set(u, count++);
    }
    if (!index.has(v)) {
      value.set(count, v);
      index.set(v, count++);
    }
    const indexU = index.get(u);
    const idnexV = index.get(v);
    adjList[indexU].push(idnexV);
    inDegree[idnexV]++;
    adjList[idnexV].push(indexU);
    inDegree[indexU]++;
  }

  const ans: number[] = [];
  const vis: boolean[] = new Array(adjList.length).fill(false);

  let start = 0;

  for (let i = 0; i < adjList.length; i++) {
    if (inDegree[i] === 1) {
      start = i;
      break;
    }
  }

  dfs(start);

  function dfs(index: number) {
    vis[index] = true;
    ans.push(value.get(index));
    for (let i = 0; i < adjList[index].length; i++) {
      if (!vis[adjList[index][i]]) dfs(adjList[index][i]);
    }
  }

  return ans;
};