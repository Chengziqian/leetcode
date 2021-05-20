// 05/18/2021 EASY

// https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/

#include <stack>
#include <deque>
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
      s.push(x);
      if (minStack.empty() || x <= minStack.top()) minStack.push(x);
    }
    
    void pop() {
      if (s.top() == minStack.top()) minStack.pop();
      return s.pop();
    }
    
    int top() {
      return s.top();
    }
    
    int min() {
      return minStack.top();
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(x);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->min();
 */