// 11/04/2020 HARD

// https://leetcode-cn.com/problems/online-majority-element-in-subarray/

/*

Implementing the class MajorityChecker, which has the following API:

MajorityChecker(int[] arr) constructs an instance of MajorityChecker with the given array arr;
int query(int left, int right, int threshold) has arguments such that:
0 <= left <= right < arr.length representing a subarray of arr;
2 * threshold > right - left + 1, ie. the threshold is always a strict majority of the length of the subarray
Each query(...) returns the element in arr[left], arr[left+1], ..., arr[right] that occurs at least threshold times, or -1 if no such element exists.

 

Example:

MajorityChecker majorityChecker = new MajorityChecker([1,1,2,2,1,1]);
majorityChecker.query(0,5,4); // returns 1
majorityChecker.query(0,3,3); // returns -1
majorityChecker.query(2,3,2); // returns 2
 

Constraints:

1 <= arr.length <= 20000
1 <= arr[i] <= 20000
For each query, 0 <= left <= right < len(arr)
For each query, 2 * threshold > right - left + 1
The number of queries is at most 10000

 */

namespace MajorityChecker {
  class MajorityChecker {
    private segTree: number[][];
    private N: number;
    private rc: Map<number, number[]>;
    constructor(arr: number[]) {
      this.N = arr.length;
      this.segTree = new Array(4 * this.N);
      this.rc = new Map<number, number[]>();
      for (let i = 0; i < arr.length; i++) {
        if (!this.rc.has(arr[i])) {
          this.rc.set(arr[i], []);
        }
        this.rc.get(arr[i]).push(i);
      }
      this._build(1, 0, this.N - 1, arr);
    }

    query(left: number, right: number, threshold: number): number {
      const [major] = this._query(1, 0, this.N - 1, left, right);
      const lowerIndex = this.lowerBound(left, this.rc.get(major));
      const upperIndex = this.upperBound(right, this.rc.get(major));
      return upperIndex - lowerIndex >= threshold ?  major : -1;
    }
    
    private lowerBound(target: number, values: number[]) {
      let left = 0, right = values.length - 1;
      while (left <= right) {
        const mid = left + right >> 1;
        if (values[mid] >= target) right = mid - 1;
        else left = mid + 1;
      }
      return left;
    }
    
    private upperBound(target: number, values: number[]) {
      let left = 0, right = values.length - 1;
      while (left <= right) {
        const mid = left + right >> 1;
        if (values[mid] <= target) left = mid + 1;
        else right = mid - 1;
      }
      return left;
    }
    
    private _build(root: number, L: number, R: number, arr: number[]) {
      if (L === R) {
        this.segTree[root] = [arr[L], 1];
        return;
      }
      const mid = L + R >> 1;
      this._build(root << 1, L, mid, arr);
      this._build(root << 1 | 1, mid + 1, R, arr);
      const [leftMajor, leftCount] = this.segTree[root << 1];
      const [rightMajor, rightCount] = this.segTree[root << 1 | 1];
      if (leftMajor === rightMajor) {
        this.segTree[root] = [leftMajor, leftCount + rightCount];
      } else if (leftCount > rightCount) {
        this.segTree[root] = [leftMajor, leftCount - rightCount];
      } else {
        this.segTree[root] = [rightMajor, rightCount - leftCount];
      }
    }
    
    private _query(root: number, L: number, R: number, QL: number, QR: number): number[] {
      if (QL <= L && R <= QR) return this.segTree[root];
      const mid = L + R >> 1;
      if (mid >= QR) return this._query(root << 1, L, mid, QL, QR);
      else if (mid < QL) return this._query(root << 1 | 1, mid + 1, R, QL, QR);
      else {
        const [leftMajor, leftCount] = this._query(root << 1, L, mid, QL, QR);
        const [rightMajor, rightCount] = this._query(root << 1 | 1, mid + 1, R, QL, QR);
        if (leftMajor === rightMajor) {
          return [leftMajor, leftCount + rightCount];
        } else if (leftCount > rightCount) {
          return [leftMajor, leftCount - rightCount];
        } else {
          return [rightMajor, rightCount - leftCount];
        }
      }
    }
  }
}

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * var obj = new MajorityChecker(arr)
 * var param_1 = obj.query(left,right,threshold)
 */
