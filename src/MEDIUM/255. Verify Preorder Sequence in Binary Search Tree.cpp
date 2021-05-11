// 05/11/2021 MEDIUM

// https://leetcode-cn.com/problems/verify-preorder-sequence-in-binary-search-tree/

/*
Given an array of unique integers preorder, return true if it is the correct preorder traversal sequence of a binary search tree.

 

Example 1:


Input: preorder = [5,2,1,3,6]
Output: true
Example 2:

Input: preorder = [5,2,6,1,3]
Output: false
 

Constraints:

1 <= preorder.length <= 104
1 <= preorder[i] <= 104
All the elements of preorder are unique.
 

Follow up: Could you do it using only constant space complexity?

*/
#include <iostream>
#include <vector>
#include <stack>
using namespace std;
// class Solution {
// public:
//     bool verifyPreorder(vector<int>& preorder) {
//       return check(preorder, 0, preorder.size());
//     }
//     bool check(vector<int>& preorder, int start, int end) {
//       if (start == end) return true;
//       int root = preorder[start];
//       int nextStart = start + 1;
//       while (nextStart < end && preorder[nextStart] < root) nextStart++;
//       for (int i = nextStart; i < end; i++) {
//         if (preorder[i] < root) return false;
//       }
//       return check(preorder, start + 1, nextStart) && check(preorder, nextStart, end);
//     }
// };

class Solution {
public:
    bool verifyPreorder(vector<int>& preorder) {
      int n = preorder.size();
      stack<int> s;
      int root = INT_MIN;
      for (int i = 0; i < n; i++) {
        if (preorder[i] < root) return false;
        while (!s.empty() && s.top() < preorder[i]) {
          root = s.top();
          s.pop();
        }
        s.push(preorder[i]);
      }
      return true;
    }
};

int main() {
  int test[] = {5,2,6,1,3};
  vector<int> v;
  v.insert(v.begin(), test, test + 5);
  Solution s;
  cout << s.verifyPreorder(v) << endl;
  return 0;
}