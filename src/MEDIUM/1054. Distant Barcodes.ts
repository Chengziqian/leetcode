// 12/02/2020 MEDIUM

// https://leetcode-cn.com/problems/distant-barcodes/

/*

In a warehouse, there is a row of barcodes, where the ith barcode is barcodes[i].

Rearrange the barcodes so that no two adjacent barcodes are equal. You may return any answer, and it is guaranteed an answer exists.

 

Example 1:

Input: barcodes = [1,1,1,2,2,2]
Output: [2,1,2,1,2,1]
Example 2:

Input: barcodes = [1,1,1,1,2,2,3,3]
Output: [1,3,1,3,1,2,1,2]
 

Constraints:

1 <= barcodes.length <= 10000
1 <= barcodes[i] <= 10000

 */
import { PriorityQueue } from '../../utils/index';
interface Pair {count: number; code: number};
function rearrangeBarcodes(barcodes: number[]): number[] {
  const queue: PriorityQueue<Pair> 
    = new PriorityQueue((a, b) => a.count < b.count);
  const countMap: {[Key: string]: number} = {};
  for (let i = 0; i < barcodes.length; i++) {
    if (!countMap[barcodes[i]]) countMap[barcodes[i]] = 1;
    else countMap[barcodes[i]]++;
  }
  Object.keys(countMap).forEach(key => {
    queue.add({
      count: countMap[key],
      code: +key
    })
  });
  const ans: number[] = [];
  while (queue.size() > 1) {
    const code1 = queue.remove() as Pair;
    const code2 = queue.remove() as Pair;
    ans.push(code1.code, code2.code);
    code1.count--;
    code2.count--;
    if (code1.count > 0) queue.add(code1);
    if (code2.count > 0) queue.add(code2);
  }
  if (queue.size() > 0) {
    ans.push((queue.remove() as Pair).code);
  }
  return ans;
};
