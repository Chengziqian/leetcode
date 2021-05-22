//
// Created by ZiqianCheng on 2021/5/21.
//

// MEDIUM https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/

#include <string>
#include <vector>
#include <iostream>
using namespace std;
class Solution {
public:
  string minNumber(vector<int>& nums) {
    sort(nums.begin(), nums.end(), [](const int& a, const int& b) {
      string strA = to_string(a);
      string strB = to_string(b);
      return strA + strB < strB + strA;
    });
    string ans = "";
    for (auto num: nums) {
      ans += to_string(num);
    }
    return ans;
  }
};

int main() {
  Solution s;
  vector<int> t{3, 30};
  s.minNumber(t);
  return 0;
}