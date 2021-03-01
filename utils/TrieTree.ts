export class TrieTree {
  public char: string;
  public isKey: boolean;
  public freq: number;
  public children: TrieTree[];
  constructor(char?: string) {
    this.char = char;
    this.isKey = false;
    this.freq = 0;
    this.children = new Array(26);
  }
  
  public add(str: string) {
    let p: TrieTree = this;
    for (let i = 0; i < str.length; i++) {
      const current = str[i];
      const index = TrieTree.getIndex(current);
      if (!p.children[index]) {
        p.children[index] = new TrieTree(current);
      }
      p = p.children[index];
    }
    p.isKey = true;
    p.freq++;
  }
  
  public static getIndex(char: string) {
    return char >= 'a' ? char.charCodeAt(0) - 'a'.charCodeAt(0) : char.charCodeAt(0) - 'A'.charCodeAt(0)
  }

  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => {
        let done = i >= this.children.length;
        let value = !done ? this.children[i++] : undefined;
        return {
          done: done,
          value: value
        };
      }
    };
  }
}
