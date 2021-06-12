//
// Created by ZiqianCheng on 2021/6/5.
//

// MEDIUM https://leetcode-cn.com/problems/lru-cache-lcci/

/*
 * Design and build a "least recently used" cache, which evicts the least recently used item.
 * The cache should map from keys to values (allowing you to insert and retrieve a value associated with a particular key) and be initialized with a max size.
 * When it is full, it should evict the least recently used item.

You should implement following operations: get and put.

Get a value by key: get(key) - If key is in the cache, return the value, otherwise return -1.
Write a key-value pair to the cache: put(key, value) - If the key is not in the cache, then write its value to the cache.
 Evict the least recently used item before writing if necessary.

Example:

LRUCache cache = new LRUCache( 2 capacity );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4

 */

#include <unordered_map>
using namespace std;
struct DoubleLinkedList {
  int val;
  int key;
  DoubleLinkedList* pre;
  DoubleLinkedList* next;
  DoubleLinkedList(int key, int val): key(key), val(val), pre(nullptr), next(nullptr) {};
};
class LRUCache {
private:
  int capacity;
  int size = 0;
  unordered_map<int, DoubleLinkedList*> record;
  DoubleLinkedList* head;
  DoubleLinkedList* tail;
public:
  LRUCache(int capacity): capacity(capacity) {
    head = new DoubleLinkedList(0, 0);
    tail = new DoubleLinkedList(0, 0);
    head->next = tail;
    tail->pre = head;
  }

  int get(int key) {
    if (capacity == 0) return -1;
    if (record.count(key)) {
      deleteNode(record[key]);
      insertHead(record[key]);
      return record[key]->val;
    } else {
      return -1;
    }
  }

  void put(int key, int value) {
    if (capacity == 0) return;
    if (record.count(key)) {
      deleteNode(record[key]);
      insertHead(record[key]);
      record[key]->val = value;
    } else {
      if (size == capacity) {
        record.erase(tail->pre->key);
        deleteNode(tail->pre);
        size--;
      }
      DoubleLinkedList* newNode = new DoubleLinkedList(key, value);
      record[key] = newNode;
      insertHead(newNode);
      size++;
    }
  }

  void insertHead(DoubleLinkedList* node) {
    node->next = head->next;
    head->next->pre = node;
    head->next = node;
    node->pre = head;
  }

  void deleteNode(DoubleLinkedList* node) {
    node->pre->next = node->next;
    node->next->pre = node->pre;
    node->next = nullptr;
    node->pre = nullptr;
  }
};