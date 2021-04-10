function evaluate(s: string, knowledge: string[][]): string {
  const record: Map<string, string> = new Map<string, string>();
  for (let i = 0; i < knowledge.length; i++) {
    const [k, v] = knowledge[i];
    record.set(`(${k})`, v);
  }
  return s.replace(/\((\w*)\)/g, s => record.get(s) || '?');
};