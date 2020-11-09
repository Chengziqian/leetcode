/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}
function longestZigZag(root: TreeNode | null): number {
  if (!root) return 0;
  let ans = 0;
  // DFS
  const travelNode = (node: TreeNode | null, direction: 'left' | 'right', currentLength: number) => {
    if (!node) return;
    if (currentLength > ans) ans = currentLength;
    if (direction === 'left') {
      travelNode(node.right, 'right', currentLength + 1);
      travelNode(node.left, 'left', 1);
    } else {
      travelNode(node.right, 'right', 1);
      travelNode(node.left, 'left', currentLength + 1);
    }
  }
  travelNode(root.left, 'left', 1);
  travelNode(root.right, 'right', 1);
  return ans;
}


export default longestZigZag;
