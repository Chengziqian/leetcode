//
// Created by ZiqianCheng on 2021/5/26.
//

// EASY https://leetcode-cn.com/problems/min-stack-lcci/

/*
 * How would you design a stack which,
 * in addition to push and pop,
 * has a function min which returns the minimum element?
 * Push, pop and min should all operate in 0(1) time.

Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> return -3.
minStack.pop();
minStack.top();      --> return 0.
minStack.getMin();   --> return -2.

 */
#include <stack>
using namespace std;
class MinStack {
private:
  stack<int> s;
  stack<int> minStack;
public:
  /** initialize your data structure here. */
  MinStack() {

  }

  void push(int x) {
    if (minStack.empty() || x <= minStack.top()) minStack.push(x);
    return s.push(x);
  }

  void pop() {
    int ans = s.top();
    if (ans == minStack.top()) minStack.pop();
    return s.pop();
  }

  int top() {
    return s.top();
  }

  int getMin() {
    return minStack.top();
  }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(x);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */