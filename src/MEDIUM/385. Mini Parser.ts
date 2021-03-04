// 03/03/2021 MEDIUM

// https://leetcode-cn.com/problems/mini-parser/

/*
Given a nested list of integers represented as a string, implement a parser to deserialize it.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.

Note: You may assume that the string is well-formed:

String is non-empty.
String does not contain white spaces.
String contains only digits 0-9, [, - ,, ].
 

Example 1:

Given s = "324",

You should return a NestedInteger object which contains a single integer 324.
 

Example 2:

Given s = "[123,[456,[789]]]",

Return a NestedInteger object containing a nested list with 2 elements:

1. An integer containing value 123.
2. A nested list containing two elements:
    i.  An integer containing value 456.
    ii. A nested list with one element:
         a. An integer containing value 789.

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
function deserialize(s: string): NestedInteger {
  const parse = JSON.parse(s);
  if (typeof parse === 'number') return new NestedInteger(parse);
  return travel(parse);
  
  function travel(arr: (number | number[])[]): NestedInteger {
    const ans = new NestedInteger();
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        const current = new NestedInteger(arr[i] as number);
        ans.add(current);
      } else {
        ans.add(travel(arr[i] as number[]));
      }
    }
    return ans;
  }
};
