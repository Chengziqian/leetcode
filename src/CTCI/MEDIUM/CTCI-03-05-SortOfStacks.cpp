//
// Created by ZiqianCheng on 2021/5/26.
//

// MEDIUM https://leetcode-cn.com/problems/sort-of-stacks-lcci/

/*
 *Write a program to sort a stack such that the smallest items are on the top.
 * You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array).
 * The stack supports the following operations: push, pop, peek, and isEmpty. When the stack is empty, peek should return -1.

Example1:

 Input:
["SortedStack", "push", "push", "peek", "pop", "peek"]
[[], [1], [2], [], [], []]
 Output:
[null,null,null,1,null,2]
Example2:

 Input:
["SortedStack", "pop", "pop", "push", "pop", "isEmpty"]
[[], [], [], [1], [], []]
 Output:
[null,null,null,null,null,true]
Note:

The total number of elements in the stack is within the range [0, 5000].

 */

#include <stack>
using namespace std;
class SortedStack {
private:
  stack<int> mainStack;
  stack<int> lowerStack;
public:
  SortedStack() {

  }

  void push(int val) {
    if (mainStack.empty() || val < mainStack.top()) mainStack.push(val);
    else {
      while (!mainStack.empty() && mainStack.top() < val) {
        lowerStack.push(mainStack.top());
        mainStack.pop();
      }
      mainStack.push(val);
      while (!lowerStack.empty()) {
        mainStack.push(lowerStack.top());
        lowerStack.pop();
      }
    }
  }

  void pop() {
    if (!mainStack.empty()) mainStack.pop();
  }

  int peek() {
    return mainStack.empty() ? -1 : mainStack.top();
  }

  bool isEmpty() {
    return mainStack.empty();
  }
};

/**
 * Your SortedStack object will be instantiated and called as such:
 * SortedStack* obj = new SortedStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->isEmpty();
 */