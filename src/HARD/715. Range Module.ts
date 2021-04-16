// 04/16/2021 HARD

// https://leetcode-cn.com/problems/range-module/

/*
A Range Module is a module that tracks ranges of numbers. 
Your task is to design and implement the following interfaces in an efficient manner.

addRange(int left, int right) Adds the half-open interval [left, right), 
tracking every real number in that interval. 
Adding an interval that partially overlaps with currently tracked numbers 
should add any numbers in the interval [left, right) that are not already tracked.
queryRange(int left, int right) 
Returns true if and only if every real number in the interval [left, right) is currently being tracked.
removeRange(int left, int right) Stops tracking every real number currently being tracked in the interval [left, right).
Example 1:
addRange(10, 20): null
removeRange(14, 16): null
queryRange(10, 14): true (Every number in [10, 14) is being tracked)
queryRange(13, 15): false (Numbers like 14, 14.03, 14.17 in [13, 15) are not being tracked)
queryRange(16, 17): true (The number 16 in [16, 17) is still being tracked, despite the remove operation)
Note:

A half open interval [left, right) denotes all real numbers left <= x < right.
0 < left < right < 10^9 in all calls to addRange, queryRange, removeRange.
The total number of calls to addRange in a single test case is at most 1000.
The total number of calls to queryRange in a single test case is at most 5000.
The total number of calls to removeRange in a single test case is at most 1000.

 */

class RangeModule {
  private segTree: DynamicSegmentTree;
  constructor() {
    this.segTree = new DynamicSegmentTree(0, 1e9, null, null, false);
  }

  addRange(left: number, right: number): void {
    this.segTree.update(left, right - 1, true);
  }

  queryRange(left: number, right: number): boolean {
    return this.segTree.query(left, right - 1);
  }

  removeRange(left: number, right: number): void {
    this.segTree.update(left, right - 1, false);
  }
}

class DynamicSegmentTree {
  private readonly L: number;
  private readonly R: number;
  private left: DynamicSegmentTree;
  private right: DynamicSegmentTree;
  private track: boolean;
  private lazy: boolean | undefined;
  constructor(L: number, R: number, left: DynamicSegmentTree, right: DynamicSegmentTree, track: boolean) {
    this.L = L;
    this.R = R;
    this.left = left;
    this.right = right;
    this.track = track;
    this.lazy = undefined;
  }
  
  private pushDown() {
    if (!this.left) {
      const mid = (this.R + this.L) >> 1;
      this.left = new DynamicSegmentTree(this.L, mid, null, null, this.track);
      this.right = new DynamicSegmentTree(mid + 1, this.R, null, null, this.track);
    }
    if (this.lazy !== undefined) {
      this.left.track = this.right.track = this.lazy;
      this.left.lazy = this.right.lazy = this.lazy;
      this.lazy = undefined;
    }
  }
  
  public setTrack(track: boolean) {
    this.track = track;
  }
  
  public query(QL: number, QR: number): boolean {
    if (QL <= this.L && this.R <= QR) return this.track;
    this.pushDown();
    const mid = (this.R + this.L) >> 1;
    let ans = true;
    if (QL <= mid) ans = ans && this.left.query(QL, QR);
    if (QR > mid) ans = ans && this.right.query(QL, QR);
    return ans;
  }
  
  public update(UL: number, UR: number, track: boolean): void {
    if (UL <= this.L && this.R <= UR) {
      this.lazy = track;
      return this.setTrack(track);
    }
    this.pushDown();
    const mid = (this.R + this.L) >> 1;
    if (UL <= mid) this.left.update(UL, UR, track);
    if (UR > mid) this.right.update(UL, UR, track);
    this.setTrack(this.left.track && this.right.track);
  }
}

/**
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */
