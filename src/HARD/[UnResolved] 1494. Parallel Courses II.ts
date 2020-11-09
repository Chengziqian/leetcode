// 09/09/2020 HARD

// https://leetcode.com/problems/parallel-courses-ii/、
interface Graph {
  count: number;
  list: GraphNode[];
}
interface GraphNode {
  data: number;
  inDegree: number;
  next: GraphNode | null;
}
function minNumberOfSemesters(n: number, dependencies: number[][], k: number): number {
  if (!n) return 0;
  const list: GraphNode[] = [];
  for (let i = 1; i <= n; i++) {
    list[i] = {
      data: i,
      inDegree: 0,
      next: null,
    }
  }
  const graph: Graph = {
    count: n,
    list,
  };
  for (let i = 0; i < dependencies.length; i++) {
    if (!list[dependencies[i][0]].next) {
      list[dependencies[i][0]].next = {
        data: dependencies[i][1],
        inDegree: 0,
        next: null
      }
    } else {
      let current = list[dependencies[i][0]];
      while (current.next) current = current.next;
      current.next = {
        data: dependencies[i][1],
        inDegree: 0,
        next: null
      }
    }
    list[dependencies[i][1]].inDegree++;
  }
  const queue: number[] = [];
  for (let i = 1; i <= n; i++) {
    if (list[i].inDegree === 0) queue.push(i);
  }
  let res = 0;
  while (queue.length) {
    const currentLen = queue.length;
    res += Math.ceil(currentLen / k);
    for (let i = 0; i < currentLen; i++) {
      const current = queue.shift() as number;
      let currentNode = list[current];
      while (currentNode.next) {
        currentNode = currentNode.next;
        list[currentNode.data].inDegree--;
        if (list[currentNode.data].inDegree === 0) queue.push(currentNode.data);
      }
    }
  }
  return res;
};
