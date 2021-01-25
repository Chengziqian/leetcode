import { PriorityQueue } from '../../../utils/index'

function minimumTimeRequired(jobs: number[], k: number): number {
  const sum = new Array(k).fill(0);
  const queue = new PriorityQueue<number>((a, b) => a > b);
  const worker = new PriorityQueue<number>((a, b) => sum[a] < sum[b]);
  for (let i = 0; i < sum.length; i++) {
    worker.add(i);
  }
  for (let i = 0; i < jobs.length; i++) {
    queue.add(jobs[i]);
  }
  let currentMax = 0;
  while(queue.size()) {
    const maxTask = queue.remove();
    let record: number[] = [];
    while(worker.size() - 1) {
      const minWorker = worker.front();
      if (sum[minWorker] + maxTask < currentMax) {
        record.push(worker.remove());
      } else {
        const index = worker.remove();
        sum[index] += maxTask;
        worker.add(index);
        currentMax = Math.max(currentMax, sum[index]);
        break;
      }
    }
    if (!worker.size() && record.length) {
      const index = record[record.length - 1];
      sum[index] += maxTask;
      currentMax = Math.max(currentMax, sum[index]);
    }
    for (let i = 0; i < record.length; i++) {
      worker.add(record[i]);
    }
    record = [];
  }
  return currentMax;
};