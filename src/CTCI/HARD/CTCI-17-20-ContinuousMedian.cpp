//
// Created by ZiqianCheng on 2021/6/11.
//

// HARD https://leetcode-cn.com/problems/continuous-median-lcci/

/*
 * Numbers are randomly generated and passed to a method.
 * Write a program to find and maintain the median value as new values are generated.

Median is the middle value in an ordered integer list.
 If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

For example,

[2,3,4], the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5

Design a data structure that supports the following two operations:

void addNum(int num) - Add a integer number from the data stream to the data structure.
double findMedian() - Return the median of all elements so far.
Example:

addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3)
findMedian() -> 2

 */

#include <queue>
using namespace std;
class MedianFinder {
private:
  int count = 0;
  priority_queue<int, vector<int>, less<int>> topMaxHeap;
  priority_queue<int, vector<int>, greater<int>> topMinHeap;
public:
  /** initialize your data structure here. */
  MedianFinder() {

  }

  void addNum(int num) {
    count++;
    if (topMaxHeap.empty() || num < topMaxHeap.top()) {
      topMaxHeap.push(num);
    } else {
      topMinHeap.push(num);
    }
    int half = count / 2;
    if (topMinHeap.size() > half) {
      int top = topMinHeap.top();
      topMinHeap.pop();
      topMaxHeap.push(top);
    }
    if (topMaxHeap.size() > count - half) {
      int top = topMaxHeap.top();
      topMaxHeap.pop();
      topMinHeap.push(top);
    }
  }

  double findMedian() {
    if (count % 2) {
      return (double)topMaxHeap.top();
    } else {
      return ((double)topMaxHeap.top() + topMinHeap.top()) / 2;
    }
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder* obj = new MedianFinder();
 * obj->addNum(num);
 * double param_2 = obj->findMedian();
 */