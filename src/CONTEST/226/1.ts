function countBalls(lowLimit: number, highLimit: number): number {
  const count = new Array(100).fill(0);
  let ans = 0;
  for (let i = lowLimit; i <= highLimit; i++) {
    const index =  getNumber(i);
    count[index]++;
    ans = Math.max(count[index], ans);
  }

  return ans;


  function getNumber(x: number) {
    let ans = 0;
    while(x) {
      ans += x % 10;
      x = Math.floor(x / 10);
    }
    return ans;
  }
};