//
// Created by ZiqianCheng on 2021/5/29.
//


#include <vector>
#include <string>
using namespace std;

struct TrieNode {
  TrieNode* children[10] = {NULL};
  bool tail = false;
};
struct TreeNode {
  int value;
  vector<TreeNode*> children;
};
class Solution {
private:
  TrieNode* trieTree = new TrieNode();
public:
  TreeNode* buildTree(vector<int>& nums) {
    for (auto n: nums) insert(to_string(n)); // 插入字典树
    return mergeTree(trieTree, 0, 0); // 合并节点路径
  }

  void insert(string&& str) {
    TrieNode* p = trieTree;
    for (auto c: str) {
      if (!p->children[c - '0']) p->children[c - '0'] = new TrieNode();
      p = p->children[c - '0'];
    }
    p->tail = true; // 标记为结尾
  }
  /**
   * @param trieNode 当前节点
   * @param current 当前位的数字
   * @param prefix 高位前缀
   */
  TreeNode* mergeTree(TrieNode* trieNode, int current, int prefix) {
    // 记录已经合并路径完成的子节点
    vector<TreeNode*> children;
    // 遍历子节点
    for (int i = 0; i < 10; ++i) {
      if (trieNode->children[i]) {
        children.push_back(mergeTree(trieNode->children[i], i, prefix * 10 + current));
      }
    }
    // 经过当前节点只有一条路径并且当前节点不是结尾，返回下层已经合并的子节点
    if (children.size() == 1 && !trieNode->tail) {
      return children.front();
    } else {
      // 多条路径，记录子节点
      TreeNode* node = new TreeNode();
      node->children.assign(children.begin(), children.end());
      // 当前节点为结尾，赋值value
      if (trieNode->tail) {
        node->value = prefix * 10 + current;
      }
      return node;
    }
  }
};

int main() {
  vector<int> nums{101,1011,10111,1012,1013,1014,1015,10121,10122,10123,101221,101222,10151};
  Solution s;
  TreeNode* tree = s.buildTree(nums);
  return 0;
}