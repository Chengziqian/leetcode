//
// Created by ZiqianCheng on 2021/7/7.
//

// MEDIUM https://leetcode-cn.com/problems/longest-consecutive-sequence/

/*
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
 */

#include <vector>
#include <unordered_map>
using namespace std;
class Solution {
public:
  int longestConsecutive(vector<int>& nums) {
    int n = nums.size();
    vector<int> parent(n);
    vector<int> size(n, 1);
    function<int(int)> find = [&](int x) -> int {
      return parent[x] == x ? x : parent[x] = find(parent[x]);
    };
    auto unionNode = [&](int x, int y) -> void {
      int px = find(x);
      int py = find(y);
      if (px == py) return;
      else {
        parent[px] = py;
        size[py] += size[px];
      }
    };
    unordered_map<int, int> rc;
    int ans = 0;
    for (int i = 0; i < n; ++i) {
      parent[i] = i;
      rc[nums[i]] = i;
    }
    for (int i = 0; i < n; ++i) {
      int cur = nums[i];
      if (rc.count(cur - 1)) unionNode(rc[cur], rc[cur - 1]);
      if (rc.count(cur + 1)) unionNode(rc[cur], rc[cur + 1]);
      ans = max(ans, size[find(rc[cur])]);
    }
    return ans;
  }
};