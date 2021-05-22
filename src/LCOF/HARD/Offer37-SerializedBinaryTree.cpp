// 05/19/2021 HARD

// https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof/

/*
你可以将以下二叉树：

    1
   / \
  2   3
     / \
    4   5

序列化为 "[1,2,3,null,null,4,5]"

*/

#include <queue>
#include <string>
using namespace std;
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Codec {
public:
  // Encodes a tree to a single string.
  string serialize(TreeNode *root) {
    string ans = "[";
    vector<string> nodeList;
    queue<TreeNode *> q;
    q.push(root);
    while (!q.empty()) {
      TreeNode *cur = q.front();
      q.pop();
      if (cur == NULL)
        nodeList.push_back("null");
      else {
        nodeList.push_back(to_string(cur->val));
        q.push(cur->left);
        q.push(cur->right);
      }
    }
    int end = nodeList.size() - 1;
    while (end >= 0 && nodeList[end] == "null")
      end--;
    for (int i = 0; i <= end; ++i) {
      ans += (i == 0 ? "" : ",") + nodeList[i];
    }
    ans += "]";
    return ans;
  }

  // Decodes your encoded data to tree.
  TreeNode *deserialize(string data) {
    vector<string> nodeList;
    int n = data.size();
    string cur = "";
    for (int i = 1; i < n - 1; ++i) {
      if (data[i] == ',') {
        nodeList.push_back(cur);
        cur = "";
      } else {
        cur += data[i];
      }
    }
    if (cur.size())
      nodeList.push_back(cur);
    if (!nodeList.size())
      return NULL;
    int index = 0;
    TreeNode *root = new TreeNode(stoi(nodeList[index++]));
    queue<TreeNode *> q;
    q.push(root);
    while (!q.empty()) {
      TreeNode *cur = q.front();
      q.pop();
      cur->left = index >= nodeList.size() || nodeList[index] == "null"
                      ? NULL
                      : new TreeNode(stoi(nodeList[index]));
      index++;
      cur->right = index >= nodeList.size() || nodeList[index] == "null"
                       ? NULL
                       : new TreeNode(stoi(nodeList[index]));
      index++;
      if (cur->left)
        q.push(cur->left);
      if (cur->right)
        q.push(cur->right);
    }
    return root;
  }
};

// Your Codec object will be instantiated and called as such:
// Codec codec;
// codec.deserialize(codec.serialize(root));