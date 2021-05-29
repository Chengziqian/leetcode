//
// Created by ZiqianCheng on 2021/5/26.
//

// EASY https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci/

/*
 * Implement a MyQueue class which implements a queue using two stacks.

 
Example:

MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.peek();  // return 1
queue.pop();   // return 1
queue.empty(); // return false
 

Notes:

You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).

 */

#include <stack>
using namespace std;
class MyQueue {
private:
  stack<int> s1;
  stack<int> s2;
public:
  /** Initialize your data structure here. */
  MyQueue() {

  }

  /** Push element x to the back of queue. */
  void push(int x) {
    s1.push(x);
  }

  /** Removes the element from in front of queue and returns that element. */
  int pop() {
    if (s2.empty()) {
      while (!s1.empty()) {
        s2.push(s1.top());
        s1.pop();
      }
    }
    int ans = s2.top();
    s2.pop();
    return ans;
  }

  /** Get the front element. */
  int peek() {
    if (s2.empty()) {
      while (!s1.empty()) {
        s2.push(s1.top());
        s1.pop();
      }
    }
    return s2.top();
  }

  /** Returns whether the queue is empty. */
  bool empty() {
    return s1.empty() && s2.empty();
  }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue* obj = new MyQueue();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->empty();
 */