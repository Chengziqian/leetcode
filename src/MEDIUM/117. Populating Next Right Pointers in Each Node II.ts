// 09/28/2020 MEDIUM

// https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/


/**
 * 
 * Given a binary tree

 struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
 Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

 Initially, all next pointers are set to NULL.

  

 Follow up:

 You may only use constant extra space.
 Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.
  

 Example 1:



 Input: root = [1,2,3,4,5,null,7]
 Output: [1,#,2,3,#,4,5,7,#]
 Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
  

 Constraints:

 The number of nodes in the given tree is less than 6000.
 -100 <= node.val <= 100
 */

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
namespace PopulatingNextRightPointersInEachNodeII {
  class Node {
    public val: number | null;
    public left: Node | null;
    public right: Node | null;
    public next: Node | null;
    constructor(val: number, left: Node, right: Node, next: Node) {
      this.val = val === undefined ? null : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
      this.next = next === undefined ? null : next;
    }
  }
  
  function connect(root: Node | null): Node | null {
    if (!root) return root;
    const queue: Node[] = [];
    let pre: Node | null = null;
    queue.push(root);
    while (queue.length) {
      const levelSize = queue.length;
      let currentSize = 0;
      while (currentSize < levelSize) {
        const cur = queue.shift() as Node;
        if (!pre) pre = cur;
        else {
          pre.next = cur;
          pre = pre.next;
        }
        if (cur.left) queue.push(cur.left);
        if (cur.right) queue.push(cur.right);
        currentSize++;
      }
      pre = null;
    }
    return root;
  }
}
