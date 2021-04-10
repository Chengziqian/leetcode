// 03/23/2021 MEDIUM

// https://leetcode-cn.com/problems/flatten-nested-list-iterator/

/*
Given a nested list of integers, implement an iterator to flatten it.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.

Example 1:

Input: [[1,1],2,[1,1]]
Output: [1,1,2,1,1]
Explanation: By calling next repeatedly until hasNext returns false, 
             the order of elements returned by next should be: [1,1,2,1,1].
Example 2:

Input: [1,[4,[6]]]
Output: [1,4,6]
Explanation: By calling next repeatedly until hasNext returns false, 
             the order of elements returned by next should be: [1,4,6].

 */

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */
class NestedInteger{
  constructor(value?: number) {
  }
  public isInteger(): boolean;
  public getInteger(): number | null
  public setInteger(value: number): void;
  public add(elem: NestedInteger): void;
  public getList(): NestedInteger[];
}
class NestedIterator {
  private readonly list: number[];
  private index: number;
  constructor(nestedList: NestedInteger[]) {
    this.list = this.flatten(nestedList);
    this.index = 0;
  }
  
  flatten(nestedList: NestedInteger[]): number[] {
    const ans = [];
    for (let i = 0; i < nestedList.length; i++) {
      if (nestedList[i].isInteger()) {
        ans.push(nestedList[i].getInteger())
      } else {
        ans.push(...this.flatten(nestedList[i].getList()));
      }
    }
    return ans;
  }

  hasNext(): boolean {
    return this.index < this.list.length;
  }

  next(): number {
    return this.list[this.index++];
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */
