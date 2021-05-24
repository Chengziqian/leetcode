//
// Created by ZiqianCheng on 2021/5/24.
//

// MEDIUM https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/

#include <deque>
#include <queue>
using namespace std;
class MaxQueue {
private:
  queue<int> q;
  deque<int> dq;
public:
  MaxQueue() {

  }

  int max_value() {
    return dq.empty() ? -1 : dq.front();
  }

  void push_back(int value) {
    q.push(value);
    while(!dq.empty() && dq.back() < value) dq.pop_back();
    dq.push_back(value);
  }

  int pop_front() {
    if (q.empty()) return -1;
    int tmp = q.front();
    q.pop();
    if (!dq.empty() && dq.front() == tmp) dq.pop_front();
    return tmp;
  }
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * MaxQueue* obj = new MaxQueue();
 * int param_1 = obj->max_value();
 * obj->push_back(value);
 * int param_3 = obj->pop_front();
 */
