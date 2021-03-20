// 03/14/2021 EASY

// https://leetcode-cn.com/problems/design-hashmap/

/*
Design a HashMap without using any built-in hash table libraries.

Implement the MyHashMap class:

MyHashMap() initializes the object with an empty map.
void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
 

Example 1:

Input
["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
Output
[null, null, null, 1, -1, null, 1, null, -1]

Explanation
MyHashMap myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]
 

Constraints:

0 <= key, value <= 106
At most 104 calls will be made to put, get, and remove.
 

Follow up: Please do not use the built-in HashMap library.

*/
namespace MyHashMap {
  interface HashNode {
    key: number
    value: number
    next: HashNode
  }
  class MyHashMap {
    private list: HashNode[];
    constructor() {
      this.list = new Array(10000);
    }
  
    hash(key: number) {
      return key % 10000;
    }
  
    put(key: number, value: number): void {
      const hash = this.hash(key);
      if (!this.list[hash]) {
        this.list[hash] = {
          key,
          value,
          next: null
        }
      } else {
        let current = this.list[hash];
        while (current.next) {
          if (current.key === key) {
            current.value = value;
            return;
          };
          current = current.next;
        }
        if (current.key === key) {
          current.value = value;
          return;
        };
        current.next = {
          key,
          value,
          next: null
        }
      }
    }
  
    get(key: number): number {
      const hash = this.hash(key);
      if (!this.list[hash]) return -1;
      let current = this.list[hash];
      while (current) {
        if (current.key === key) return current.value;;
        current = current.next;
      }
      return -1;
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
  }
}

/**
* Your MyHashMap object will be instantiated and called as such:
* var obj = new MyHashMap()
* obj.put(key,value)
* var param_2 = obj.get(key)
* obj.remove(key)
*/