// 05/11/2021 MEDOUM

// https://leetcode-cn.com/problems/decode-xored-permutation

/* 
There is an integer array perm that is a permutation of the first n positive integers, where n is always odd.

It was encoded into another integer array encoded of length n - 1, 
such that encoded[i] = perm[i] XOR perm[i + 1]. 
For example, if perm = [1,3,2], then encoded = [2,1].

Given the encoded array, return the original array perm. It is guaranteed that the answer exists and is unique.

 

Example 1:

Input: encoded = [3,1]
Output: [1,2,3]
Explanation: If perm = [1,2,3], then encoded = [1 XOR 2,2 XOR 3] = [3,1]
Example 2:

Input: encoded = [6,5,4,6]
Output: [2,4,1,5,3]
 

Constraints:

3 <= n < 105
n is odd.
encoded.length == n - 1

*/
#include <vector>
#include <iostream>
using namespace std;
class Solution {
public:
    vector<int> decode(vector<int>& encoded) {
      int n = encoded.size() + 1;
      int xorSum = 0;
      for (int i = 1; i <= n; i++) {
        xorSum ^= i;
      }
      int xorWithoutFirst = 0;
      for (int i = 1; i < n - 1; i += 2) {
        xorWithoutFirst ^= encoded[i];
      }
      int firstEle = xorWithoutFirst ^ xorSum;
      vector<int> ans;
      ans.push_back(firstEle);
      for (int i = 0; i < n - 1; i++) {
        ans.push_back(ans[i] ^ encoded[i]);
      }
      return ans;
    }
};

int main() {
  Solution s;
  int test[4] = {6,5,4,6};
  vector<int> v;
  v.insert(v.begin(), test, test + 4);
  vector<int> ans = s.decode(v);
  for (vector<int>::iterator it = ans.begin(); it != ans.end(); it++) {
    cout << *it << ' ';
  }
  cout << endl;
  return 0;
}