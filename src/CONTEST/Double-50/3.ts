// 异或性质 - 二进制位相同异或后该位变为0，不同变为1。
// 若已知 x 寻找 y ，使得 x^y 最大，则需要使y与x的每一位尽可能地都不同，异或结果1的个数最多，此时最大。其中x可以使用前缀异或和求出
// maximumBit限制了改变的最高位，则不能在 >= maximumBit的位置设置 1，我们只能在第 0 位 - 第 mmaximumBit - 1 位中改变。
function getMaximumXor(nums: number[], maximumBit: number): number[] {
  const pre: number[] = new Array(nums.length); // 前缀异或 pre[i] 代表nums[0] ^ nums[1] ^ ... ^ nums[i]
  const ans: number[] = new Array(nums.length);
  pre[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    pre[i] = pre[i - 1] ^ nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    const current = pre[i];
    let k = 0; // pre[i] ^ k最大 需要令k的二进制 第 0 位 - 第 mmaximumBit - 1 位与per[i]尽可能多的不同
    for (let n = 0; n < maximumBit; n++) {
      // pre[i] 当前位为 0 时 k 的当前位应为 1 异或后为 1 对答案最做出贡献
      if ((current & (1 << n)) === 0) k |= (1 << n);
    }
    ans[nums.length - 1 - i] = k;
  }
  return ans;
};