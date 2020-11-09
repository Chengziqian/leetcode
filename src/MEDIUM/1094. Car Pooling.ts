// 8/26/2020 MEDIUM

function carPooling(trips: number[][], capacity: number): boolean {
  const arr: number[] = [];
  for (let i = 0; i < 1001; i++) {
    arr[i] = 0;
  }
  for (let i = 0; i < trips.length; i++) {
    arr[trips[i][1]] += trips[i][0];
    arr[trips[i][2]] -= trips[i][0];
  }
  for (let i = 1; i < 1001; i++) {
    arr[i] += arr[i-1];
    if (arr[i] > capacity) return false
  }
  return true;
};
