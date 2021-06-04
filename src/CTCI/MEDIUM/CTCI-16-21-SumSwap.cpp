//
// Created by ZiqianCheng on 2021/6/4.
//

// MEDIUM https://leetcode-cn.com/problems/sum-swap-lcci/

/*
 * Given two arrays of integers,
 * find a pair of values (one value from each array) that you can swap to give the two arrays the same sum.

Return an array, where the first element is the element in the first array that will be swapped,
 and the second element is another one in the second array.
 If there are more than one answers, return any one of them.
 If there is no answer, return an empty array.

Example:

Input: array1 = [4, 1, 2, 1, 1, 2], array2 = [3, 6, 3, 3]
Output: [1, 3]
Example:

Input: array1 = [1, 2, 3], array2 = [4, 5, 6]
Output: []
Note:
1 <= array1.length, array2.length <= 100000
 */

#include <vector>
using namespace std;
class Solution {
public:
  vector<int> findSwapValues(vector<int>& array1, vector<int>& array2) {
    int sum1 = 0, sum2 = 0;
    for (int n: array1) sum1 += n;
    for (int n: array2) sum2 += n;
    if (sum1 < sum2) swap(array1, array2);
    sort(array2.begin(), array2.end());
    int diff = abs(sum1 - sum2);
    if (diff % 2 != 0) return {};
    for (int i = 0; i < array1.size(); ++i) {
      int num = binarySearch(array2, array1[i] - diff / 2);
      if (num != -1) {
        vector<int> ans = { array1[i], num };
        if (sum1 < sum2) swap(ans[0], ans[1]);
        return ans;
      }
    }
    return {};
  }

  int binarySearch(vector<int>& array, int target) {
    int left = 0, right = array.size() - 1;
    while (left <= right) {
      int mid = (left + right) >> 1;
      if (array[mid] == target) return array[mid];
      else if (array[mid] > target) right = mid - 1;
      else left = mid + 1;
    }
    return -1;
  }
};