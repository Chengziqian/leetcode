//
// Created by ZiqianCheng on 2021/5/20.
//

// HARD https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/

#include <queue>
using namespace std;
class MedianFinder {
private:
  priority_queue<int, vector<int>, greater<int>> greater;
  priority_queue<int, vector<int>, less<int>> less;
  int count = 0;
public:
  /** initialize your data structure here. */
  MedianFinder() {

  }

  void addNum(int num) {
    count++;
    if (less.empty()) less.emplace(num);
    else {
      if (num > less.top()) greater.emplace(num);
      else less.emplace(num);
      if (less.size() > (count - (count >> 1))) {
        int tmp = less.top();
        less.pop();
        greater.emplace(tmp);
      }
      if (greater.size() > (count >> 1)) {
        int tmp = greater.top();
        greater.pop();
        less.emplace(tmp);
      }
    }
  }

  double findMedian() {
    if (count & 1) return less.top();
    else return ((double)greater.top() + less.top()) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder* obj = new MedianFinder();
 * obj->addNum(num);
 * double param_2 = obj->findMedian();
 */

