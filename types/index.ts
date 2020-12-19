export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
  this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

export type Pair<T, S> = {
  first: T,
  second: S,
}

export interface Graph<T> {
  adjList: GraphNode<T>[][] | number[][];
}

interface GraphNode<T> {
  index: number,
  data: T
}
