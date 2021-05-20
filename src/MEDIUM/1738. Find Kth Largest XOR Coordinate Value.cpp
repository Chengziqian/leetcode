// 05/19/2021 MEDIUM

// https://leetcode-cn.com/problems/find-kth-largest-xor-coordinate-value/

/*
You are given a 2D matrix of size m x n, consisting of non-negative integers. You are also given an integer k.

The value of coordinate (a, b) of the matrix is the XOR of all matrix[i][j] where 0 <= i <= a < m and 0 <= j <= b < n (0-indexed).

Find the kth largest value (1-indexed) of all the coordinates of matrix.

 

Example 1:

Input: matrix = [[5,2],[1,6]], k = 1
Output: 7
Explanation: The value of coordinate (0,1) is 5 XOR 2 = 7, which is the largest value.
Example 2:

Input: matrix = [[5,2],[1,6]], k = 2
Output: 5
Explanation: The value of coordinate (0,0) is 5 = 5, which is the 2nd largest value.
Example 3:

Input: matrix = [[5,2],[1,6]], k = 3
Output: 4
Explanation: The value of coordinate (1,0) is 5 XOR 1 = 4, which is the 3rd largest value.
Example 4:

Input: matrix = [[5,2],[1,6]], k = 4
Output: 0
Explanation: The value of coordinate (1,1) is 5 XOR 2 XOR 1 XOR 6 = 0, which is the 4th largest value.
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 1000
0 <= matrix[i][j] <= 106
1 <= k <= m * n

*/

#include <vector>
#include <queue>
using namespace std;
class Solution {
public:
    int kthLargestValue(vector<vector<int>>& matrix, int k) {
      int row = matrix.size();
      int col = matrix[0].size();
      vector<vector<int>> sum(row + 1, vector<int>(col + 1, 0));
      priority_queue<int, vector<int>, less<int>> q; 
      for (int i = 0; i < row; ++i) {
        for (int j = 0; j < col; ++j) {
          sum[i + 1][j + 1] = sum[i][j + 1] ^ sum[i + 1][j] ^ sum[i][j] ^ matrix[i][j];
          q.push(sum[i + 1][j + 1]);
          if (q.size() > row * col - k + 1) q.pop();
        }
      }
      return q.top();
    }

    // int quickFind(int k, vector<int>& nums, int left, int right) {
    //   int i = left, j = right;
    //   int p = nums[i];
    //   while (i < j) {
    //     while (j > i && nums[j] >= p) j--;
    //     if (j > i) {
    //       swap(nums[j], nums[i]);
    //       i++;
    //     }
    //     while (i < j && nums[i] <= p) i++;
    //     if (j > i) {
    //       swap(nums[j], nums[i]);
    //       j--;
    //     }
    //   }
    //   if (i - left + 1 == k) return p;
    //   else if (i - left + 1 < k) return quickFind(k - i + left - 1, nums, i + 1, right);
    //   else return quickFind(k, nums, left, i - 1);
    // }
};