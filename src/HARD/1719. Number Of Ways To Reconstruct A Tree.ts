// 01/14/2021 HARD

// https://leetcode-cn.com/problems/number-of-ways-to-reconstruct-a-tree/

/*
You are given an array pairs, where pairs[i] = [xi, yi], and:

There are no duplicates.
xi < yi
Let ways be the number of rooted trees that satisfy the following conditions:

The tree consists of nodes whose values appeared in pairs.
A pair [xi, yi] exists in pairs if and only if xi is an ancestor of yi or yi is an ancestor of xi.
Note: the tree does not have to be a binary tree.
Two ways are considered to be different if there is at least one node that has different parents in both ways.

Return:

0 if ways == 0
1 if ways == 1
2 if ways > 1
A rooted tree is a tree that has a single root node, and all edges are oriented to be outgoing from the root.

An ancestor of a node is any node on the path from the root to that node (excluding the node itself). The root has no ancestors.

 

Example 1:


Input: pairs = [[1,2],[2,3]]
Output: 1
Explanation: There is exactly one valid rooted tree, which is shown in the above figure.
Example 2:


Input: pairs = [[1,2],[2,3],[1,3]]
Output: 2
Explanation: There are multiple valid rooted trees. Three of them are shown in the above figures.
Example 3:

Input: pairs = [[1,2],[2,3],[2,4],[1,5]]
Output: 0
Explanation: There are no valid rooted trees.
 

Constraints:

1 <= pairs.length <= 105
1 <= xi < yi <= 500
The elements in pairs are unique.

 */

function checkWays(pairs: number[][]): number {
  const record: Map<number, number[]> = new Map<number, number[]>();
  for (let i = 0; i < pairs.length; i++) {
    const [u, v] = pairs[i];
    if (!record.has(u)) record.set(u, []);
    if (!record.has(v)) record.set(v, []);
    record.get(u).push(v);
    record.get(v).push(u);
  }
  let ans = 1;
  for (let i = 0; i < pairs.length; i++) {
    const [u, v] = pairs[i];
    if (record.get(u).length === record.get(v).length) ans = 2;
  }
  const nodes: number[] = [];
  let maxNode = 0;
  record.forEach((value, key) => {
    maxNode = Math.max(maxNode, key);
    nodes.push(key);
  })
  nodes.sort((a, b) => record.get(b).length - record.get(a).length);
  if (record.get(nodes[0]).length !== nodes.length - 1) return 0;
  const parent: number[] = new Array(maxNode + 1).fill(nodes[0]);
  const visited: boolean[] = new Array(maxNode + 1).fill(false);
  visited[nodes[0]] = true;
  for (let i = 1; i < nodes.length; i++) {
    const currentNode = nodes[i];
    const relatedNodes = record.get(currentNode);
    for (let j = 0; j < relatedNodes.length; j++) {
      const relatedNode = relatedNodes[j];
      if (!visited[relatedNode]) {
        if (parent[currentNode] !== parent[relatedNode]) {
          ans = 0;
          break;
        }
        parent[relatedNode] = currentNode;
      }
    }
    if (ans === 0) return ans;
    visited[currentNode] = true;
  }
  return ans;
};
