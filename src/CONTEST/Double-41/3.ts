import { PriorityQueue } from '../../../utils/index';
interface RecordNode {
  value: number,
  index: number
}
function cmp(a: RecordNode, b: RecordNode, refer: number[]) {
  if (a.value === b.value) return refer[a.index] > refer[b.index];
  else return a.value > b.value;
}
function stoneGameVI(aliceValues: number[], bobValues: number[]): number {
  const queueA: PriorityQueue<RecordNode> = new PriorityQueue<RecordNode>((a, b) => cmp(a, b, bobValues));
  const queueB: PriorityQueue<RecordNode> = new PriorityQueue<RecordNode>((a, b) => cmp(a, b, aliceValues));
  const used: boolean[] = new Array(aliceValues.length).fill(false);
  for (let i = 0; i < aliceValues.length; i++) {
    queueA.add({
      value: aliceValues[i],
      index: i
    });
  }
  for (let i = 0; i < bobValues.length; i++) {
    queueB.add({
      value: bobValues[i],
      index: i
    });
  }
  let aliceScore = 0;
  let bobScore = 0;
  let isAlice = true;
  for (let i = 0; i < aliceValues.length; i++) {
    while(used[queueA.front().index]) queueA.remove();
    while(used[queueB.front().index]) queueB.remove();
    const aliceMax = queueA.front();
    const bobMax = queueB.front();
    if (isAlice) {
      const curBob = bobValues[aliceMax.index];
      const curALice = aliceValues[bobMax.index];
      if (bobMax.value > aliceMax.value) {
        aliceScore += aliceValues[bobMax.index];
        used[bobMax.index] = true;
        queueB.remove();
      } else if (bobMax.value < aliceMax.value) {
        aliceScore += aliceMax.value;
        used[aliceMax.index] = true;
        queueA.remove();
      } else {
        if (curBob > curALice) {
          aliceScore += aliceValues[bobMax.index];
          used[bobMax.index] = true;
          queueB.remove();
        } else {
          aliceScore += aliceMax.value;
          used[aliceMax.index] = true;
          queueA.remove();
        }
      }
    } else {
      const curBob = bobValues[aliceMax.index];
      const curALice = aliceValues[bobMax.index];
      if (aliceMax.value > bobMax.value) {
        bobScore += bobValues[aliceMax.index];
        used[aliceMax.index] = true;
        queueA.remove();
      } else if (aliceMax.value < bobMax.value) {
        bobScore += bobMax.value;
        used[bobMax.index] = true;
        queueB.remove();
      } else {
        if (curALice > curBob) {
          bobScore += bobValues[aliceMax.index];
          used[aliceMax.index] = true;
          queueA.remove();
        } else {
          bobScore += bobMax.value;
          used[bobMax.index] = true;
          queueB.remove();
        }
      }
    }
    isAlice = !isAlice;
  }
  if (aliceScore === bobScore) return 0;
  else if (aliceScore > bobScore) return 1;
  else return -1;
};