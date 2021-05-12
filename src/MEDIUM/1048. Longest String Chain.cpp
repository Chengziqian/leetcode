// 05/12/2021 MEDIUM

// https://leetcode-cn.com/problems/longest-string-chain/

/*
Given a list of words, each word consists of English lowercase letters.

Let's say word1 is a predecessor of word2 if and only if we can add exactly one letter anywhere in word1 to make it equal to word2. 
For example, "abc" is a predecessor of "abac".

A word chain is a sequence of words [word_1, word_2, ..., word_k] with k >= 1, 
where word_1 is a predecessor of word_2, word_2 is a predecessor of word_3, and so on.

Return the longest possible length of a word chain with words chosen from the given list of words.

 

Example 1:

Input: words = ["a","b","ba","bca","bda","bdca"]
Output: 4
Explanation: One of the longest word chain is "a","ba","bda","bdca".
Example 2:

Input: words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
Output: 5
 

Constraints:

1 <= words.length <= 1000
1 <= words[i].length <= 16
words[i] only consists of English lowercase letters.

*/

#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <unordered_map>
#include <cstring>
using namespace std;
class Solution {
  public:
      int longestStrChain(vector<string>& words) {
        unordered_map<string, int> rc;
        sort(words.begin(), words.end(), [](string& a, string& b) -> bool {return a.size() < b.size(); });
        int n = words.size();
        vector<int> dp(n, 1);
        for (int i = 0; i < n; i++) {
          rc.insert(pair<string, int>(words[i], i));
          for (int k = 0; k < words[i].size(); k++) {
            string tmp = words[i].substr(0, k) + words[i].substr(k + 1);
            unordered_map<string, int>::iterator it = rc.find(tmp);
            if (it != rc.end()) {
              int index = it->second;
              dp[i] = max(dp[i], dp[index] + 1);
            }
          }
        }
        int ans = 0;
        for (int i = 0; i < n; i++) ans = max(ans, dp[i]);
        return ans;
      }
};

int main() {
  Solution s;
  vector<string> v = {"a","b","ab","bac"};
  cout << s.longestStrChain(v) << endl;
  return 0;
}