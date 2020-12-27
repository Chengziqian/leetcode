function averageWaitingTime(customers: number[][]): number {
  if (!customers.length) return 0;
  let curTime = customers[0][0];
  let sumWait = 0;
  for (let i = 0; i < customers.length; i++) {
    const arriveTime = customers[i][0];
    // 注意到达时间晚于上次上菜时间的情况
    if (arriveTime > curTime) curTime = arriveTime;
    const getTime = curTime + customers[i][1];
    sumWait += getTime - arriveTime;
    curTime = getTime;
  }
  return sumWait / customers.length;
};