import { PriorityQueue } from '../../../utils/PriorityQueue';
interface Apple {
  index: number
  deadline: number
}
function eatenApples(apples: number[], days: number[]): number {
  let currentDay = 0;
  let ans = 0;
  // 使用优先队列，最快腐败的为最优先
  const queue: PriorityQueue<Apple> = new PriorityQueue<Apple>((a, b) => a.deadline < b.deadline);
  while(currentDay < apples.length || !queue.empty()) {
    // 当前生产苹果就加入队列
    if (currentDay < apples.length) {
      queue.add({
        index: currentDay,
        deadline: currentDay + days[currentDay],
      });
    }
    // 去除吃完了的和腐败了的苹果
    while(!queue.empty() && (apples[queue.front().index] <= 0 || queue.front().deadline <= currentDay)) queue.remove();
    // 消费苹果
    if (!queue.empty()) {
      const currentApple = queue.front();
      apples[currentApple.index]--;
      ans++;
    }
    currentDay++;
  }
  return ans;
};