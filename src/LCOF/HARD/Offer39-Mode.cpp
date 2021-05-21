// 05/19/2021 MEDIUM

// https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/

#include <vector>
#include <iostream>
using namespace std;
class Solution {
public:
  int majorityElement(vector<int> &nums) {
    int count = 0;
    int current = -1;
    for (int i = 0; i < nums.size(); i++) {
      if (count == 0) {
        current = nums[i];
      }
      if (current == nums[i]) count++;
      else count--;
    }
    return current;
  }
};

int main() {
  Solution s;
  vector<int> t({3,3,4});
  cout << s.majorityElement(t) << endl;
  return 0;
}