//
// Created by ZiqianCheng on 2021/5/31.
//

// EASY https://leetcode-cn.com/problems/sorted-merge-lcci/

/*
 * You are given two sorted arrays, A and B, where A has a large enough buffer at the end to hold B. Write a method to merge B into A in sorted order.

Initially the number of elements in A and B are m and n respectively.

Example:

Input:
A = [1,2,3,0,0,0], m = 3
B = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
Note:

A.length == n + m

 */
#include <vector>
using namespace std;
class Solution {
public:
  void merge(vector<int>& A, int m, vector<int>& B, int n) {
    for (int i = m - 1; i >= 0; --i) {
      swap(A[n + i], A[i]);
    }
    int left = n, right = 0;
    int index = 0;
    while (left < n + m || right < n) {
      if (left >= n + m) {
        while (right < n) A[index++] = B[right++];
        break;
      }
      if (right >= n) {
        while (left < n + m) A[index++] = A[left++];
        break;
      }
      if (A[left] < B[right]) {
        A[index++] = A[left++];
      } else {
        A[index++] = B[right++];
      }
    }
  }
};