function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  let ans = 0;
  for (let i = 0; i < items.length; i++) {
    const [type, color, name] = items[i];
    if (ruleKey === 'type' && type === ruleValue) ans++;

    if (ruleKey === 'color' && color === ruleValue) ans++;

    if (ruleKey === 'name' && name === ruleValue) ans++;
  }
  return ans;
};