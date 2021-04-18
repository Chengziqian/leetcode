function checkIfPangram(sentence: string): boolean {
  const record: Set<string> = new Set<string>();
  for (let i = 0; i< sentence.length; i++) record.add(sentence[i]);
  return record.size === 26;
};