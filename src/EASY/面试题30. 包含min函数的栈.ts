// 03/22/2021 EASY

// https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/

/*
定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

 

示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.
 

提示：

各函数的调用总次数不超过 20000 次

 */

class MinStack {
  private readonly stack: number[]
  private readonly minVal: number[]
  constructor() {
    this.stack = [];
    this.minVal = [];
  }

  push(x: number): void {
    this.stack.push(x);
    if (!this.minVal.length || this.minVal[this.minVal.length - 1] >= x) this.minVal.push(x);
  }

  pop(): void {
    const ans = this.stack.pop();
    if (ans === this.minVal[this.minVal.length - 1]) this.minVal.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  min(): number {
    return this.minVal[this.minVal.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
