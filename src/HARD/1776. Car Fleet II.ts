// 03/03/2021 HARD

// https://leetcode-cn.com/problems/car-fleet-ii/

/*
There are n cars traveling at different speeds in the same direction along a one-lane road. 
You are given an array cars of length n, where cars[i] = [positioni, speedi] represents:

positioni is the distance between the ith car and the beginning of the road in meters. 
It is guaranteed that positioni < positioni+1.
speedi is the initial speed of the ith car in meters per second.
For simplicity, cars can be considered as points moving along the number line. 
Two cars collide when they occupy the same position. 
Once a car collides with another car, they unite and form a single car fleet. 
The cars in the formed fleet will have the same position and the same speed, 
which is the initial speed of the slowest car in the fleet.

Return an array answer, where answer[i] is the time, in seconds, 
at which the ith car collides with the next car, 
or -1 if the car does not collide with the next car. 
Answers within 10-5 of the actual answers are accepted.

 

Example 1:

Input: cars = [[1,2],[2,1],[4,3],[7,2]]
Output: [1.00000,-1.00000,3.00000,-1.00000]
Explanation: 
After exactly one second, the first car will collide with the second car, and form a car fleet with speed 1 m/s. 
After exactly 3 seconds, the third car will collide with the fourth car, and form a car fleet with speed 2 m/s.
Example 2:

Input: cars = [[3,4],[5,4],[6,3],[9,1]]
Output: [2.00000,1.00000,1.50000,-1.00000]
 

Constraints:

1 <= cars.length <= 105
1 <= positioni, speedi <= 106
positioni < positioni+1

 */
import { PriorityQueue } from '../../utils/PriorityQueue';

// function getCollisionTimes(cars: number[][]): number[] {
//   const ans: number[] = new Array(cars.length).fill(-1);
//   const stack: number[] = [cars.length - 1];
//   for (let i = cars.length - 2; i >= 0; i--) {
//     while (stack.length) {
//       const [pos, speed] = cars[i];
//       const index = stack[stack.length - 1];
//       const [topPos, topSpeed] = cars[index];
//       if (speed <= topSpeed || (ans[index] !== -1 && (topPos - pos) / (speed - topSpeed) > ans[index])) {
//         stack.pop();
//       } else {
//         break;
//       }
//     }
//     if (stack.length) {
//       const [pos, speed] = cars[i];
//       const [topPos, topSpeed] = cars[stack[stack.length - 1]];
//       ans[i] = (topPos - pos) / (speed - topSpeed);
//     } else {
//       ans[i] = -1;
//     }
//     stack.push(i);
//   }
//   return ans;
// };

function getCollisionTimes(cars: number[][]): number[] {
  const ans: number[] = new Array(cars.length).fill(-1);
  const queue: PriorityQueue<number[]> = new PriorityQueue<number[]>((a, b) => a[0] < b[0]);
  const deleted: boolean[] = new Array(cars.length).fill(false);
  const pre: number[] = new Array(cars.length).fill(-1);
  for (let i = 0; i < cars.length - 1; i++) {
    const ans = calc(cars[i][0], cars[i][1], cars[i + 1][0], cars[i + 1][1]);
    if (ans > 0) {
      queue.add([ans, i, i + 1]);
    }
    pre[i + 1] = i;
  }
  while (!queue.empty()) {
    const [time, low, high] = queue.remove();
    if (deleted[low] || deleted[high]) continue;
    deleted[low] = true;
    pre[high] = pre[low];
    ans[low] = time;
    if (pre[high] !== -1) {
      if (cars[pre[high]][1] > cars[high][1]) {
        const newTime = calc(cars[pre[high]][0], cars[pre[high]][1], cars[high][0], cars[high][1]);
        if (newTime > 0) {
          queue.add([newTime, pre[high], high]);
        }
      }
    }
  }
  return ans;
  
  function calc(prePos: number, preSpeed: number, nextPos: number, nextSpeed: number) {
    if (preSpeed === nextSpeed) return -1;
    return (nextPos - prePos) / (preSpeed - nextSpeed);
  }
  
};
