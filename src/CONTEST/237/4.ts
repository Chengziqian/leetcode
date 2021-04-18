function getXORSum(arr1: number[], arr2: number[]): number {
  const ans: number[] = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      ans.push(arr1[i] & arr2[j]);
    }
  }
  let v = ans[0];
  for (let i = 1; i < ans.length; i++) v ^= ans[i];
  return v;
};