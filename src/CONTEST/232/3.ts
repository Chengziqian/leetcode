import { PriorityQueue } from '../../../utils/index';
function maxAverageRatio(classes: number[][], extraStudents: number): number {
  const queue: PriorityQueue<number[]> = new PriorityQueue<number[]>((a, b) => a[0] > b[0]);
  for (let i = 0; i < classes.length; i++) {
    queue.add([calc(i), i]);
  }
  while(extraStudents) {
    extraStudents--;
    const [delta, index] = queue.remove();
    classes[index][0]++;
    classes[index][1]++;
    queue.add([calc(index), index]);
  }
  let average = 0;
  for (let i = 0; i < classes.length; i++) {
    const [pass, total] = classes[i];
    average += (pass / total);
  }
  return average / classes.length;

  function calc(index: number) {
    const [pass, total] = classes[index];
    return ((pass + 1) / (total + 1)) - (pass / total);
  }
};