//
// Created by ZiqianCheng on 2021/5/25.
//

// EASY https://leetcode-cn.com/problems/remove-duplicate-node-lcci/

/*
 * Write code to remove duplicates from an unsorted linked list.

Example1:

 Input: [1, 2, 3, 3, 2, 1]
 Output: [1, 2, 3]
Example2:

 Input: [1, 1, 1, 1, 2]
 Output: [1, 2]
Note:

The length of the list is within the range[0, 20000].
The values of the list elements are within the range [0, 20000].
Follow Up:

How would you solve this problem if a temporary buffer is not allowed?

 */


#include <unordered_set>
using namespace std;
struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};
class Solution {
public:
  ListNode* removeDuplicateNodes(ListNode* head) {
    unordered_set<int> rc;
    ListNode* cur = head;
    ListNode* pre = NULL;
    while (cur) {
      if (rc.count(cur->val)) {
        pre->next = cur->next;
        cur = cur->next;
      } else {
        rc.insert(cur->val);
        pre = cur;
        cur = cur->next;
      }
    }
    return head;
  }
};