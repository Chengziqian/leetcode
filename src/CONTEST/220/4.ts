
import { Graph } from '../../../types/index';
function distanceLimitedPathsExist(n: number, edgeList: number[][], queries: number[][]): boolean[] {
  const graph: Graph<number> = {
    adjList: new Array(n)
  }
  for (let i = 0; i < graph.adjList.length; i++) {
    graph.adjList[i] = [];
  }
  edgeList.sort((a, b) => a[2] - b[2]);
  for (let i = 0; i < edgeList.length; i++) {
    const [u, v, dis] = edgeList[i];
    graph.adjList[u].push({
      index: v,
      data: dis
    });
    graph.adjList[v].push({
      index: u,
      data: dis
    });
  }
  const ans: boolean[] = new Array(queries.length);
  const visited: boolean[] = new Array(n).fill(false);
  for (let i = 0; i < queries.length; i++) {
    const [u, v, limit] = queries[i];
    ans[i] = search(u, v, limit);
  }
  return ans;

  function search(start: number, end: number, limit: number): boolean {
    const list = graph.adjList[start];
    for (let i = 0; i < list.length; i++) {
      if (visited[list[i].index]) continue;
      if (list[i].data >= limit) return false;
      if (list[i].index === end && list[i].data < limit) return true;
      else {
        visited[list[i].index] = true;
        if (search(list[i].index, end, limit)) {
          visited[list[i].index] = false;
          return true;
        } else {
          visited[list[i].index] = false;
        }
      }
    }
    return false;
  }
};