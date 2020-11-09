// 09/29/2020 MEDIUM

// https://leetcode-cn.com/problems/course-schedule-ii/

/*

There are a total of n courses you have to take labelled from 0 to n - 1.

Some courses may have prerequisites, for example, if prerequisites[i] = [ai, bi] this means you must take the course bi before the course ai.

Given the total number of courses numCourses and a list of the prerequisite pairs, return the ordering of courses you should take to finish all courses.

If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
Example 2:

Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
Example 3:

Input: numCourses = 1, prerequisites = []
Output: [0]
 */
namespace CourseScheduleII {
  interface Graph {
    size: number;
    adjList: GraphNode[];
  }
  interface GraphNode {
    next: GraphNode | null;
    data: number;
    inDegree: number;
  }
  function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const graph: Graph = {
      size: numCourses,
      adjList: [],
    }
    for (let i = 0; i < numCourses; i++) {
      graph.adjList.push({
        next: null,
        data: i,
        inDegree: 0,
      })
    }
    for (let i = 0; i < prerequisites.length; i++) {
      const pair = prerequisites[i];
      if (!graph.adjList[pair[1]]) {
        graph.adjList[pair[1]].next = {
          next: null,
          data: pair[0],
          inDegree: 0,
        }
      } else {
        let lastNode: GraphNode = graph.adjList[pair[1]];
        while (lastNode.next) lastNode = lastNode.next;
        lastNode.next = {
          next: null,
          data: pair[0],
          inDegree: 0
        }
      }
      graph.adjList[pair[0]].inDegree++;
    }
    const queue: GraphNode[] = [];
    for (let i = 0; i < numCourses; i++) {
      if (graph.adjList[i].inDegree === 0) queue.push(graph.adjList[i]);
    }
    const ans: number[] = [];
    while (queue.length) {
      let curNode = queue.shift() as GraphNode;
      ans.push(curNode.data);
      while (curNode.next) {
        curNode = curNode.next;
        if (--graph.adjList[curNode.data].inDegree === 0) {
          queue.push(graph.adjList[curNode.data]);
        }
      }
    }
    return ans.length === numCourses ? ans : [];
  }; 
}
