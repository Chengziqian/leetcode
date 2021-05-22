// 05/17/2021 EASY

// https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/

#include <stack>
using namespace std;
class CQueue {
  private:
    stack<int> inStack;
    stack<int> outStack;
  public:
    CQueue() {
    }
    
    void appendTail(int value) {
      inStack.push(value);
    }
    
    int deleteHead() {
      if (outStack.empty() && inStack.empty()) return -1;
      if (!outStack.empty()) {
        int ans = outStack.top();
        outStack.pop();
        return ans;
      } else {
        while (!inStack.empty()) {
          outStack.push(inStack.top());
          inStack.pop();
        }
        int ans = outStack.top();
        outStack.pop();
        return ans;
      }
      return -1;
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * CQueue* obj = new CQueue();
 * obj->appendTail(value);
 * int param_2 = obj->deleteHead();
 */