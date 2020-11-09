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

function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
  let res: number[] = [];
  const arr1 = getValArray(root1);
  const arr2 = getValArray(root2);
  let index1 = 0;
  let index2 = 0;
  while (index1 < arr1.length || index2 < arr2.length) {
    if (index1 >= arr1.length) {
      res = res.concat(arr2.slice(index2));
      break;
    }
    if (index2 >= arr2.length) {
      res = res.concat(arr1.slice(index1));
      break;
    }
    if (arr1[index1] < arr2[index2]) {
      res.push(arr1[index1]);
      index1++;
    } else {
      res.push(arr2[index2]);
      index2++;
    }
  }
  return res
};

function getValArray(root: TreeNode | null) {
  let p = root;
  const stack: TreeNode[] = [];
  const res: number[] = [];
  while (p || stack.length !== 0) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    if (stack.length !== 0) {
      const cur = stack.pop() as TreeNode;
      res.push(cur.val);
      p = cur.right;
    }
  }
  return res;
}
