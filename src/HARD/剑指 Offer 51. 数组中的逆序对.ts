// 04/21/2021 HARD

// https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof

/*
在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

 

示例 1:

输入: [7,5,6,4]
输出: 5
 

限制：

0 <= 数组长度 <= 50000
 */

function reversePairs(nums: number[]): number {
  const rc: Map<number, number> = new Map<number, number>();
  let index = 0;
  const sortNums = [...nums];
  sortNums.sort((a, b) => a - b);
  for (let i = 0; i < sortNums.length; i++) {
    if (!rc.has(sortNums[i])) rc.set(sortNums[i], index++);
  }
  const segTree: number[] = new Array(rc.size * 4).fill(0);
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    ans += query(1, 0, rc.size - 1, rc.get(nums[i]) + 1, rc.size - 1);
    update(1, 0, rc.size - 1, rc.get(nums[i]), 1);
  }
  return ans;
  
  function update(root: number, L: number, R: number, index: number, delta: number) {
    if (L === R && L === index) {
      segTree[root] += delta;
      return;
    }
    const mid = L + R >> 1;
    if (mid >= index) update(root << 1, L, mid, index, delta);
    if (mid < index) update(root << 1 | 1, mid + 1, R, index, delta);
    segTree[root] = segTree[root << 1] + segTree[root << 1 | 1];
  }
  
  function query(root: number, L: number, R: number, QL: number, QR: number) {
    if (QL <= L && R <= QR) return segTree[root];
    const mid = L + R >> 1;
    let ans = 0;
    if (mid >= QL) ans += query(root << 1, L, mid, QL, QR);
    if (mid < QR) ans += query(root << 1 | 1, mid + 1, R, QL, QR);
    return ans;
  }
};
