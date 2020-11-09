// 09/10/2020 EASY

// https://leetcode.com/problems/number-of-equivalent-domino-pairs/


// O(N^2) Time Limit
// function numEquivDominoPairs(dominoes: number[][]): number {
//  const len = dominoes.length;
//  let ans = 0;
//  for (let i = 0; i < len; i++) {
//    for (let j = i + 1; j < len; j++) {
//      if ((dominoes[i][0] === dominoes[j][0] && dominoes[i][1] === dominoes[j][1]) 
//        || (dominoes[i][0] === dominoes[j][1] && dominoes[i][1] === dominoes[j][0])) ans++;
//    }
//  }
//  return ans;
// };

// 9 * 9 case + hash map


function numEquivDominoPairs(dominoes: number[][]): number {
 const len = dominoes.length;
 const map: {[Key: string]: number} = {};
 let ans = 0;
 for (let i = 0; i < len; i++) {
   const str = `${Math.min(dominoes[i][0], dominoes[i][1])}${Math.max(dominoes[i][0], dominoes[i][1])}`;
   if (map[str]) {
     ans += map[str];
     map[str]++;
   }
   else map[str] = 1;
 }
 return ans;
};
