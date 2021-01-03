// 12/24/2020 HARD

// https://leetcode-cn.com/problems/candy/

/*
There are N children standing in a line. Each child is assigned a rating value.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
What is the minimum candies you must give?

Example 1:

Input: [1,0,2]
Output: 5 
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
Example 2:

Input: [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
             The third child gets 1 candy because it satisfies the above two conditions.

 */

// function candy(ratings: number[]): number {
//   const left: number[] = new Array(ratings.length);
//   left[0] = 1;
//   for (let i = 1; i < ratings.length; i++) {
//     if (ratings[i] > ratings[i - 1]) {
//       left[i] = left[i - 1] + 1;
//     } else {
//       left[i] = 1;
//     }
//   }
//   let right = 1, ans = Math.max(left[ratings.length - 1], 1);
//   for (let i = ratings.length - 2; i >= 0; i--) {
//     if (ratings[i] > ratings[i + 1]) {
//       right++;
//     } else {
//       right = 1;
//     }
//     ans += Math.max(left[i], right);
//   }
//   return ans;
// };

function candy(ratings: number[]): number {
  let inc = 1, dec = 0, pre = 1, ans = 1;
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] >= ratings[i - 1]) {
      dec = 0;
      pre = ratings[i] === ratings[i - 1] ? 1 : pre + 1;
      inc = pre;
      ans += pre;
    } else {
      dec++;
      if (dec === inc) {
        dec++;
      }
      ans += dec;
      pre = 1;
    }
  }
  return ans;
};
