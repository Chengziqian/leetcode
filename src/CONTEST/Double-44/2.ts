function minimumTeachings(n: number, languages: number[][], friendships: number[][]): number {
  const langCount: number[] = new Array(n + 1).fill(0);
  const learnt: boolean[][] = new Array(languages.length + 1);
  for (let i = 0; i < learnt.length; i++) {
    learnt[i] = new Array(n + 1).fill(false);
  }
  for (let i = 0; i < languages.length; i++) {
    for (let j = 0; j < languages[i].length; j++) {
      learnt[i + 1][languages[i][j]] = true;
    }
  }
  let ans = Number.MAX_SAFE_INTEGER;
  const needTeach: Map<number, boolean> = new Map<number, boolean>();
  for (let i = 0; i < friendships.length; i++) {
    const [u, v] = friendships[i];
    let flag = false;
    for (let k = 0; k < languages[u - 1].length; k++) {
      if (learnt[v][languages[u - 1][k]]) {
        flag = true;
        break;
      }
    }
    if (flag) continue;
    else {
      if (!needTeach.has(u)) {
        needTeach.set(u, true);
        for (let k = 0; k < languages[v - 1].length; k++) {
          langCount[languages[u - 1][k]]++;
        }
      }
      if (!needTeach.has(v)) {
        needTeach.set(v, true);
        for (let k = 0; k < languages[v - 1].length; k++) {
          langCount[languages[v - 1][k]]++;
        }
      }
    }
  }
  for (let i = 1; i < langCount.length; i++) {
    if (langCount[i] > 0) {
      let count = 0;
      needTeach.forEach((value, key) => {
        if (!learnt[key][i]) count++;
      })
      if (count > 0) {
        ans = Math.min(ans, count);
      }
    }
  }
  
  return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;
}