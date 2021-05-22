// 05/16/2021 MEDIUM

// https://leetcode-cn.com/problems/maximum-xor-of-two-numbers-in-an-array/

/*
Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 ≤ i ≤ j < n.

Follow up: Could you do this in O(n) runtime?

 

Example 1:

Input: nums = [3,10,5,25,2,8]
Output: 28
Explanation: The maximum result is 5 XOR 25 = 28.
Example 2:

Input: nums = [0]
Output: 0
Example 3:

Input: nums = [2,4]
Output: 6
Example 4:

Input: nums = [8,10,2]
Output: 10
Example 5:

Input: nums = [14,70,53,83,49,91,36,80,92,51,66,70]
Output: 127
 

Constraints:

1 <= nums.length <= 2 * 104
0 <= nums[i] <= 231 - 1

*/

#include <vector>
#include <algorithm>
using namespace std;
struct TireNode
{
  TireNode* next[2] = {NULL, NULL};
};

class Solution {
public:
    int findMaximumXOR(vector<int>& nums) {
      TireNode* tree = new TireNode;
      int ans = 0;
      for (int k = 1; k < nums.size(); ++k) {
        TireNode* p = tree;
        for (int i = 30; i >= 0; i--) {
          if (nums[k - 1] & (1 << i)) {
            if (p->next[1] == NULL) p->next[1] = new TireNode;
            p = p->next[1];
          }
          else {
            if (p->next[0] == NULL) p->next[0] = new TireNode;
            p = p->next[0];
          }
        }
        p = tree;
        int current = 0;
        for (int i = 30; i >= 0; i--) {
          if (nums[k] & (1 << i)) {
            if (p->next[0] != NULL) {
              current |= (1 << i);
              p = p->next[0];
            } else {
              p = p->next[1];
            }
          } else {
            if (p->next[1] != NULL) {
              current |= (1 << i);
              p = p->next[1];
            } else {
              p = p->next[0];
            }
          }
        }
        ans = max(ans, current);
      }
      return ans;
    }
};