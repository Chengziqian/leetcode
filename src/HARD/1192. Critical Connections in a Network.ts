// 01/21/2021 HARD

// https://leetcode-cn.com/problems/critical-connections-in-a-network/

/*
There are n servers numbered from 0 to n-1 connected by undirected server-to-server connections forming a network 
where connections[i] = [a, b] represents a connection between servers a and b. 
Any server can reach any other server directly or indirectly through the network.

A critical connection is a connection that, if removed, will make some server unable to reach some other server.

Return all critical connections in the network in any order.

 

Example 1:



Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
Output: [[1,3]]
Explanation: [[3,1]] is also accepted.
 

Constraints:

1 <= n <= 10^5
n-1 <= connections.length <= 10^5
connections[i][0] != connections[i][1]
There are no repeated connections.

 */

function criticalConnections(n: number, connections: number[][]): number[][] {
  const adjList: number[][] = new Array(n);
  for (let i = 0; i < adjList.length; i++) {
    adjList[i] = [];
  }
  for (let i = 0; i < connections.length; i++) {
    const [u, v] = connections[i];
    adjList[u].push(v);
    adjList[v].push(u);
  }
  const dfn: number[] = new Array(n).fill(0);
  const low: number[] = new Array(n).fill(0);
  let id: number = 0;
  const ans: number[][] = [];
  tarjan(0, 0);
  return ans;
  
  function tarjan(u: number, p: number) {
    dfn[u] = low[u] = id++;
    for (let i = 0; i < adjList[u].length; i++) {
      const v = adjList[u][i];
      if (!dfn[v]) {
        tarjan(v, u);
        low[u] = Math.min(low[u], low[v]);
        if (low[v] > dfn[u]) {
          ans.push([u, v]);
        }
      } else {
        if (v !== p) {
          low[u] = Math.min(low[u], dfn[v]);
        }
      }
    }
  }
};
