// 04/13/2021 HARD

// https://leetcode-cn.com/problems/finding-mk-average

/*
You are given two integers, m and k, and a stream of integers. 
You are tasked to implement a data structure that calculates the MKAverage for the stream.

The MKAverage can be calculated using these steps:

If the number of the elements in the stream is less than m you should consider the MKAverage to be -1. 
Otherwise, copy the last m elements of the stream to a separate container.
Remove the smallest k elements and the largest k elements from the container.
Calculate the average value for the rest of the elements rounded down to the nearest integer.
Implement the MKAverage class:

MKAverage(int m, int k) Initializes the MKAverage object with an empty stream and the two integers m and k.
void addElement(int num) Inserts a new element num into the stream.
int calculateMKAverage() Calculates and returns the MKAverage for the current stream rounded down to the nearest integer.
 

Example 1:

Input
["MKAverage", "addElement", "addElement", "calculateMKAverage", "addElement", "calculateMKAverage", "addElement", "addElement", "addElement", "calculateMKAverage"]
[[3, 1], [3], [1], [], [10], [], [5], [5], [5], []]
Output
[null, null, null, -1, null, 3, null, null, null, 5]

Explanation
MKAverage obj = new MKAverage(3, 1); 
obj.addElement(3);        // current elements are [3]
obj.addElement(1);        // current elements are [3,1]
obj.calculateMKAverage(); // return -1, because m = 3 and only 2 elements exist.
obj.addElement(10);       // current elements are [3,1,10]
obj.calculateMKAverage(); // The last 3 elements are [3,1,10].
                          // After removing smallest and largest 1 element the container will be [3].
                          // The average of [3] equals 3/1 = 3, return 3
obj.addElement(5);        // current elements are [3,1,10,5]
obj.addElement(5);        // current elements are [3,1,10,5,5]
obj.addElement(5);        // current elements are [3,1,10,5,5,5]
obj.calculateMKAverage(); // The last 3 elements are [5,5,5].
                          // After removing smallest and largest 1 element the container will be [5].
                          // The average of [5] equals 5/1 = 5, return 5
 

Constraints:

3 <= m <= 105
1 <= k*2 < m
1 <= num <= 105
At most 105 calls will be made to addElement and calculateMKAverage.

 */

import { Heap } from '../../utils/Heap';

class MKAverage {
  private lower: Heap<number>;
  private upper: Heap<number>;
  private middleMax: Heap<number>;
  private middleMin: Heap<number>;
  private m: number;
  private k: number;
  private size: number;
  private sum: number;
  private queue: number[];
  constructor(m: number, k: number) {
    this.lower = new Heap<number>((a, b) => a > b);
    this.upper = new Heap<number>((a, b) => a < b);
    this.middleMax = new Heap<number>((a, b) => a > b);
    this.middleMin = new Heap<number>((a, b) => a < b);
    this.m = m;
    this.k = k;
    this.size = 0;
    this.sum = 0;
    this.queue = [];
  }

  addElement(num: number): void {
    if (this.size < this.m) {
      this.size++;
    } else {
      const remove = this.queue.shift();
      if (remove < this.middleMin.front()) {
        this.lower.delete(remove);
      } else if (remove > this.middleMax.front()) {
        this.upper.delete(remove)
      } else {
        this.middleMax.delete(remove);
        this.middleMin.delete(remove);
        this.sum -= remove;
      }
    }
    this.queue.push(num);
    if (this.upper.size() && num > this.upper.front()) {
      this.upper.insert(num);
      if (this.upper.size() > this.k) {
        const trans = this.upper.front();
        this.upper.delete();
        this.middleMin.insert(trans);
        this.middleMax.insert(trans);
        this.sum += trans;
      }
    } else if (this.lower.size() && num < this.lower.front()) {
      this.lower.insert(num);
      if (this.lower.size() > this.k) {
        const trans = this.lower.front();
        this.lower.delete();
        this.middleMin.insert(trans);
        this.middleMax.insert(trans);
        this.sum += trans;
      }
    } else {
      this.middleMin.insert(num);
      this.middleMax.insert(num);
      this.sum += num;
    }
    if (this.middleMax.size() > this.m - 2 * this.k) {
      if (this.lower.size() < this.k) {
        const trans = this.middleMin.front();
        this.middleMin.delete();
        this.middleMax.delete(trans);
        this.lower.insert(trans);
        this.sum -= trans;
      } else {
        const trans = this.middleMax.front();
        this.middleMax.delete();
        this.middleMin.delete(trans);
        this.upper.insert(trans);
        this.sum -= trans;
      }
    }
  }

  calculateMKAverage(): number {
    if (this.size < this.m) return -1;
    else return Math.floor(this.sum / (this.m - 2 * this.k));
  }
}

/**
 * Your MKAverage object will be instantiated and called as such:
 * var obj = new MKAverage(m, k)
 * obj.addElement(num)
 * var param_2 = obj.calculateMKAverage()
 */
