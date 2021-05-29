//
// Created by ZiqianCheng on 2021/5/27.
//

// HARD https://leetcode-cn.com/problems/maximum-number-of-events-that-can-be-attended-ii/

/*
 * You are given an array of events where events[i] = [startDayi, endDayi, valuei]. The ith event starts at startDayi and ends at endDayi, and if you attend this event, you will receive a value of valuei. You are also given an integer k which represents the maximum number of events you can attend.

You can only attend one event at a time. If you choose to attend an event, you must attend the entire event. Note that the end day is inclusive: that is, you cannot attend two events where one of them starts and the other ends on the same day.

Return the maximum sum of values that you can receive by attending events.

 

Example 1:



Input: events = [[1,2,4],[3,4,3],[2,3,1]], k = 2
Output: 7
Explanation: Choose the green events, 0 and 1 (0-indexed) for a total value of 4 + 3 = 7.
Example 2:



Input: events = [[1,2,4],[3,4,3],[2,3,10]], k = 2
Output: 10
Explanation: Choose event 2 for a total value of 10.
Notice that you cannot attend any other event as they overlap, and that you do not have to attend k events.
Example 3:



Input: events = [[1,1,1],[2,2,2],[3,3,3],[4,4,4]], k = 3
Output: 9
Explanation: Although the events do not overlap, you can only attend 3 events. Pick the highest valued three.
 

Constraints:

1 <= k <= events.length
1 <= k * events.length <= 106
1 <= startDayi <= endDayi <= 109
1 <= valuei <= 106

 */

#include <vector>
using namespace std;
class Solution {
public:
  int maxValue(vector<vector<int>>& events, int k) {
    sort(events.begin(), events.end(), [](const vector<int>& a, const vector<int>& b) { return a[1] < b[1]; });
    int n = events.size();
    vector<vector<int>> dp(n + 1, vector<int>(k + 1, 0));
    for (int i = 1; i <= n; ++i) {
      int left = 0, right = i - 1;
      int startTime = events[i - 1][0];
      int value = events[i - 1][2];
      while (left <= right) {
        int mid = (left + right) / 2;
        if (events[mid][1] >= startTime) right = mid - 1;
        else left = mid + 1;
      }
      for (int j = 1; j <= k; ++j) {
        dp[i][j] = max(dp[i - 1][j], dp[right + 1][j - 1] + value);
      }
    }
    return dp[n][k];
  }
};

[[1,2,4],[2,3,1],[3,4,3]]
2