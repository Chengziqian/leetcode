// 05/18/2021 EASY

// https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/

#include <vector>
using namespace std;
class Solution {
public:
    vector<int> printNumbers(int n) {
      int max = 1;
      vector<int> ans;
      for (int i = 0; i < n; i++) {
        max *= 10;
      }
      for (int i = 1; i < max; i++) {
        ans.push_back(i);
       }
      return ans;
    }
};