class BiTNode<T> {
  public left: BiTNode<T> | null;
  public right: BiTNode<T> | null;
  public value: T;
  constructor(value: T) {
    this.value = value;
  }
}

export class BST<T> {
  private root: BiTNode<T>;
  private cmp: (a: T, b: T) => number;
  constructor(cmp: (a: T, b: T) => number) {
    this.cmp = cmp;
  }

  public insert(val: T) {
    if (!this.root) {
      this.root = new BiTNode(val);
      return;
    }
    this.root = this._insert(this.root, val);
  }

  private _insert(root: BiTNode<T>, val: T): BiTNode<T> {
    if (!root) {
      return new BiTNode(val);
    }
    if (this.cmp(val, root.value) < 0) {
      root.left = this._insert(root.left, val);
    } else if (this.cmp(val, root.value) > 0) {
      root.right = this._insert(root.right, val);
    }
    return root;
  }

  private _delete(root: BiTNode<T>, val: T): BiTNode<T> {
    if (!root) return root;
    if (this.cmp(val, root.value) < 0) {
      root.left = this._delete(root.left, val);
    } else if (this.cmp(val, root.value) > 0) {
      root.right = this._delete(root.right, val);
    } else {
      if (!root.left) return root.right;
      if (!root.right) return root.left;
      let pre = root;
      let cur = root.right;
      while (cur.left) {
        pre = cur;
        cur = cur.left;
      }
      root.value = cur.value;
      if (pre !== root) {
        pre.left = cur.right;
      } else {
        pre.right = cur.right;
      }
    }
    return root;
  }

  public delete(val: T) {
    this.root = this._delete(this.root, val);
  }

  private _lowerBound(root: BiTNode<T>, value: T): BiTNode<T> {
    if (!root) return root;
    if (this.cmp(value, root.value) > 0) return this._lowerBound(root.right, value);
    if (this.cmp(value, root.value) === 0) return root;
    const ans = this._lowerBound(root.left, value);
    return ans || root;
  }

  private _upperBound(root: BiTNode<T>, value: T): BiTNode<T> {
    if (!root) return root;
    if (this.cmp(value, root.value) > 0) return this._upperBound(root.right, value);
    const ans = this._upperBound(root.left, value);
    return ans || root;
  }

  public lowerBound(val: T): T | undefined {
    const node = this._lowerBound(this.root, val);
    return node ? node.value : undefined;
  }

  public upperBound(val: T): T | undefined {
    const node = this._upperBound(this.root, val);
    return node ? node.value : undefined;
  }
}