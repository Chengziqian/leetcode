import { PriorityQueue } from '../../../utils/PriorityQueue';

function maximumScore(a: number, b: number, c: number): number {
  const heap: number[] = [a, b, c];
  const queue: PriorityQueue<number> = new PriorityQueue<number>((a, b) => heap[a] > heap[b]);
  queue.add(0);
  queue.add(1);
  queue.add(2);
  let ans = 0;
  while (!over()) {
    const x = queue.remove();
    const y = queue.remove();
    ans++;
    heap[x]--;
    heap[y]--;
    queue.add(x);
    queue.add(y);
  }
  return ans;
  function over() {
    let count = 0;
    for (let i = 0; i < heap.length; i++) {
      if (heap[i] === 0) count++;
    }
    return count >= 2;
  }
};
