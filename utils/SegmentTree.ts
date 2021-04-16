export class SegmentTree<T> {
  private readonly segTree: (T | undefined)[];
  private readonly lazy: (T | undefined)[];
  private readonly size: number;
  private readonly $merge: (a: T, b: T) => T;
  private readonly $update: (oldValue: T, newValue: T, size: number) => T;
  constructor(
    size: number,
    defaultValue: T,
    merge: (a: T, b: T) => T, 
    update: (oldValue: T, newValue: T, size: number) => T,
    ) {
    this.segTree = new Array(4 * size).fill(defaultValue);
    this.lazy = new Array(4 * size);
    this.size = size;
    this.$merge = merge;
    this.$update = update;
  }

  private _build(root: number, L: number, R: number, arr: T[]) {
    if (L === R) return this.segTree[root] = arr[L];
    const mid = (L + R) >> 1;
    this._build(root << 1, L, mid, arr);
    this._build(root << 1 | 1, mid + 1, R, arr);
    this.segTree[root] = this.$merge(this.segTree[root << 1], this.segTree[root << 1 | 1]);
  }

  private pushDown(root: number, L: number, R: number) {
    if (this.lazy[root] !== undefined) {
      const mid = (L + R) >> 1;
      this.segTree[root << 1] = this.$update(this.segTree[root << 1], this.lazy[root], mid - L + 1);
      this.segTree[root << 1 | 1] = this.$update(this.segTree[root << 1 | 1], this.lazy[root], R - mid);
      this.lazy[root << 1] = this.lazy[root];
      this.lazy[root << 1 | 1] = this.lazy[root];
      this.lazy[root] = undefined;
    }
  }

  private _query(root: number, L: number, R: number, QL: number, QR: number): T {
    if (QL <= L && R <= QR) return this.segTree[root];
    const mid = (L + R) >> 1;
    this.pushDown(root, L, R);
    let lv, rv
    if (QL <= mid) lv = this._query(root << 1, L, mid, QL, QR);
    if (QR > mid) rv = this._query(root << 1 | 1, mid + 1, R, QL, QR);
    if (lv === undefined) return rv;
    if (rv === undefined) return lv;
    return this.$merge(lv, rv);
  }

  private _update(root: number, L: number, R: number, UL: number, UR: number, val: T): void {
    if (UL <= L && R <= UR) {
      this.segTree[root] = this.$update(this.segTree[root], val, R - L + 1);
      this.lazy[root] = val;
      return;
    }
    this.pushDown(root, L, R);
    const mid = (L + R) >> 1;
    if (UL <= mid) this._update(root << 1, L, mid, UL, UR, val);
    if (UR > mid) this._update(root << 1 | 1, mid + 1, R, UL, UR, val);
    this.segTree[root] = this.$merge(this.segTree[root << 1], this.segTree[root << 1 | 1]);
  }

  public init(values: T[]) {
    if (values.length > this.size) throw new Error('need match size');
    this._build(1, 0, this.size - 1, values);
  }

  public query(L: number, R: number): T | undefined {
    if (L < 0 || R >= this.size) return undefined;
    return this._query(1, 0, this.size - 1, L, R);
  }

  public update(L: number, R: number, newValue: T) {
    if (L < 0 || R >= this.size) return;
    this._update(1, 0, this.size - 1, L, R, newValue);
  }
}
