function maximumGain(s: string, x: number, y: number): number {
  const strArr = s.split('');
  let ans = 0;
  if (x > y) {
    ans += x * getAB(strArr);
    ans += y * getBA(strArr);
  } else {
    ans += y * getBA(strArr);
    ans += x * getAB(strArr);
  }

  return ans;

  function getAB(s: string[]) {
    let ans = 0;
    let k = 0
    while(k < s.length) {
      if (k < s.length - 1 && s[k] === 'a' && s[k + 1] === 'b') {
        s.splice(k, 2);
        if (k > 0) k--;
        ans++;
      } else {
        k++;
      }
    }
    return ans;
  }

  function getBA(s: string[]) {
    let ans = 0;
    let k = 0
    while(k < s.length) {
      if (k < s.length - 1 && s[k] === 'b' && s[k + 1] === 'a') {
        s.splice(k, 2);
        if (k > 0) k--;
        ans++;
      } else {
        k++;
      }
    }
    return ans;
  }
};