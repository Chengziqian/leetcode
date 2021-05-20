// 05/17/2021 EASY

// https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/

/*
--> head = [1,3,2]
<-- [2,3,1]
*/


#include <vector>
using namespace std;
struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};
class Solution {
public:
    vector<int> reversePrint(ListNode* head) {
      vector<int> ans;
      help(head, ans);
      return ans;
    }
    void help(ListNode* head, vector<int>& ans) {
      if (!head) return;
      help(head->next, ans);
      ans.push_back(head->val);
    }
};