function minSwaps(s: string): number {
  let zero = 0;
  let one = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') zero++;
    if (s[i] === '1') one++;
  }
  if (Math.abs(zero - one) > 1) return -1;
  let startWithZero = 0;
  let startWithOne = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1' && i % 2 === 0) startWithZero++;
    if (s[i] === '0' && i % 2 === 1) startWithZero++;

    if (s[i] === '1' && i % 2 === 1) startWithOne++;
    if (s[i] === '0' && i % 2 === 0) startWithOne++;
  }
  if (startWithOne % 2 !== 0) return startWithZero / 2;
  if (startWithZero % 2 !== 0) return startWithOne / 2;
  return Math.min(startWithZero / 2, startWithOne / 2);
};