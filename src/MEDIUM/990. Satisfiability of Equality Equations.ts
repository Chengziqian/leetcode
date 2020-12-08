// 12/07/2020 MEDIUM

// https://leetcode-cn.com/problems/satisfiability-of-equality-equations/

/*
Given an array equations of strings that represent relationships between variables, 
each string equations[i] has length 4 and takes one of two different forms: "a==b" or "a!=b".
 Here, a and b are lowercase letters (not necessarily different) that represent one-letter variable names.

Return true if and only if it is possible to assign integers to variable names
so as to satisfy all the given equations.

 

Example 1:

Input: ["a==b","b!=a"]
Output: false
Explanation: If we assign say, a = 1 and b = 1, then the first equation is satisfied, but not the second.  There is no way to assign the variables to satisfy both equations.
Example 2:

Input: ["b==a","a==b"]
Output: true
Explanation: We could assign a = 1 and b = 1 to satisfy both equations.
Example 3:

Input: ["a==b","b==c","a==c"]
Output: true
Example 4:

Input: ["a==b","b!=c","c==a"]
Output: false
Example 5:

Input: ["c==c","b==d","x!=z"]
Output: true
 

Note:

1 <= equations.length <= 500
equations[i].length == 4
equations[i][0] and equations[i][3] are lowercase letters
equations[i][1] is either '=' or '!'
equations[i][2] is '='

 */

function equationsPossible(equations: string[]): boolean {
  const parent: number[] = new Array(26);
  for (let i = 0; i < 26; i++) {
    parent[i] = i;
  }
  const equal = equations.filter(e => e[1] === '=');
  const noneEqual = equations.filter(e => e[1] === '!');
  const regx = /^(\w)(==|!=)(\w)$/;
  for (let i = 0; i < equal.length; i++) {
    const res = equal[i].match(regx) as string[];
    const left = getCharCode(res[1]), right = getCharCode(res[3]);
    union(left, right);
  }
  for (let i = 0; i < noneEqual.length; i++) {
    const res = noneEqual[i].match(regx) as string[];
    const left = getCharCode(res[1]), right = getCharCode(res[3]);
    if (find(left) === find(right)) return false;
  }
  return true;
  
  function find(x: number): number {
    return parent[x] === x ? x : parent[x] = find(parent[x]);
  }
  
  function union(a: number, b: number) {
    const x = find(a);
    const y = find(b);
    if (x === y) return;
    parent[x] = y;
  }
  
  function getCharCode(char: string) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }
};
