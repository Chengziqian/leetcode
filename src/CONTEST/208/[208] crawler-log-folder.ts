// https://leetcode-cn.com/contest/weekly-contest-208/problems/crawler-log-folder/
function minOperations(logs: string[]): number {
  let depth = 0;
  let flag = false;
  for (let i = 0; i < logs.length; i++) {
    if (logs[i] === '../') {
      if (depth === 0) continue
      depth--;
      if (depth === 0) {
        flag = false;
      }
    } else if (logs[i] !== './') {
      depth++;
      if (depth === 0) {
        flag = true;
      }
    }
  }
  if (depth < 0) return 0;
  return flag ? depth + 1 : depth;
};
