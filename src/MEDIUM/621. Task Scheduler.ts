// 09/18/2020 MEDIUM

// https://leetcode-cn.com/problems/task-scheduler/

function leastInterval(tasks: string[], n: number): number {
  const taskMap: {[Key: string]: number} = {};
  tasks.forEach(t => {
    if (taskMap[t]) taskMap[t]++;
    else taskMap[t] = 1;
  });
  let max = 0;
  Object.keys(taskMap).forEach(t => {
    max = Math.max(taskMap[t], max);
  });
  let maxCount = 0;
  Object.keys(taskMap).forEach(t => {
    if (taskMap[t] === max) maxCount++;
  });
  return Math.max(tasks.length, (n + 1) * (max - 1) + maxCount)
};

