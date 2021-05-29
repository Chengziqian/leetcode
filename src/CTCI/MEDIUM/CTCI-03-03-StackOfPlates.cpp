//
// Created by ZiqianCheng on 2021/5/26.
//

// MEDIUM https://leetcode-cn.com/problems/stack-of-plates-lcci/

/*
 * Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
 * Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold.
 * Implement a data structure SetOfStacks that mimics this.
 * SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity.
 * SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack
 * (that is, pop() should return the same values as it would if there were just a single stack).
 * Follow Up: Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

You should delete the sub-stack when it becomes empty. pop, popAt should return -1 when there's no element to pop.

Example1:

 Input:
["StackOfPlates", "push", "push", "popAt", "pop", "pop"]
[[1], [1], [2], [1], [], []]
 Output:
[null, null, null, 2, 1, -1]
 Explanation:
Example2:

 Input:
["StackOfPlates", "push", "push", "push", "popAt", "popAt", "popAt"]
[[2], [1], [2], [3], [0], [0], [0]]
 Output:
[null, null, null, null, 2, 1, 3]

 */

#include <vector>
#include <stack>
using namespace std;
class StackOfPlates {
private:
  vector<stack<int>*> stackList;
  int cap;
public:
  StackOfPlates(int cap): cap(cap) {

  }

  void push(int val) {
    if (cap == 0) return;
    if (stackList.empty() || stackList.back()->size() == cap) {
      stackList.push_back(new stack<int>());
    }
    stackList.back()->push(val);
  }

  int pop() {
    if (cap == 0) return -1;
    if (stackList.empty()) return -1;
    int ans = stackList.back()->top();
    stackList.back()->pop();
    if (stackList.back()->empty()) stackList.pop_back();
    return ans;
  }

  int popAt(int index) {
    if (cap == 0) return -1;
    if (index < 0 || index + 1 > stackList.size()) return -1;
    int ans = stackList[index]->top();
    stackList[index]->pop();
    if (stackList[index]->empty()) stackList.erase(stackList.begin() + index);
    return ans;
  }
};

/**
 * Your StackOfPlates object will be instantiated and called as such:
 * StackOfPlates* obj = new StackOfPlates(cap);
 * obj->push(val);
 * int param_2 = obj->pop();
 * int param_3 = obj->popAt(index);
 */

