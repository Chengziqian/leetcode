export class SegmentTree<T> {
  private tree: (T | undefined)[];
  private lazy: (T | undefined)[];
  private size: number;
  private $merge: (a: T, b: T) => T;
  private $update: (oldValue: T, newValue: T, size: number) => T;
  constructor(
    size: number,
    defaultValue: T,
    merge: (a: T, b: T) => T, 
    update: (oldValue: T, newValue: T, size: number) => T,
    ) {
    this.tree = new Array(4 * size).fill(defaultValue);
    this.lazy = new Array(4 * size);
    this.size = size;
    this.$merge = merge;
    this.$update = update;
  }

  private _build(root: number, L: number, R: number, init: T[]) {
    if (L === R) {
      this.tree[root] = init[L];
      return;
    }
    const mid = (L + R) >> 1;
    this._build(root << 1, L, mid, init);
    this._build(root << 1 | 1, mid + 1, R, init);
    this.tree[root] = this.$merge(this.tree[root << 1], this.tree[root << 1 | 1]);
  }

  private _query(L: number, R: number, l: number, r: number, root: number) {
    if (L <= l && r <= R) {
      return this.tree[root];
    }
    const mid = (l + r) >> 1;
    if (this.lazy[root]) {
      this.tree[root << 1] = this.$update(this.tree[root << 1], this.lazy[root], mid - l + 1);
      this.tree[root << 1 | 1] = this.$update(this.tree[root << 1 | 1], this.lazy[root], r - mid);
      this.lazy[root << 1] = this.lazy[root << 1 | 1] = this.lazy[root];
      this.lazy[root] = undefined;
    }
    let leftAns: T, rightAns: T
    if (L <= mid) leftAns = this._query(L, R, l, mid, root << 1);
    if (R > mid) rightAns = this._query(L, R, mid + 1, r, root << 1 | 1);
    if (leftAns === undefined) return rightAns;
    else if (rightAns === undefined) return leftAns;
    else return this.$merge(leftAns, rightAns);
  }
  
  private _update(L: number, R: number, l: number, r: number, root: number, newValue: T) {
    if (L <= l && r <= R) {
      this.tree[root] = this.$update(this.tree[root], newValue, r - l + 1);
      this.lazy[root] = newValue;
      return;
    }
    const mid = (l + r) >> 1;
    if (this.lazy[root] !== undefined) {
      this.tree[root << 1] = this.$update(this.tree[root << 1], this.lazy[root], mid - l + 1);
      this.tree[root << 1 | 1] = this.$update(this.tree[root << 1 | 1], this.lazy[root], r - mid);
      this.lazy[root << 1] = this.lazy[root << 1 | 1] = this.lazy[root];
      this.lazy[root] = undefined;
    }
    if (L <= mid) this._update(L, R, l, mid, root << 1, newValue);
    if (R > mid) this._update(L, R, mid + 1, r, root << 1 | 1, newValue);
    this.tree[root] = this.$merge(this.tree[root << 1], this.tree[root << 1 | 1]);
  }

  public init(values: T[]) {
    if (values.length > this.size) throw new Error('need match size');
    this._build(1, 0, this.size - 1, values);
  }

  public query(L: number, R: number): T | undefined {
    if (L < 0 || R >= this.size) return undefined;
    return this._query(L, R, 0, this.size - 1, 1);
  }

  public update(L: number, R: number, newValue: T) {
    if (L < 0 || R >= this.size) return;
    this._update(L, R, 0, this.size - 1, 1, newValue);
  }
}