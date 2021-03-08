// 01/22/2021 HARD

// https://leetcode-cn.com/problems/falling-squares/

/*
On an infinite number line (x-axis), we drop given squares in the order they are given.

The i-th square dropped (positions[i] = (left, side_length)) is a square with the left-most point being positions[i][0] and sidelength positions[i][1].

The square is dropped with the bottom edge parallel to the number line, and from a higher height than all currently landed squares. We wait for each square to stick before dropping the next.

The squares are infinitely sticky on their bottom edge, and will remain fixed to any positive length surface they touch (either the number line or another square). Squares dropped adjacent to each other will not stick together prematurely.

 
Return a list ans of heights. Each height ans[i] represents the current highest height of any square we have dropped, after dropping squares represented by positions[0], positions[1], ..., positions[i].

Example 1:

Input: [[1, 2], [2, 3], [6, 1]]
Output: [2, 5, 5]
Explanation:
After the first drop of positions[0] = [1, 2]: _aa _aa ------- The maximum height of any square is 2.

After the second drop of positions[1] = [2, 3]: __aaa __aaa __aaa _aa__ _aa__ -------------- The maximum height of any square is 5. The larger square stays on top of the smaller square despite where its center of gravity is, because squares are infinitely sticky on their bottom edge.

After the third drop of positions[1] = [6, 1]: __aaa __aaa __aaa _aa _aa___a -------------- The maximum height of any square is still 5. Thus, we return an answer of [2, 5, 5].

 

 
Example 2:

Input: [[100, 100], [200, 100]]
Output: [100, 100]
Explanation: Adjacent squares don't get stuck prematurely - only their bottom edge can stick to surfaces.
 

Note:

1 <= positions.length <= 1000.
1 <= positions[i][0] <= 10^8.
1 <= positions[i][1] <= 10^6.

 */

 import { SegmentTree } from './../../utils/index'
function fallingSquares(positions: number[][]): number[] {
  const record: Map<number, number> = new Map<number, number>();
  const point: number[] = []
  for (let i = 0; i < positions.length; i++) {
    const [index, sizeLen] = positions[i];
    point.push(index, index + sizeLen - 1);
  }
  point.sort((a, b) => a - b);
  let count = 0;
  record.set(point[0], count++);
  for (let i = 1; i < point.length; i++) {
    if (point[i] !== point[i - 1]) {
      record.set(point[i], count++);
    }
  }
  const ST: SegmentTree<number> = new SegmentTree<number>(
    count,
    0,
    (a, b) => Math.max(a, b),
    (oldValue, newValue, size) => newValue
  );
  const ans: number[] = new Array(positions.length);
  let height = 0;
  for (let i = 0; i < positions.length; i++) {
    const [index, sizeLen] = positions[i];
    const currentHeight = ST.query(getIndex(index), getIndex(index + sizeLen - 1));
    ST.update(getIndex(index), getIndex(index + sizeLen - 1), currentHeight + sizeLen);
    height = Math.max(height, currentHeight + sizeLen);
    ans[i] = height;
  }
  return ans;
  function getIndex(index: number) {
    return record.get(index)
  }
};