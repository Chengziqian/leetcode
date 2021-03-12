// 03/12/2021 MEDIUM

// https://leetcode-cn.com/problems/verify-preorder-serialization-of-a-binary-tree/

/*
One way to serialize a binary tree is to use pre-order traversal. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as #.

     _9_
    /   \
   3     2
  / \   / \
 4   1  #  6
/ \ / \   / \
# # # #   # #
For example, the above binary tree can be serialized to the string "9,3,4,#,#,1,#,#,2,#,6,#,#", where # represents a null node.

Given a string of comma separated values, verify whether it is a correct preorder traversal serialization of a binary tree. Find an algorithm without reconstructing the tree.

Each comma separated value in the string must be either an integer or a character '#' representing null pointer.

You may assume that the input format is always valid, for example it could never contain two consecutive commas such as "1,,3".

Example 1:

Input: "9,3,4,#,#,1,#,#,2,#,6,#,#"
Output: true
Example 2:

Input: "1,#"
Output: false
Example 3:

Input: "9,#,#,1"
Output: false

 */

function isValidSerialization(preorder: string): boolean {
  if (!preorder) return false;
  if (preorder === '#') return true;
  const nodes: string[] = preorder.split(',');
  if (nodes[0] === '#' && nodes.length > 1) return false;
  const stack: string[] = [];
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i] !== '#') stack.push(nodes[i]);
    else {
      if (stack[stack.length - 1] !== '#') stack.push('#')
      else {
        while (stack.length && stack[stack.length - 1] === '#') {
          stack.pop();
          if (!stack.length || stack.pop() === '#') return false;
        }
        if (i === nodes.length - 1) break;
        stack.push('#');
      }
    }
  }
  return stack.length === 0;
};
