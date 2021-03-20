// 03/05/2021 HARD

// https://leetcode-cn.com/problems/broken-board-dominoes/

/*
你有一块棋盘，棋盘上有一些格子已经坏掉了。
你还有无穷块大小为1 * 2的多米诺骨牌，你想把这些骨牌不重叠地覆盖在完好的格子上，
请找出你最多能在棋盘上放多少块骨牌？这些骨牌可以横着或者竖着放。



输入：n, m代表棋盘的大小；broken是一个b * 2的二维数组，其中每个元素代表棋盘上每一个坏掉的格子的位置。

输出：一个整数，代表最多能在棋盘上放的骨牌数。

 

示例 1：

输入：n = 2, m = 3, broken = [[1, 0], [1, 1]]
输出：2
解释：我们最多可以放两块骨牌：[[0, 0], [0, 1]]以及[[0, 2], [1, 2]]。（见下图）


 

示例 2：

输入：n = 3, m = 3, broken = []
输出：4
解释：下图是其中一种可行的摆放方式


 

限制：

1 <= n <= 8
1 <= m <= 8
0 <= b <= n * m

 */

// function domino(n: number, m: number, broken: number[][]): number {
//   const M = 1 << m;
//   const block: number[] = new Array(n + 1).fill(0);
//   const dp: number[][] = new Array(n + 1);
//   for (let i = 0; i < dp.length; i++) {
//     dp[i] = new Array(M).fill(0);
//   }
//   let ans = 0;
//   for (let i = 0; i < broken.length; i++) {
//     const [row, col] = broken[i];
//     block[row] |= (1 << col);
//   }
//   block[n] = M - 1;
//   for (let i = n - 1; i >= 0; i--) {
//     for (let st = (~block[i]) & M - 1; ; st = (st - 1) & (~block[i])) {
//       let max = 0;
//       let S = st & (~block[i + 1]);
//       for (let sub = S; ; sub = (sub - 1) & S) {
//         max = Math.max(max, findVertical(sub) + findHorizontal(st & (~sub)) + dp[i + 1][block[i + 1] | sub]);
//         if (sub === 0) break;
//       }
//       dp[i][(~st) & (M - 1)] = max;
//       if (st === 0) break;
//     }
//   }
//   for (let i = 0; i < M; i++) ans = Math.max(dp[0][i], ans);
//   return ans;
//  
//   function findHorizontal(state: number) {
//     let ans = 0;
//     while (state) {
//       const lowestBit = state & (-state);
//       if (state & (lowestBit << 1)) ans++;
//       state &= (~lowestBit);
//       state &= (~(lowestBit << 1));
//     }
//     return ans;
//   }
//  
//   function findVertical(state: number) {
//     let ans = 0;
//     for (;state;state = state & (state - 1)) ans++;
//     return ans;
//   }
// };

function domino(n: number, m: number, broken: number[][]): number {
  const adjList: number[][] = new Array(n * m);
  for (let i = 0; i < adjList.length; i++) {
    adjList[i] = [];
  }
  const block: Map<number, boolean> = new Map<number, boolean>();
  for (let i = 0; i < broken.length; i++) {
    const index = getIndex(broken[i][0], broken[i][1]);
    block.set(index, true);
  }
  const d: number[][] = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const currentIndex = getIndex(i, j);
      if (block.has(currentIndex)) continue;
      for (let k = 0; k < d.length; k++) {
        const [ni, nj] = [i + d[k][0], j + d[k][1]];
        const nextIndex = getIndex(ni, nj);
        if (ni < 0 || ni >= n || nj < 0 || nj >= m || block.has(nextIndex)) continue;
        adjList[currentIndex].push(nextIndex);
      }
    }
  }
  const match: number[] = new Array(n * m).fill(-1);
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const visited = new Array(n * m).fill(false);
      if ((i + j) & 1) continue;
      const u = getIndex(i, j);
      if (dfs(u, visited)) ans++;
    }
  }
  
  return ans;
  
  function dfs(u: number, vis: boolean[]): boolean {
    for (let i = 0; i < adjList[u].length; i++) {
      const v = adjList[u][i];
      if (!vis[v]) {
        vis[v] = true;
        if (match[v] === -1 || dfs(match[v], vis)) {
          match[v] = u;
          match[u] = v;
          return true;
        }
      }
    }
    return false;
  }
  
  function getIndex(i: number, j: number) {
    return i * m + j;
  }
};
