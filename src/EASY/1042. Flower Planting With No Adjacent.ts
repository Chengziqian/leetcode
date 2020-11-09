// 09/15/2020 EASY

// https://leetcode-cn.com/problems/flower-planting-with-no-adjacent/

namespace FlowerPlantingWithNoAdjacent {
  interface Graph {
    adjList: {[Key: number]: GraphNode | null}
  }
  interface GraphNode {
    data: number
    next: GraphNode | null
  }
  function gardenNoAdj(N: number, paths: number[][]): number[] {
    const graph: Graph = {
      adjList: {}
    }
    for (let i = 1; i <= N; i++) {
      graph.adjList[i] = null;
    }
    for (let i = 0; i < paths.length; i++) {
      const leftGraphNode: GraphNode = {
        data: paths[i][0],
        next: null
      }
      const rightGraphNode: GraphNode = {
        data: paths[i][1],
        next: null
      }
      if (!graph.adjList[paths[i][0]]) {
        graph.adjList[paths[i][0]] = rightGraphNode
      } else {
        let lastGraphNode = graph.adjList[paths[i][0]] as GraphNode;
        while (lastGraphNode.next) lastGraphNode = lastGraphNode.next;
        lastGraphNode.next = rightGraphNode
      }
      if (!graph.adjList[paths[i][1]]) {
        graph.adjList[paths[i][1]] = leftGraphNode
      } else {
        let lastGraphNode = graph.adjList[paths[i][1]] as GraphNode;
        while (lastGraphNode.next) lastGraphNode = lastGraphNode.next;
        lastGraphNode.next = leftGraphNode
      }
    }
    const ans: number[] = [];
    for (let i = 0; i < N; i++) {
      ans.push(0);
    }
    for (let i = 1; i <= N; i++) {
      const availableList = [1,2,3,4];
      let currentGraphNode = graph.adjList[i] as (GraphNode | null);
      while (currentGraphNode) {
        const color = ans[currentGraphNode.data - 1];
        if (color !== 0) {
          const index = availableList.findIndex(v => v === color)
          availableList.splice(index, 1);
        }
        currentGraphNode = currentGraphNode.next;
      }
      ans[i - 1] = availableList[0];
    }
    return ans;
  };
}
