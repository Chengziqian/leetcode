export class Heap<T> {
  private readonly heap: T[];
  private readonly cmp: (a: T, b: T) => boolean;
  private _size: number;
  constructor(cmp: (a: T, b: T) => boolean) {
    this.cmp = cmp;
    this.heap = [{} as T];
    this._size = 0;
  }
  
  private sink(root: number) {
    let sinkIndex = root << 1;
    while (sinkIndex <= this._size) {
      if (sinkIndex < this._size && this.cmp(this.heap[sinkIndex + 1], this.heap[sinkIndex])) sinkIndex++;
      if (this.cmp(this.heap[root], this.heap[sinkIndex])) break;
      [this.heap[root], this.heap[sinkIndex]] = [this.heap[sinkIndex], this.heap[root]];
      root = sinkIndex;
      sinkIndex <<= 1;
    }
  }
  
  private swim(leaf: number) {
    let swimIndex = leaf >> 1;
    while (swimIndex >= 1) {
      if (this.cmp(this.heap[swimIndex], this.heap[leaf])) break;
      [this.heap[leaf], this.heap[swimIndex]] = [this.heap[swimIndex], this.heap[leaf]];
      leaf = swimIndex;
      swimIndex >>= 1;
    }
  }
  
  public insert(e: T) {
    this.heap.push(e);
    this._size++;
    this.swim(this._size);
  }

  public delete(arg?: T | ((e: T) => boolean)) {
    const _equal = (typeof arg === 'function' ? arg : ((it: T) => it === arg)) as (e: T) => boolean;
    const index = arg ? this.indexOf(_equal) : 1;
    if (!this._size || index === -1) return;
    let lastEle = this.heap[this._size];
    if (this.cmp(lastEle, this.heap[index])) {
      this.heap[index] = lastEle;
      this._size--;
      this.heap.pop();
      this.swim(index);
    } else {
      this.heap[index] = lastEle;
      this._size--;
      this.heap.pop();
      this.sink(index);
    }
  }
  
  public indexOf(equal: (e: T) => boolean) {
    for (let i = 1; i <= this._size; i++) {
      if (equal(this.heap[i])) return i;
    }
    return -1;
  }

  public front(): T | undefined {
    if (!this.size) return undefined;
    return this.heap[1];
  }

  public size() {
    return this._size;
  }
}
