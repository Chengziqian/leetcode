function splitString(s: string): boolean {
  return dfs(0, []);

  function dfs(index: number, path: number[]) {
    if (index >= s.length && path.length > 1) return true;
    let current = ''
    for (let i = index; i < s.length; i++) {
      current += s[i];
      if (!path.length || (+current < path[path.length - 1] && +path[path.length - 1] - +current === 1)) {
        path.push(+current);
        if (dfs(i + 1, path)) return true;
        path.pop();
      }
    }
    return false;
  }
};