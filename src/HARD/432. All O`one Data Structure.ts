// 09/27/2020 HARD

// https://leetcode-cn.com/problems/all-oone-data-structure/


/**
 * 
 * Implement a data structure supporting the following operations:

 Inc(Key) - Inserts a new key with value 1. Or increments an existing key by 1. Key is guaranteed to be a non-empty string.
 Dec(Key) - If Key's value is 1, remove it from the data structure. Otherwise decrements an existing key by 1. If the key does not exist, this function does nothing. Key is guaranteed to be a non-empty string.
 GetMaxKey() - Returns one of the keys with maximal value. If no element exists, return an empty string "".
 GetMinKey() - Returns one of the keys with minimal value. If no element exists, return an empty string "".
 Challenge: Perform all these in O(1) time complexity.
 
 */
import { DoubleListNode } from '../../utils/index';
interface NodeData {
  keys: Map<string, boolean>
  value: number
}
class AllOne {
  private key2value: Map<string, number>;
  private value2keys: Map<number, DoubleListNode<NodeData>>;
  private readonly head: DoubleListNode<NodeData>;
  private readonly tail: DoubleListNode<NodeData>;
  constructor() {
    this.key2value = new Map<string, number>();
    this.value2keys = new Map<number, DoubleListNode<NodeData>>();
    this.head = new DoubleListNode<NodeData>();
    this.tail = new DoubleListNode<NodeData>();
    this.head.next = this.tail;
    this.tail.pre = this.head;
  }

  inc(key: string): void {
    if (this.key2value.has(key)) {
      const value = this.key2value.get(key);
      this.key2value.set(key, value + 1);
      const oldNode = this.value2keys.get(value);
      oldNode.value.keys.delete(key);
      if (oldNode.next === this.tail || oldNode.next.value.value > value + 1) {
        const newNode = new DoubleListNode<NodeData>({
          keys: new Map<string, boolean>(),
          value: value + 1
        });
        newNode.value.keys.set(key, true);
        newNode.next = oldNode.next;
        newNode.pre = oldNode;
        oldNode.next.pre = newNode;
        oldNode.next = newNode;
        this.value2keys.set(value + 1, newNode);
      } else {
        oldNode.next.value.keys.set(key, true);
      }
      if (!oldNode.value.keys.size) {
        oldNode.pre.next = oldNode.next;
        oldNode.next.pre = oldNode.pre;
        this.value2keys.delete(value);
      }
    } else {
      this.key2value.set(key, 1);
      if (!this.value2keys.has(1)) {
        const newNode = new DoubleListNode<NodeData>({
          keys: new Map<string, boolean>(),
          value: 1,
        });
        newNode.value.keys.set(key, true);
        newNode.next = this.head.next;
        newNode.pre = this.head;
        this.head.next.pre = newNode;
        this.head.next = newNode;
        this.value2keys.set(1, newNode)
      } else {
        this.value2keys.get(1).value.keys.set(key, true);
      }
    }
  }

  dec(key: string): void {
    if (this.key2value.has(key)) {
      const value = this.key2value.get(key);
      const oldNode = this.value2keys.get(value);
      oldNode.value.keys.delete(key);
      if (value === 1) {
        this.key2value.delete(key);
      } else {
        this.key2value.set(key, value - 1);
        if (oldNode.pre === this.head || oldNode.pre.value.value < value - 1) {
          const newNode = new DoubleListNode<NodeData>({
            keys: new Map<string, boolean>(),
            value: value - 1
          });
          newNode.value.keys.set(key, true);
          newNode.next = oldNode;
          newNode.pre = oldNode.pre;
          oldNode.pre.next = newNode;
          oldNode.pre = newNode;
          this.value2keys.set(value - 1, newNode);
        } else {
          oldNode.pre.value.keys.set(key, true);
        } 
      }
      if (!oldNode.value.keys.size) {
        oldNode.pre.next = oldNode.next;
        oldNode.next.pre = oldNode.pre;
        this.value2keys.delete(value);
      }
    }
  }

  getMaxKey(): string {
    if (this.tail.pre === this.head) return '';
    return this.tail.pre.value.keys.keys().next().value;
  }

  getMinKey(): string {
    if (this.head.next === this.tail) return '';
    return this.head.next.value.keys.keys().next().value;
  }
}

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
