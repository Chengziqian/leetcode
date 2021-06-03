//
// Created by 程子骞 on 2021/5/23.
//

// HARD https://leetcode-cn.com/problems/maximum-xor-with-an-element-from-array/

/*
 * You are given an array nums consisting of non-negative integers. You are also given a queries array, where queries[i] = [xi, mi].

The answer to the ith query is the maximum bitwise XOR value of xi and any element of nums that does not exceed mi. In other words, the answer is max(nums[j] XOR xi) for all j such that nums[j] <= mi. If all elements in nums are larger than mi, then the answer is -1.

Return an integer array answer where answer.length == queries.length and answer[i] is the answer to the ith query.

 

Example 1:

Input: nums = [0,1,2,3,4], queries = [[3,1],[1,3],[5,6]]
Output: [3,3,7]
Explanation:
1) 0 and 1 are the only two integers not greater than 1. 0 XOR 3 = 3 and 1 XOR 3 = 2. The larger of the two is 3.
2) 1 XOR 2 = 3.
3) 5 XOR 2 = 7.
Example 2:

Input: nums = [5,2,4,6,6,3], queries = [[12,4],[8,1],[6,3]]
Output: [15,-1,5]
 

Constraints:

1 <= nums.length, queries.length <= 105
queries[i].length == 2
0 <= nums[j], xi, mi <= 109
 * */

#include <vector>
using namespace std;
typedef tuple<int, int, int> P;
struct TrieNode {
  TrieNode* child[2];
};
class Solution {
public:
  vector<int> maximizeXor(vector<int>& nums, vector<vector<int>>& queries) {
    sort(nums.begin(), nums.end());
    vector<P> sortedQuery;
    TrieNode* root = new TrieNode();
    for (int i = 0; i < queries.size(); i++) {
      sortedQuery.push_back(make_tuple(queries[i][0], queries[i][1], i));
    }
    sort(sortedQuery.begin(), sortedQuery.end(), [](const P& a, const P& b) { return get<1>(a) < get<1>(b); });
    int index = 0;
    vector<int> ans(queries.size());
    for (auto q: sortedQuery) {
      int x, m, i;
      tie(x, m, i) = q;
      while (index < nums.size() && nums[index] <= m) {
        insert(root, nums[index]);
        index++;
      }
      ans[i] = index == 0 ? -1 : query(root, x);
    }
    return ans;
  }

  void insert(TrieNode* root, int value) {
    TrieNode* p = root;
    for (int i = 30; i >= 0; --i) {
      if (value & (1 << i)) {
        if (!p->child[1]) p->child[1] = new TrieNode();
        p = p->child[1];
      } else {
        if (!p->child[0]) p->child[0] = new TrieNode();
        p = p->child[0];
      }
    }
  }

  int query(TrieNode* root, int value) {
    TrieNode* p = root;
    int ans = 0;
    for (int i = 30; i >= 0; --i) {
      if (value & (1 << i)) {
        if (p->child[0]) {
          p = p->child[0];
          ans |= (1 << i);
        }
        else p = p->child[1];
      } else {
        if (p->child[1]) {
          p = p->child[1];
          ans |= (1 << i);
        }
        else p = p->child[0];
      }
    }
    return ans;
  }
};