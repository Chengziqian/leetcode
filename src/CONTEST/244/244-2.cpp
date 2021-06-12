//
// Created by 程子骞 on 2021/6/6.
//

#include <vector>
#include <unordered_set>
using namespace std;

class Solution {
public:
  int reductionOperations(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    unordered_set<int> count;
    int ans = 0;
    for (int i = 0; i + 1 < nums.size(); ++i) {
      ans += count.size();
      if (nums[i] != nums[i + 1]) count.insert(nums[i]);
    }
    ans += count.size();
    return ans;
  }
};