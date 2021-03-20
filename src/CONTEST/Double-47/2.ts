// 转化为3进制数，如果某一位出现2则不满足要求

// 例如 12 的三进制数为 110

// 91 -> 10101

// 21 -> 210

function checkPowersOfThree(n: number): boolean {
  while(n) {
    if (n % 3 === 2) return false;
    n = Math.floor(n / 3);
  }
  return false;
};