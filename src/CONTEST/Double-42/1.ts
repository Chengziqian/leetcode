function countStudents(students: number[], sandwiches: number[]): number {
  let needOne = 0, needZero = 0;
  for (let i = 0; i < students.length; i++) {
    // 记录需要三明治的学生个数
    if (students[i] === 1) needOne++;
    else needZero++;
  }
  for (let i = 0; i < sandwiches.length; i++) {
    // 如果栈顶无法满足就返回结果
    if (sandwiches[i] === 0 && needZero <= 0) return needOne;
    if (sandwiches[i] === 1 && needOne <= 0) return needZero;
    // 可以满足对应减少需求数量
    if (sandwiches[i] === 0) needZero--;
    else needOne--;
  }
  return 0;
};