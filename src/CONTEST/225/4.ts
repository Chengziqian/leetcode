function minimumBoxes(n: number): number {
  if (n <= 3) return n;
  for (let i = 1; i < 1e5; i++) {
    const sum = (i * (i + 1)) / 2;
    const next = (i + 1) * (i + 2) / 2;
    if (n > sum && n < next) {
    };
  }
};