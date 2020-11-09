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

class AllOne {
  private map: { [Key: string]: number } = {}
  private count: { [Key: number]: string[] } = {}
  private maxValueKey: string;
  private maxValue: number;
  private minValue: number;
  private minValueKey: string;
  constructor() {
    this.maxValue = Number.MIN_SAFE_INTEGER;
    this.minValue = Number.MAX_SAFE_INTEGER;
    this.maxValueKey = '';
    this.minValueKey = '';
  }

  inc(key: string): void {
    if (!this.map[key]) {
      this.map[key] = 1;
    } else {
      this.map[key]++;
    }
    this.updateMaxAndMin(key);
  }

  dec(key: string): void {
    if (this.map[key]) {
      this.map[key]--;
      this.updateMaxAndMin(key);
    }
  }
  
  updateMaxAndMin(key: string) {
    if (!this.count[this.map[key]]) {
      this.count[this.map[key]] = [key]
    } else {
      this.count[this.map[key]].push(key);
    }
    if (this.map[key] < this.minValue) {
      this.minValue = this.map[key];
    }
    if (this.map[key] > this.maxValue) {
      this.maxValue = this.map[key];
    }
    this.maxValueKey = this.count[this.maxValue][0] || '';
    this.minValueKey = this.count[this.minValue][0] || '';
  }

  getMaxKey(): string {
    return this.maxValueKey;
  }

  getMinKey(): string {
    return this.minValueKey;
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
