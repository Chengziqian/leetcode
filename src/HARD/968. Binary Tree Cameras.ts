// 09/22/2020 HARD

// https://leetcode-cn.com/problems/binary-tree-cameras/

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

/**
 * Given a binary tree, we install cameras on the nodes of the tree.

 Each camera at a node can monitor its parent, itself, and its immediate children.

 Calculate the minimum number of cameras needed to monitor all nodes of the tree.

 Input: [0,0,null,0,0]
 Output: 1
 Explanation: One camera is enough to monitor all nodes if placed as shown.

 Input: [0,0,null,0,null,0,null,null,0]
 Output: 2
 Explanation: At least two cameras are needed to monitor all nodes of the tree. The above image shows one of the valid configurations of camera placement.

 Note:

 The number of nodes in the given tree will be in the range [1, 1000].
 Every node has value 0.
 * 
 */
import { TreeNode } from '../../types/index'
interface CameraTreeNodeInfo {
  widthCamera: number,
  noCameraWatchedByDad: number,
  noCameraWatchedBySon: number
}
function minCameraCover(root: TreeNode | null): number {
  function minCamera(root: TreeNode | null): CameraTreeNodeInfo {
    if (!root) {
      return {
        widthCamera: Infinity,
        noCameraWatchedByDad: 0,
        noCameraWatchedBySon: 0
      }
    }
    const left = minCamera(root.left);
    const right = minCamera(root.right);
    
    const widthCamera = 1 + Math.min(
      left.noCameraWatchedByDad + right.noCameraWatchedByDad,
      left.noCameraWatchedByDad + right.widthCamera,
      left.widthCamera + right.noCameraWatchedByDad
    );
    
    const noCameraWatchedByDad = Math.min(
      left.widthCamera + right.widthCamera,
      left.widthCamera + right.noCameraWatchedBySon,
      left.noCameraWatchedBySon + right.widthCamera,
      left.noCameraWatchedBySon + right.noCameraWatchedBySon
    );
    
    const noCameraWatchedBySon = Math.min(
      left.widthCamera + right.widthCamera,
      left.widthCamera + right.noCameraWatchedBySon,
      left.noCameraWatchedBySon + right.widthCamera,
    )
    return {
      widthCamera,
      noCameraWatchedBySon,
      noCameraWatchedByDad
    }
  }
  const res = minCamera(root);
  return Math.min(res.widthCamera, res.noCameraWatchedBySon)
};
