// 8/26/2020 MEDIUM

function maxLength(arr: string[]): number {
  let res = 0;
  
  function solver(index: number, selection: string) {
    const count = uniqueCount(selection);
    if (count === -1) return;
    if (count > res) res = count;
    if (index === arr.length) return;
    solver(index + 1, selection + arr[index]);
    solver(index + 1, selection)
  }
  
  function uniqueCount(str: string): number {
    const set = new Set();
    for (const s of str) {
      if (!set.has(s)) set.add(s);
      else return -1;
    }
    return set.size;
  }
  solver(0, "")
  return res;
};
