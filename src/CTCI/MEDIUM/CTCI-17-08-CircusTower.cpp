//
// Created by ZiqianCheng on 2021/6/7.
//

// MEDIUM https://leetcode-cn.com/problems/circus-tower-lcci/

/*
 * A circus is designing a tower routine consisting of people standing atop one another's shoulders.
 * For practical and aesthetic reasons, each person must be both shorter and lighter than the person below him or her.
 * Given the heights and weights of each person in the circus,
 * write a method to compute the largest possible number of people in such a tower.

Example:

Input: height = [65,70,56,75,60,68] weight = [100,150,90,190,95,110]
Output: 6
Explanation: The longest tower is length 6 and includes from top to bottom: (56,90), (60,95), (65,100), (68,110), (70,150), (75,190)
Note:

height.length == weight.length <= 10000
 */

#include <vector>
using namespace std;
class Solution {
  using P = pair<int, int>;
public:
  int bestSeqAtIndex(vector<int>& height, vector<int>& weight) {
    vector<P> people;
    int n = height.size();
    for (int i = 0; i < n; ++i) {
      people.emplace_back(make_pair(height[i], weight[i]));
    }
    sort(people.begin(), people.end(), [](const P& a, const P& b) {
      return a.first == b.first ? a.second < b.second : a.first > b.first;
    });
    int ans = 1;
    vector<int> top(n);
    top[0] = people[0].second;
    for (int i = 1; i < n; ++i) {
      if (people[i].second < top[ans - 1]) {
        top[ans++] = people[i].second;
      } else {
        int left = 0, right = ans - 1, target = people[i].second;
        while (left <= right) {
          int mid = left + (right - left) / 2;
          if (top[mid] <= target) right = mid - 1;
          else left = mid + 1;
        }
        top[left] = target;
      }
    }
    return ans;
  }
};