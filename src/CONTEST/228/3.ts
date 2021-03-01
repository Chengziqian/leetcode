import { PriorityQueue } from '../../../utils/PriorityQueue';

function minimumSize(nums: number[], maxOperations: number): number {
  if (nums.length <= 1) {
    if (nums[0] % (maxOperations + 1)) {
      return Math.floor(nums[0] / (maxOperations + 1)) + 1;
    } else {
      return nums[0] / (maxOperations + 1);
    }
  }
  const queue: PriorityQueue<number> = new PriorityQueue<number>((a, b) => a > b);
  for (let i = 0; i < nums.length; i++) {
    queue.add(nums[i]);
  }
  for (let k = 0; k < maxOperations; k++) {
    const max = queue.remove();
    let count = 0;
    while (queue.size() && queue.front() === max) {
      queue.remove();
      count++;
    }
    const next = queue.front();
    queue.add(next);
    queue.add(max - next);
    while (count--) queue.add(max);
  }
  return queue.front();
};
