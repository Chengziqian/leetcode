import { PriorityQueue } from '../../../utils/index'
function getOrder(tasks: number[][]): number[] {
  const ans: number[] = [];
  const indexs = new Array(tasks.length);
  for (let i = 0; i < tasks.length; i++) indexs[i] = i;
  indexs.sort((a, b) => tasks[a][0] - tasks[b][0]);
  const queue = new PriorityQueue<number>((a, b) => tasks[a][1] === tasks[b][1] ? a < b : tasks[a][1] < tasks[b][1]);
  let currentTime = 0;
  let i = 0;
  while (i < indexs.length) {
    while (i < indexs.length && (queue.empty() || currentTime >= tasks[indexs[i]][0])) {
      currentTime = Math.max(currentTime, tasks[indexs[i]][0]);
      queue.add(indexs[i]);
      i++;
    }
    const currentTaskIndex = queue.remove();
    currentTime += tasks[currentTaskIndex][1];
    ans.push(currentTaskIndex)
  }
  while(!queue.empty()) {
    const currentTaskIndex = queue.remove();
    ans.push(currentTaskIndex);
  }
  return ans;
};