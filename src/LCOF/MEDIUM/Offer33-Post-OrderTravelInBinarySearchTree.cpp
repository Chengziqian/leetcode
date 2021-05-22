// 05/19/2021 MEDIUM

// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/

#include <stack>
#include <vector>
using namespace std;
class Solution {
public:
  bool verifyPostorder(vector<int> &postorder) {
    stack<int> s;
    int n = postorder.size();
    int root = INT_MAX;
    for (int i = n - 1; i >= 0; --i) {
      if (postorder[i] > root)
        return false;
      while (!s.empty() && s.top() > postorder[i]) {
        root = s.top();
        s.pop();
      }
      s.push(postorder[i]);
    }
    return true;
  }
};