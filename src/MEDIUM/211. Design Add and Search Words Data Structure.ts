// 10/16/2020 MEDIUM

// https://leetcode-cn.com/problems/design-add-and-search-words-data-structure/

/*
Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 

Example:

Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
 

Constraints:

1 <= word.length <= 500
word in addWord consists lower-case English letters.
word in search consist of '.' or lower-case English letters.
At most 50000 calls will be made to addWord and search.

 */
interface TrieTreeNode {
  isKey: boolean;
  children: TrieTreeNode[];
}
class WordDictionary {
  private trieTree: TrieTreeNode;
  constructor() {
    this.trieTree = {
      isKey: false,
      children: []
    };
  }

  addWord(word: string): void {
    let p: TrieTreeNode = this.trieTree;
    for (let i = 0; i < word.length; i++) {
      const charIndex = word[i].charCodeAt(0) - "a".charCodeAt(0);
      if (!p.children[charIndex]) {
        p.children[charIndex] = {
          isKey: false,
          children: [],
        }
      }
      p = p.children[charIndex];
    }
    p.isKey = true;
  }

  search(word: string): boolean {
    return this._search(this.trieTree, word);
  }
  
  getCharIndex(char: string) {
    return char.charCodeAt(0) - "a".charCodeAt(0);
  }
  
  _search(node: TrieTreeNode, word: string): boolean {
    if (word.length === 1) {
      if (word[0] === '.') {
        for (let i = 0; i < 26; i++) {
          if (node.children[i] && node.children[i].isKey) return true;
        }
        return false
      } else {
        const charIndex = this.getCharIndex(word[0]);
        return !!node.children[charIndex] && node.children[charIndex].isKey;
      }
    } else {
      const firstChar = word[0];
      if (firstChar === '.') {
        for (let i = 0; i < 26; i++) {
          if (node.children[i] && this._search(node.children[i], word.slice(1))) return true;
        }
        return false;
      } else {
        const charIndex = this.getCharIndex(word[0]);
        if (node.children[charIndex]) {
          return this._search(node.children[charIndex], word.slice(1));
        } else {
          return false;
        }
      }
    }
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
