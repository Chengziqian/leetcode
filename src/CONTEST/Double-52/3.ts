function rotateTheBox(box: string[][]): string[][] {
  const row = box.length;
  const col = box[0].length;
  const ans: string[][] = new Array(col);
  for (let i = 0; i < ans.length; i++) {
    ans[i] = new Array(row).fill('.');
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (box[i][j] === '*') {
        ans[j][row - i - 1] = box[i][j]; // 记录障碍物
      }
    }
  }

  for (let i = 0; i < row; i++) {
    let count = 0; // 记录石子个数
    for (let j = 0; j < col; j++) {
      if (box[i][j] === '*') { // 遇到障碍物说明该下落
        let index = j - 1; // 从障碍物之前倒序填充石子
        for (let k = 0; k < count; k++) {
          ans[index--][row - i - 1] = '#';
        }
        count = 0;
      } else if (box[i][j] === '#') {
        count++;
      }
    }
    let index = col - 1; // 处理最后还剩石子的情况
    while(count--) {
      ans[index--][row - i - 1] = '#';
    }
  }
  return ans;
};

// 先翻转矩阵复制障碍物和空闲位置，然后遍历每一列(原始行)并计数石子数量，遇到障碍物就反向复制石子并清空当前计数。