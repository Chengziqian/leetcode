// 01/12/2021 HARD

// https://leetcode-cn.com/problems/sort-items-by-groups-respecting-dependencies/

/*
There are n items each belonging to zero or one of m groups 
where group[i] is the group that the i-th item belongs to 
and it's equal to -1 if the i-th item belongs to no group. 
The items and the groups are zero indexed. 
A group can have no item belonging to it.

Return a sorted list of the items such that:

The items that belong to the same group are next to each other in the sorted list.
There are some relations between these items 
where beforeItems[i] is a list containing all the items 
that should come before the i-th item in the sorted array (to the left of the i-th item).
Return any solution if there is more than one solution and return an empty list if there is no solution.

 

Example 1:



Input: n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3,6],[],[],[]]
Output: [6,3,4,1,5,2,0,7]
Example 2:

Input: n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3],[],[4],[]]
Output: []
Explanation: This is the same as example 1 except that 4 needs to be before 6 in the sorted list.
 

Constraints:

1 <= m <= n <= 3 * 104
group.length == beforeItems.length == n
-1 <= group[i] <= m - 1
0 <= beforeItems[i].length <= n - 1
0 <= beforeItems[i][j] <= n - 1
i != beforeItems[i][j]
beforeItems[i] does not contain duplicates elements.

 */
namespace sortItemsByGroupsRespectingDependencies {
  interface GraphNode {
    inDegree: number;
    adjList: number[];
  }
  function sortItems(n: number, m: number, group: number[], beforeItems: number[][]): number[] {
    const itemGraph: GraphNode[] = [];
    const groupGraph: GraphNode[] = [];
    for (let i = 0; i < group.length; i++) {
      if (group[i] === -1) group[i] = m++;
    }
    for (let i = 0; i < n; i++) {
      itemGraph[i] = {
        inDegree: 0,
        adjList: []
      };
    }
    for (let i = 0; i < m; i++) {
      groupGraph[i] = {
        inDegree: 0,
        adjList: []
      }
    }
    for (let i = 0; i < beforeItems.length; i++) {
      const itemTo = i;
      for (let j = 0; j < beforeItems[i].length; j++) {
        const itemFrom = beforeItems[i][j];
        itemGraph[itemFrom].adjList.push(itemTo);
        itemGraph[itemTo].inDegree++;
        const groupFrom = group[itemFrom];
        const groupTo = group[itemTo];
        if (groupFrom !== groupTo) {
          groupGraph[groupFrom].adjList.push(groupTo);
          groupGraph[groupTo].inDegree++;
        }
      }
    }
    const groupSorted = topologicalSort(groupGraph);
    if (!groupSorted.length) return [];
    const itemSorted = topologicalSort(itemGraph);
    if (!itemSorted.length) return [];
    
    const group2Items: Map<number, number[]> = new Map<number, number[]>();
    const ans: number[] = [];
    for (let i = 0; i < itemSorted.length; i++) {
      const groupIndex = group[itemSorted[i]];
      if (!group2Items.has(groupIndex)) {
        group2Items.set(groupIndex, []);
      }
      group2Items.get(groupIndex).push(itemSorted[i]);
    }
    
    for (let i = 0; i < groupSorted.length; i++) {
      if (group2Items.has(groupSorted[i])) {
        ans.push(...group2Items.get(groupSorted[i]));
      }
    }
    
    return ans;
    
    function topologicalSort(graph: GraphNode[]): number[] {
      const ans: number[] = [];
      const queue: number[] = [];
      for (let i = 0; i < graph.length; i++) {
        if (graph[i].inDegree === 0) {
          queue.push(i);
        }
      }
      while (queue.length) {
        const currentItem = queue.shift();
        ans.push(currentItem);
        for (let i = 0; i < graph[currentItem].adjList.length; i++) {
          const to = graph[currentItem].adjList[i];
          if (--graph[to].inDegree === 0) {
            queue.push(to);
          }
        }
      }
      return ans.length === graph.length ? ans : [];
    }
  };
}
