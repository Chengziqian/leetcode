// 11/19/2020 MEDIUM

// https://leetcode-cn.com/problems/reconstruct-itinerary/

/*

Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. 
All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:

If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.
 For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.
One must use all the tickets once and only once.
Example 1:

Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
Example 2:

Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
             But it is larger in lexical order.

 */
// namespace ReconstructItinerary {
//   interface GraphList {
//     [Key: string]: GraphNode | null
//   }
//   interface GraphNode {
//     name: string
//     next: GraphNode | null
//   }
//   function findItinerary(tickets: string[][]): string[] {
//     const graphList: GraphList = {};
//     for (let i = 0; i < tickets.length; i++) {
//       const ticket = tickets[i];
//       const _from = ticket[0];
//       const _to = ticket[1];
//       if (!graphList[_from]) {
//         graphList[_from] = {
//           name: _to,
//           next: null,
//         }
//       } else {
//         const dummy = {
//           name: '',
//           next: graphList[_from]
//         }
//         let end = dummy;
//         while (end.next && end.next.name <= _to) end = end.next;
//         const _next = end.next;
//         end.next = {
//           name: _to,
//           next: _next
//         }
//         graphList[_from] = dummy.next;
//       }
//     }
//     let ans: string[] = [];
//     travel('JFK');
//     return ans;
//     function travel(currentAirport: string): boolean {
//       ans.push(currentAirport);
//       if (ans.length === tickets.length + 1) {
//         return true;
//       }
//       const toList = graphList[currentAirport];
//       if (!toList) return false;
//       const dummy: GraphNode = {
//         name: '',
//         next: graphList[currentAirport]
//       }
//       let nextAirport: GraphNode | null = dummy.next;
//       let preAirport = dummy;
//       while (nextAirport) {
//         const originNode = nextAirport;
//         preAirport.next = nextAirport.next;
//         graphList[currentAirport] = dummy.next;
//         if (travel(nextAirport.name)) {
//           return true;
//         } else {
//           preAirport.next = originNode;
//           graphList[currentAirport] = dummy.next;
//           ans.pop();
//         }
//         preAirport = nextAirport;
//         nextAirport = nextAirport.next;
//       }
//       return false;
//     }
//   }; 
// }
function findItinerary(tickets: string[][]): string[] {
  const map: {[Key: string]: string[]} = {};
  for (let i = 0; i < tickets.length; i++) {
    const src = tickets[i][0];
    const dst = tickets[i][1];
    if (!map[src]) map[src] = [dst];
    else {
      map[src].push(dst);
      map[src].sort();
    }
  }
  const ans: string[] = [];
  dfs('JFK');
  ans.reverse();
  return ans;

  function dfs(src: string) {
    while (map[src] && map[src].length) {
      const nextSrc = map[src].shift() as string;
      dfs(nextSrc);
    }
    ans.push(src);
  }
}
