// 09/18/2020 MEDIUM

// https://leetcode-cn.com/problems/task-scheduler/

// function leastInterval(tasks: string[], n: number): number {
//   const taskMap: {[Key: string]: number} = {};
//   tasks.forEach(t => {
//     if (taskMap[t]) taskMap[t]++;
//     else taskMap[t] = 1;
//   });
//   let max = 0;
//   Object.keys(taskMap).forEach(t => {
//     max = Math.max(taskMap[t], max);
//   });
//   let maxCount = 0;
//   Object.keys(taskMap).forEach(t => {
//     if (taskMap[t] === max) maxCount++;
//   });
//   return Math.max(tasks.length, (n + 1) * (max - 1) + maxCount)
// };

function leastInterval(tasks: string[], n: number): number {
  const count: number[] = new Array(26).fill(0);

  for (let i = 0; i < tasks.length; i++) {
    const index = getCharCode(tasks[i]);
    count[index]++;
  }

  const maxCount = Math.max(...count);

  let time = (n + 1) * (maxCount - 1);
  let index = 0, lastLoop = 0;
  
  for (let i = 0; i < 26; i++) {
    if (maxCount === count[i]) lastLoop++;
  }

  return Math.max(tasks.length, time + lastLoop);

  function getCharCode(char: string) {
    return char.charCodeAt(0) - "A".charCodeAt(0);
  }
}

