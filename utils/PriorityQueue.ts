import { Heap } from './Heap';

export class PriorityQueue<T> {
  private _heap: Heap<T>;
  constructor(cmp: (a: T, b: T) => boolean) {
    this._heap = new Heap<T>(cmp);
  }
  
  public add(ele: T) {
    this._heap.insert(ele);
  }
  
  public remove(): T | undefined {
    const front = this._heap.front();
    this._heap.delete(1);
    return front;
  }
  
  public front(): T | undefined {
    return this._heap.front();
  }
  
  public size(): number {
    return this._heap.size();
  }

  public empty(): boolean {
    return !this.size();
  }
}

// export default class PriorityQueue<T> {
//   private readonly _queue: T[];
//   private readonly _compare: (a: T, b: T) => boolean;
//   private _length: number;
//   constructor(compare: (a: T, b: T) => boolean) {
//     this._compare = compare;
//     this._queue = [{} as T];
//     this._length = 0;
//   }
//
//   public add(ele: T) {
//     this._queue.push(ele);
//     let currentIndex = this._queue.length - 1;
//     let swimIndex = currentIndex >> 1;
//     while (swimIndex >= 1) {
//       if (this._compare(this._queue[currentIndex], this._queue[swimIndex])) {
//         [this._queue[currentIndex], this._queue[swimIndex]] = [this._queue[swimIndex], this._queue[currentIndex]]
//       }
//       currentIndex = swimIndex;
//       swimIndex >>= 1;
//     }
//     this._length++;
//   }
//
//   public remove(): T | undefined {
//     if (!this._length) return undefined;
//     [this._queue[1], this._queue[this._length]] = [this._queue[this._length], this._queue[1]];
//     const res = this._queue.pop();
//     this._length--;
//     let currentIndex = 1, sinkIndex = currentIndex * 2;
//     while (sinkIndex <= this._length) {
//       if (sinkIndex < this._length && this._compare(this._queue[sinkIndex + 1], this._queue[sinkIndex])) sinkIndex++;
//       if (this._compare(this._queue[currentIndex], this._queue[sinkIndex])) break;
//       [this._queue[currentIndex], this._queue[sinkIndex]] = [this._queue[sinkIndex], this._queue[currentIndex]];
//       currentIndex = sinkIndex;
//       sinkIndex *= 2;
//     }
//     return res;
//   }
//
//   public front(): T | undefined {
//     if (!this._length) return undefined
//     return this._queue[1];
//   }
//
//   public size(): number {
//     return this._length;
//   }
//
//   public empty(): boolean {
//     return !this._length;
//   }
// }
