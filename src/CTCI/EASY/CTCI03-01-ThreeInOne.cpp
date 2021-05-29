//
// Created by ZiqianCheng on 2021/5/26.
//

// EASY https://leetcode-cn.com/problems/three-in-one-lcci/

/*
 * Describe how you could use a single array to implement three stacks.

You should implement push(stackNum, value)、pop(stackNum)、isEmpty(stackNum)、peek(stackNum) methods.
 stackNum is the index of the stack. value is the value that pushed to the stack.

The constructor requires a stackSize parameter, which represents the size of each stack.

Example1:

 Input:
["TripleInOne", "push", "push", "pop", "pop", "pop", "isEmpty"]
[[1], [0, 1], [0, 2], [0], [0], [0], [0]]
 Output:
[null, null, null, 1, -1, -1, true]
Explanation: When the stack is empty, `pop, peek` return -1. When the stack is full, `push` does nothing.
Example2:

 Input:
["TripleInOne", "push", "push", "push", "pop", "pop", "pop", "peek"]
[[2], [0, 1], [0, 2], [0, 3], [0], [0], [0], [0]]
 Output:
[null, null, null, null, 2, 1, -1, -1]

 */

#include <vector>
using namespace std;
class TripleInOne {
private:
  vector<int> tripleStack;
  vector<int> topIndex;
  int stackSize;
public:
  TripleInOne(int stackSize): stackSize(stackSize), topIndex(3), tripleStack(stackSize * 3) {
    topIndex[0] = 0;
    topIndex[1] = stackSize;
    topIndex[2] = stackSize * 2;
  }

  void push(int stackNum, int value) {
    int upperIndex = (stackNum + 1) * stackSize;
    if (topIndex[stackNum] == upperIndex) return;
    else tripleStack[topIndex[stackNum]] = value;
    topIndex[stackNum]++;
  }

  int pop(int stackNum) {
    int lowerIndex = stackNum * stackSize;
    if (topIndex[stackNum] == lowerIndex) return -1;
    else {
      int ans = tripleStack[topIndex[stackNum] - 1];
      topIndex[stackNum]--;
      return ans;
    }
  }

  int peek(int stackNum) {
    int lowerIndex = stackNum * stackSize;
    if (topIndex[stackNum] == lowerIndex) return -1;
    else return tripleStack[topIndex[stackNum] - 1];
  }

  bool isEmpty(int stackNum) {
    int lowerIndex = stackNum * stackSize;
    return topIndex[stackNum] == lowerIndex;
  }
};

/**
 * Your TripleInOne object will be instantiated and called as such:
 * TripleInOne* obj = new TripleInOne(stackSize);
 * obj->push(stackNum,value);
 * int param_2 = obj->pop(stackNum);
 * int param_3 = obj->peek(stackNum);
 * bool param_4 = obj->isEmpty(stackNum);
 */
