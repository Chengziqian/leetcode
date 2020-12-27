function maximumBinaryString(binary: string): string {
  const binaryArr = binary.split('');
  let oneCount = 0, zeroCount = 0;
  let start = 0;
  // 获取做长连续为1的前缀
  while(start < binaryArr.length && binaryArr[start] === '1') start++;
  // 从第一个为0的位置开始处理，统计0和1的个数
  for (let i = start; i < binaryArr.length; i++) {
    if (binaryArr[i] === '1') oneCount++;
    else zeroCount++;
  }
  let last = '';
  // 存在0才转换为1
  if (zeroCount > 0) {
    for (let i = 0; i < zeroCount - 1; i++) last += '1';
    last += '0';
  }
  // 补完1的个数
  for (let i = 0; i < oneCount; i++) last += '1';
  // 拼接前缀
  return binaryArr.splice(0, start).join('') + last;
};

// 我们的目的是使得结果最大，那么需要尽可能的让高位为1，注意到 "10" -> "01" 那么就是可以将 "1" 全部移动到尾部，"0"全部移动到头部， 比如 "0101010" -> "000111"。 对于 "00" ->"10" 则是是结果最大的手段，我们可以将移动到前面的n个0依次变成n-1个1，比如 "0000111" -> "1110111"