// 01/11/2021 MEDIUM

// https://leetcode-cn.com/problems/smallest-string-with-swaps/

/* 
You are given a string s, and an array of pairs of indices in the string pairs where pairs[i] = [a, b] indicates 2 indices(0-indexed) of the string.

You can swap the characters at any pair of indices in the given pairs any number of times.

Return the lexicographically smallest string that s can be changed to after using the swaps.

 

Example 1:

Input: s = "dcab", pairs = [[0,3],[1,2]]
Output: "bacd"
Explaination: 
Swap s[0] and s[3], s = "bcad"
Swap s[1] and s[2], s = "bacd"
Example 2:

Input: s = "dcab", pairs = [[0,3],[1,2],[0,2]]
Output: "abcd"
Explaination: 
Swap s[0] and s[3], s = "bcad"
Swap s[0] and s[2], s = "acbd"
Swap s[1] and s[2], s = "abcd"
Example 3:

Input: s = "cba", pairs = [[0,1],[1,2]]
Output: "abc"
Explaination: 
Swap s[0] and s[1], s = "bca"
Swap s[1] and s[2], s = "bac"
Swap s[0] and s[1], s = "abc"
 

Constraints:

1 <= s.length <= 10^5
0 <= pairs.length <= 10^5
0 <= pairs[i][0], pairs[i][1] < s.length
s only contains lower case English letters.

*/
import { PriorityQueue } from '../../utils/index'
function smallestStringWithSwaps(s: string, pairs: number[][]): string {
  const parent: number[] = new Array(s.length);
  for (let i = 0; i < parent.length; i++) parent[i] = i;

  for (let i = 0; i < pairs.length; i++) {
    const [x, y] = pairs[i];
    union(x, y);
  }
  const record: Map<number, PriorityQueue<string>> = new Map<number, PriorityQueue<string>>();
  for (let i = 0; i < s.length; i++) {
    const p = find(i);
    if (!record.has(p)) {
      record.set(p, new PriorityQueue<string>((a, b) => getCharCode(a) < getCharCode(b)));
    }
    record.get(p).add(s[i]);
  }

  let ans = '';

  for (let i = 0; i < s.length; i++) {
    ans += record.get(find(i)).remove();
  }

  return ans;


  function find(a: number): number {
    return a === parent[a] ? a : parent[a] = find(parent[a]);
  }

  function union(x: number, y: number) {
    const px = find(x);
    const py = find(y);
    if (px === py) return;
    parent[px] = py;
  }

  function getCharCode(char :string) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }
};