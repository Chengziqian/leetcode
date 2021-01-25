function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let ans = 0;
  for (let i = 0; i < boxTypes.length; i++) {
    const [size, unit] = boxTypes[i];699. Falling Squares
    if (size < truckSize) {
      ans += size * unit;
      truckSize -= size;
    } else {
      ans += truckSize * unit;
      break;
    }
  }
  return ans;
};
