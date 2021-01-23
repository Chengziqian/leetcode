function totalMoney(n: number): number {
  const T = Math.floor(n / 7);
  const M = n % 7;
  let sum = 0;
  for (let i = 0; i < T; i++) {
    sum += 28 + i * 7;
  }
  for (let i = 0; i < M; i++) {
    sum += i + 1 + T;
  }
  return sum;
};