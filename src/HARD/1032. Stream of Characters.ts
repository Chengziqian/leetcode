// 02/26/2021 HARD

// https://leetcode-cn.com/problems/stream-of-characters/

/*
Implement the StreamChecker class as follows:

StreamChecker(words): Constructor, init the data structure with the given words.
query(letter): returns true if and only if for some k >= 1, 
the last k characters queried (in order from oldest to newest, including this letter just queried) 
spell one of the words in the given list.
 

Example:

StreamChecker streamChecker = new StreamChecker(["cd","f","kl"]); // init the dictionary.
streamChecker.query('a');          // return false
streamChecker.query('b');          // return false
streamChecker.query('c');          // return false
streamChecker.query('d');          // return true, because 'cd' is in the wordlist
streamChecker.query('e');          // return false
streamChecker.query('f');          // return true, because 'f' is in the wordlist
streamChecker.query('g');          // return false
streamChecker.query('h');          // return false
streamChecker.query('i');          // return false
streamChecker.query('j');          // return false
streamChecker.query('k');          // return false
streamChecker.query('l');          // return true, because 'kl' is in the wordlist
 

Note:

1 <= words.length <= 2000
1 <= words[i].length <= 2000
Words will only consist of lowercase English letters.
Queries will only consist of lowercase English letters.
The number of queries is at most 40000.

 */
import { TrieTree } from '../../utils/TrieTree';

class StreamChecker {
  private tireTree: TrieTree;
  private letterList: string[];
  constructor(words: string[]) {
    this.tireTree = new TrieTree();
    this.letterList = [];
    for (let i = 0; i < words.length; i++) {
      this.tireTree.add(words[i].split('').reverse().join(''));
    }
  }

  query(letter: string): boolean {
    this.letterList.push(letter);
    let p: TrieTree = this.tireTree;
    for (let i = this.letterList.length - 1; i >= 0 ; i--) {
      const next = p.children[TrieTree.getIndex(this.letterList[i])];
      if (!next) return false;
      else if (next.isKey) return true;
      else p = next;
    }
    return false;
  }
}

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */
