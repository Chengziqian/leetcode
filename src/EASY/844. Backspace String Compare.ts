// 8/25/2020 EASY

function backspaceCompare(S: string, T: string): boolean {
  const stackS: string[] = [];
  const stackT: string[] = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] !== '#') stackS.push(S[i]);
    else stackS.pop();
  }
  for (let i = 0; i < T.length; i++) {
    if (T[i] !== '#') stackT.push(T[i]);
    else stackT.pop();
  }
  return stackS.join('') === stackT.join('');
};
