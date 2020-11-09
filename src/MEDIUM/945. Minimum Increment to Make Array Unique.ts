// 09/27/2020 MEDIUM

// https://leetcode-cn.com/problems/minimum-increment-to-make-array-unique/

// solution: https://leetcode-cn.com/problems/minimum-increment-to-make-array-unique/solution/c-tu-jie-kong-jian-huan-shi-jian-fang-fa-onv-by-ti/

/**
 * Given an array of integers A, a move consists of choosing any A[i], and incrementing it by 1.

 Return the least number of moves to make every value in A unique.

  

 Example 1:

 Input: [1,2,2]
 Output: 1
 Explanation:  After 1 move, the array could be [1, 2, 3].
 Example 2:

 Input: [3,2,1,2,1,7]
 Output: 6
 Explanation:  After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
 It can be shown with 5 or less moves that it is impossible for the array to have all unique values.
  

 Note:

 0 <= A.length <= 40000
 0 <= A[i] < 40000
 * 
 */

function minIncrementForUnique(A: number[]): number {
  const shown: { [Key: number]: boolean } = {};
  const needMove: number[] = [];
  for (let i = 0; i < A.length; i++) {
    if (shown[A[i]]) {
      needMove.push(A[i]);
    } else {
      shown[A[i]] = true;
    }
  }
  let ans = 0;
  for (let i = 0; i < needMove.length; i++) {
    let currentMove = needMove[i];
    while (shown[currentMove]) {
      currentMove++;
      ans++;
    }
    shown[currentMove] = true;
  }
  return ans;
};

