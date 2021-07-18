//
// Created by ZiqianCheng on 2021/7/8.
//

// MEDIUM https://leetcode-cn.com/problems/lru-cache

/*
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

 

Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
 

Constraints:

1 <= capacity <= 3000
0 <= key <= 104
0 <= value <= 105
At most 2 * 105 calls will be made to get and put.
 */

["LRUCache","put","put","put","put","get","get"]
[[2],[2,1],[1,1],[2,3],[4,1],[1],[2]]

#include <unordered_map>
using namespace std;
struct LRUNode {
  LRUNode* pre, *next;
  int key;
  int val;
  LRUNode() {};
  LRUNode(int key, int val): key(key), val(val) {};
};
class LRUCache {
public:
  int size = 0;
  int capacity;
  LRUNode *head, *tail;
  unordered_map<int, LRUNode*> record;
  LRUCache(int capacity): capacity(capacity) {
    head = new LRUNode();
    tail = new LRUNode();
    head->next = tail;
    tail->pre = head;
  }

  int get(int key) {
    if (!capacity) return -1;
    if (record.count(key)) {
      LRUNode *node = record[key];
      deleteNode(node);
      insertHead(node);
      return node->val;
    }
    else return -1;
  }

  void put(int key, int value) {
    if (!capacity) return;
    if (record.count(key)) {
      LRUNode* findNode = record[key];
      findNode->val = value;
      deleteNode(findNode);
      insertHead(findNode);
      return;
    }
    LRUNode *node = new LRUNode(key, value);
    if (size < capacity) {
      record[key] = node;
      insertHead(node);
      size++;
    } else {
      LRUNode *lastNode = deleteNode(tail->pre);
      insertHead(node);
      record.erase(lastNode->key);
      record[key] = node;
    }
  }

  void insertHead(LRUNode *node) {
    node->next = head->next;
    head->next->pre = node;
    node->pre = head;
    head->next = node;
  }

  void insertTail(LRUNode *node) {
    node->pre = tail->pre;
    tail->pre->next = node;
    node->next = tail;
    tail->pre = node;
  }

  LRUNode *deleteNode(LRUNode *node) {
    node->pre->next = node->next;
    node->next->pre = node->pre;
    return node;
  }
};