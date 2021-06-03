//
// Created by ZiqianCheng on 2021/6/1.
//

// MEDIUM https://leetcode-cn.com/problems/rank-from-stream-lcci/

/*
 * Imagine you are reading in a stream of integers. Periodically,
 * you wish to be able to look up the rank of a number x (the number of values less than or equal to x).
 * implement the data structures and algorithms to support these operations.
 * That is, implement the method track (int x), which is called when each number is generated,
 * and the method getRankOfNumber(int x), which returns the number of values less than or equal to x.

Note: This problem is slightly different from the original one in the book.

Example:

Input:
["StreamRank", "getRankOfNumber", "track", "getRankOfNumber"]
[[], [1], [0], [0]]
Output:
[null,0,null,1]
Note:

x <= 50000
The number of calls of both track and getRankOfNumber methods are less than or equal to 2000.

 */

class StreamRank {
private:
  int N = 50002;
  int bit[50002] = {0};
public:
  StreamRank() {
  }

  void track(int x) {
    int index = x + 1;
    while (index < N) {
      bit[index]++;
      index += lowbit(index);
    }
  }

  int getRankOfNumber(int x) {
    int ans = 0;
    int index = x + 1;
    while (index) {
      ans += bit[index];
      index -= lowbit(index);
    }
    return ans;
  }

  int lowbit(int x) {
    return x & (-x);
  }
};

/**
 * Your StreamRank object will be instantiated and called as such:
 * StreamRank* obj = new StreamRank();
 * obj->track(x);
 * int param_2 = obj->getRankOfNumber(x);
 */