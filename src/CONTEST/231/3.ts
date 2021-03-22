interface NodeEdge {
  v: number;
  w: number;
}
import { PriorityQueue } from '../../../utils/index'
function countRestrictedPaths(n: number, edges: number[][]): number {
  const adjList: NodeEdge[][] = new Array(n + 1);
  for (let i = 0;i < adjList.length; i++) {
    adjList[i] = [];
  }
  for (let i = 0; i < edges.length; i++) {
    const [u, v, w] = edges[i];
    adjList[u].push({
      v,
      w
    });
    adjList[v].push({
      v: u,
      w
    });
  }
  const pq: PriorityQueue<NodeEdge> = new PriorityQueue<NodeEdge>((a, b) => a.w < b.w);
  const dis: number[] = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  const vis: boolean[] = new Array(n + 1).fill(false);
  dis[n] = 0;
  vis[n] = true;
  pq.add({ v: n, w: 0 })
  while (!pq.empty()) {
    const current = pq.remove();
    const { v, w } = current;
    vis[v] = true;
    for (let i = 0; i < adjList[v].length; i++) {
      const { v: nv, w: nw } = adjList[v][i];
      const node = { v: nv, w: nw + w };
      if (!vis[nv] && dis[nv] > node.w) {
        dis[nv] = node.w;
        pq.add(node);
      }
    }
  }

  const queue: number[] = [];
  let ans = 0;
  for (let i = 0; i < adjList[1].length; i++) {
    const { v } = adjList[1][i];
    if (dis[1] > dis[v]) queue.push(v);
  }
  while(queue.length) {
    const current = queue.shift();
    for (let i = 0; i < adjList[current].length; i++) {
      if (adjList[current][i].v === n) {
        ans++;
      }
      if (dis[adjList[current][i].v] < dis[current]) queue.push(adjList[current][i].v);
    }
  }
  return ans % (1e9 + 7);
};