function minCharacters(a: string, b: string): number {
  let aMax = 'a'
  let aMin = 'z';
  let aMaxCount = 0;
  let aMaxCountChar = '';
  let aCountRecord: Map<string, number> = new Map<string, number>();

  let bMax = 'a'
  let bMin = 'z';
  let bMaxCountChar = '';
  let bMaxCount = 0;
  let bCountRecord: Map<string, number> = new Map<string, number>();

  for (let i = 0; i < a.length; i++) {
    if (a[i] > aMax) aMax = a[i];
    if (a[i] < aMin) aMin = a[i];
    if (!aCountRecord.has(a[i])) {
      aCountRecord.set(a[i], 1);
    } else {
      aCountRecord.set(a[i], aCountRecord.get(a[i]) + 1);
    }
    if (aCountRecord.get(a[i]) > aMaxCount) {
      aMaxCount = aCountRecord.get(a[i]);
      aMaxCountChar = a[i];
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (b[i] > bMax) bMax = b[i];
    if (b[i] < bMin) bMin = b[i];
    if (!bCountRecord.has(b[i])) {
      bCountRecord.set(b[i], 1);
    } else {
      bCountRecord.set(b[i], bCountRecord.get(b[i]) + 1);
    }
    if (bCountRecord.get(b[i]) > bMaxCount) {
      bMaxCount = bCountRecord.get(b[i]);
      bMaxCountChar = b[i];
    }
  }
  let ans = Number.MAX_SAFE_INTEGER;
  if (aMin > bMax || aMax < bMin) return 0; 
  if (aMax < bMax) {
    ans = Math.min(b.length - bCountRecord.get(bMax), a.length, ans);
  }
  if (aMax === bMax) {
    ans = Math.min(a.length, b.length, ans);
  }
  if (aMax > bMax) {
    ans = Math.min(a.length - aCountRecord.get(aMax), b.length, ans);
  }

  if (aMin < bMin) {
    ans = Math.min(a.length - aCountRecord.get(aMin), b.length, ans);
  }

  if (aMin === bMin) {
    ans = Math.min(a.length, b.length, ans);
  }

  if (aMin > bMin) {
    ans = Math.min(b.length - bCountRecord.get(bMax), a.length, ans);
  }

  aCountRecord.forEach((value, key) => {
    ans = Math.min(ans, a.length - value + b.length - (bCountRecord.get(key) || 0));
  });
  bCountRecord.forEach((value, key) => {
    ans = Math.min(ans, b.length - value + a.length - (aCountRecord.get(key) || 0));
  })
  return ans;
};