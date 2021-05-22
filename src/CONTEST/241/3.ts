class FindSumPairs {
  private nums1: number[];
  private nums2: number[];
  private rc: Map<number, number>;
  constructor(nums1: number[], nums2: number[]) {
    this.nums1 = nums1;
    this.nums2 = nums2;
    this.rc = new Map<number, number>();
    for (let i = 0; i < nums2.length; i++) {
      if (!this.rc.has(nums2[i])) {
        this.rc.set(nums2[i], 1);
      } else {
        this.rc.set(nums2[i], this.rc.get(nums2[i]) + 1);
      }
    }
  }

  add(index: number, val: number): void {
    const origin = this.nums2[index];
    const current = this.nums2[index] + val;
    this.rc.set(origin, this.rc.get(origin) - 1);
    if (!this.rc.has(current)) {
      this.rc.set(current, 1);
    } else {
      this.rc.set(current, this.rc.get(current) + 1);
    }
    this.nums2[index] = current;
  }

  count(tot: number): number {
    let ans = 0;
    for (let i = 0; i < this.nums1.length; i++) {
      if (this.rc.has(tot - this.nums1[i])) ans += this.rc.get(tot - this.nums1[i]);
    }
    return ans;
  }
}

/**
* Your FindSumPairs object will be instantiated and called as such:
* var obj = new FindSumPairs(nums1, nums2)
* obj.add(index,val)
* var param_2 = obj.count(tot)
*/