// 03/13/2021 EASY

// https://leetcode-cn.com/problems/design-hashset/


/*
Design a HashSet without using any built-in hash table libraries.

Implement MyHashSet class:

void add(key) Inserts the value key into the HashSet.
bool contains(key) Returns whether the value key exists in the HashSet or not.
void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
 

Example 1:

Input
["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
[[], [1], [2], [1], [3], [2], [2], [2], [2]]
Output
[null, null, null, true, false, null, true, null, false]

Explanation
MyHashSet myHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(1); // return True
myHashSet.contains(3); // return False, (not found)
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(2); // return True
myHashSet.remove(2);   // set = [1]
myHashSet.contains(2); // return False, (already removed)
 

Constraints:

0 <= key <= 106
At most 104 calls will be made to add, remove, and contains.

*/
namespace HaseSet {
  interface HashNode {
    key: number
    next: HashNode
  }
  class MyHashSet {
    private list: HashNode[];
    constructor() {
      this.list = new Array(10000);
    }
  
    hash(key: number) {
      return key % 10000;
    }
  
    add(key: number): void {
      const hash = this.hash(key);
      if (!this.list[hash]) {
        this.list[hash] = {
          key,
          next: null
        }
      } else {
        let current = this.list[hash];
        while (current.next) {
          if (current.key === key) return;
          current = current.next;
        }
        if (current.key === key) return;
        current.next = {
          key,
          next: null
        }
      }
    }
  
    remove(key: number): void {
      const hash = this.hash(key);
      if (!this.list[hash]) return;
      let dummy = { key: -1, next: this.list[hash] }
      let current = dummy.next;
      let pre = dummy;
      while (current) {
        if (current.key === key) break;
        pre = current;
        current = current.next;
      }
      if (current) pre.next = current.next;
      this.list[hash] = dummy.next;
    }
  
    contains(key: number): boolean {
      const hash = this.hash(key);
      if (!this.list[hash]) return false;
      let current = this.list[hash];
      while (current) {
        if (current.key === key) return true;;
        current = current.next;
      }
      return false;
    }
  }
}

/**
* Your MyHashSet object will be instantiated and called as such:
* var obj = new MyHashSet()
* obj.add(key)
* obj.remove(key)
* var param_3 = obj.contains(key)
*/

