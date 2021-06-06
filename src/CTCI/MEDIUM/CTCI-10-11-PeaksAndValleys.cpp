//
// Created by ZiqianCheng on 2021/6/1.
//

// MEDIUM https://leetcode-cn.com/problems/peaks-and-valleys-lcci/

/*
 * In an array of integers,
 * a "peak" is an element which is greater than or equal to the adjacent integers
 * and a "valley" is an element which is less than or equal to the adjacent integers.
 * For example, in the array {5, 8, 4, 2, 3, 4, 6}, {8, 6} are peaks and {5, 2} are valleys.
 * Given an array of integers, sort the array into an alternating sequence of peaks and valleys.

Example:

Input: [5, 3, 1, 2, 3] -> [1,2,3,3,5] -> [1,5,3,2,3]
Output: [5, 1, 3, 2, 3]
Note:

nums.length <= 10000

 */

#include <vector>
using namespace std;
class Solution {
public:
  void wiggleSort(vector<int>& nums) {
    int n = nums.size();
    if (n <= 2) return;
    bool isPeek = nums[0] <= nums[1];
    for (int i = 1; i + 1 < n; ++i) {
      if ((isPeek && nums[i + 1] > nums[i]) || (!isPeek && nums[i + 1] < nums[i])) {
        swap(nums[i + 1], nums[i]);
      }
      isPeek = !isPeek;
    }
  }
};