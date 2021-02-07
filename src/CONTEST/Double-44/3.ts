function minimumLength(s: string): number {
  let left = 0, right = s.length - 1;
  while (s[left] === s[right] && left < s.length && right >= 0) {
    // 移动后只剩下一个字符 直接返回
    if (left === right) return 1;
    // 尽可能寻找最长前缀和后缀
    while (left + 1 < s.length && s[left] === s[left + 1]) left++;
    while (right - 1 >= 0 && s[right] === s[right - 1]) right--;
    // 如果剩余全部都是相同字符，且字符长度 > 1 总可以全部消除
    if (left > right) return 0;
    // 移动到下一个选取操作
    else {
      left++;
      right--;
    }
  }
  return right - left + 1;
};
