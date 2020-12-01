export class PriorityQueue<T> {
  private readonly _queue: T[];
  private readonly _compare: (a: T, b: T) => boolean;
  private _length: number;
  constructor(compare: (a: T, b: T) => boolean) {
    this._compare = compare;
    this._queue = [{} as T];
    this._length = 0;
  }
  
  public add(ele: T) {
    this._queue.push(ele);
    let currentIndex = this._queue.length - 1;
    let swimIndex = currentIndex >> 1;
    while (swimIndex >= 1) {
      if (this._compare(this._queue[currentIndex], this._queue[swimIndex])) {
        [this._queue[currentIndex], this._queue[swimIndex]] = [this._queue[swimIndex], this._queue[currentIndex]]
      }
      currentIndex = swimIndex;
      swimIndex >>= 1;
    }
    this._length++;
  }
  
  public remove(): T | undefined {
    if (!this._length) return undefined;
    [this._queue[1], this._queue[this._length]] = [this._queue[this._length], this._queue[1]];
    const res = this._queue.pop();
    this._length--;
    let currentIndex = 1, shrinkIndex = currentIndex * 2;
    while (shrinkIndex <= this._length) {
      if (shrinkIndex < this._length && this._compare(this._queue[shrinkIndex + 1], this._queue[shrinkIndex])) shrinkIndex++;
      if (this._compare(this._queue[currentIndex], this._queue[shrinkIndex])) break;
      [this._queue[currentIndex], this._queue[shrinkIndex]] = [this._queue[shrinkIndex], this._queue[currentIndex]];
      currentIndex = shrinkIndex;
      shrinkIndex *= 2;
    }
    return res;
  }
  
  public front(): T | undefined {
    if (!this._length) return undefined
    return this._queue[1];
  }
}
