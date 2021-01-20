// 01/19/2021 MEDIUM

// https://leetcode-cn.com/problems/min-cost-to-connect-all-points/

/*
You are given an array points representing integer coordinates of some points on a 2D-plane, 
where points[i] = [xi, yi].

The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them:
|xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.

Return the minimum cost to make all points connected. 
All points are connected if there is exactly one simple path between any two points.


Example 1:



Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
Output: 20
Explanation:

We can connect the points as shown above to get the minimum cost of 20.
Notice that there is a unique path between every pair of points.
Example 2:

Input: points = [[3,12],[-2,5],[-4,1]]
Output: 18
Example 3:

Input: points = [[0,0],[1,1],[1,0],[-1,1]]
Output: 4
Example 4:

Input: points = [[-1000000,-1000000],[1000000,1000000]]
Output: 4000000
Example 5:

Input: points = [[0,0]]
Output: 0
 

Constraints:

1 <= points.length <= 1000
-106 <= xi, yi <= 106
All pairs (xi, yi) are distinct.

 */
import { UnionFind } from '../../utils/UnionFind';

interface Edge {
  u: number
  v: number
  w: number
}
function minCostConnectPoints(points: number[][]): number {
  const n = points.length;
  const edges: Edge[] = new Array(n * (n - 1))
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      edges.push({
        u: i,
        v: j,
        w: Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])
      })
    }
  }
  edges.sort((a, b) => a.w - b.w);
  const uf = new UnionFind(n);
  let ans = 0;
  for (let i = 0; i < edges.length; i++) {
    const { u, v, w } = edges[i];
    if (uf.find(u) !== uf.find(v)) {
      ans += w;
      uf.union(u, v);
    }
    if (uf.cc === 1) return ans;
  }
  return 0;
};
