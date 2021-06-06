//
// Created by ZiqianCheng on 2021/6/1.
//

// MEDIUM https://leetcode-cn.com/problems/search-rotate-array-lcci/

/*
 * Given a sorted array of n integers that has been rotated an unknown number of times,
 * write code to find an element in the array. You may assume that the array was originally sorted in increasing order.
 * If there are more than one target elements in the array, return the smallest index.

Example1:

 Input: arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], target = 5
 Output: 8 (the index of 5 in the array)
Example2:

 Input: arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], target = 11
 Output: -1 (not found)
Note:

1 <= arr.length <= 1000000
 */

#include <vector>
#include <iostream>
using namespace std;
class Solution {
public:
  int search(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    if (target == arr[0]) return 0;
    while(right >= 0 && arr[right] == arr[0]) right--;
    while (left <= right) {
      int mid = (left + right) / 2;
      if (target > arr[0]) {
        if (arr[mid] >= arr[0]) {
          if (arr[mid] >= target) right = mid - 1;
          else left = mid + 1;
        } else {
          right = mid - 1;
        }
      } else {
        if (arr[mid] < arr[0]) {
          if (arr[mid] >= target) right = mid - 1;
          else left = mid + 1;
        } else {
          left = mid + 1;
        }
      }
    }
    return left >= arr.size() || arr[left] != target ? -1 : left;
  }
};

int main() {
  vector<int> t = {15, 15, 15, 16, 19, 20, 25, 25, 1, 3, 4, 5, 7, 10, 14, 15, 15};
  vector<int> t2 = {15, 15, 15, 14,14,14,14,15};
  Solution s;
  cout << s.search(t, 5) << endl;
  cout << s.search(t, 11) << endl;
  cout << s.search(t, 1) << endl;
  cout << s.search(t, 25) << endl;
  cout << s.search(t2, 14) << endl;
  return 0;
}