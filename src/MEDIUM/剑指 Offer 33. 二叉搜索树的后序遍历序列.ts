// 03/19/2021 MEDIUM

// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/

/*
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

 

参考以下这颗二叉搜索树：

     5
    / \
   2   6
  / \
 1   3
示例 1：

输入: [1,6,3,2,5]
输出: false
示例 2：

输入: [1,3,2,6,5]
输出: true
 

提示：

数组长度 <= 1000
 */

function verifyPostorder(postorder: number[]): boolean {
  return check(0, postorder.length - 1);
  function check(start: number, end: number): boolean {
    if (start >= end) return true;
    const root = postorder[end];
    let mid = end;
    while (mid - 1 >= start && postorder[mid - 1] > root) mid--;
    for (let i = start; i < mid; i++) {
      if (postorder[i] > root) return false;
    }
    return check(start, mid - 1) && check(mid, end - 1);
  }
};
