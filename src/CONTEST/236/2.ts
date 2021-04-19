function findTheWinner(n: number, k: number): number {
  const loser: boolean[] = new Array(n).fill(false);
  let count: number = 0;
  let startIndex = 0;
  while(count < n - 1) {
    let next = (k - 1) % (n - count);
    while (next) {
      while(loser[(startIndex + 1) % n]) startIndex = (startIndex + 1) % n;
      next--;
      startIndex = (startIndex + 1) % n;
    }
    loser[startIndex] = true;
    count++;
    while(loser[startIndex]) startIndex = (startIndex + 1) % n;
  }
  return startIndex + 1;
};