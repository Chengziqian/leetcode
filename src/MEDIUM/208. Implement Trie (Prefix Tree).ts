// 10/16/2020 MEDIUM

// https://leetcode-cn.com/problems/implement-trie-prefix-tree/

/*

Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.

 */

class Trie {
  private isKey: boolean;
  private children: Trie[];
  constructor() {
    this.isKey = false;
    this.children = [];
  }

  insert(word: string): void {
    let p: Trie = this;
    for (let i = 0; i < word.length; i++) {
      const charIndex = this.getCharIndex(word[i]);
      if (!p.children[charIndex]) {
        p.children[charIndex] = new Trie();
      }
      p = p.children[charIndex];
    }
    p.setIsKey(true);
  }

  search(word: string): boolean {
    let p: Trie = this;
    for (let i = 0; i < word.length; i++) {
      const charIndex = this.getCharIndex(word[i]);
      if (!p.children[charIndex]) return false;
      else p = p.children[charIndex];
    }
    return p.isKey;
  }

  startsWith(prefix: string): boolean {
    let p: Trie = this;
    for (let i = 0; i < prefix.length; i++) {
      const charIndex = this.getCharIndex(prefix[i]);
      if (!p.children[charIndex]) return false;
      else p = p.children[charIndex];
    }
    return true;
  }
  
  setIsKey(value: boolean) {
    this.isKey = value;
  }

  getCharIndex(char: string) {
    return char.charCodeAt(0) - "a".charCodeAt(0);
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
