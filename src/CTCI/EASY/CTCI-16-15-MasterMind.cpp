//
// Created by ZiqianCheng on 2021/6/3.
//

// EASY https://leetcode-cn.com/problems/master-mind-lcci/

/*
 * The Game of Master Mind is played as follows:

The computer has four slots, and each slot will contain a ball that is red (R). yellow (Y). green (G) or blue (B).
 For example, the computer might have RGGB (Slot #1 is red, Slots #2 and #3 are green, Slot #4 is blue).

You, the user, are trying to guess the solution. You might, for example, guess YRGB.

When you guess the correct color for the correct slot, you get a "hit:'
 If you guess a color that exists but is in the wrong slot, you get a "pseudo-hit:'
 Note that a slot that is a hit can never count as a pseudo-hit.

For example, if the actual solution is RGBY and you guess GGRR, you have one hit and one pseudo-hit.
 Write a method that, given a guess and a solution, returns the number of hits and pseudo-hits.

Given a sequence of colors solution, and a guess, write a method that return the number of hits and pseudo-hit answer,
 where answer[0] is the number of hits and answer[1] is the number of pseudo-hit.

Example:

Input:  solution="RGBY",guess="GGRR"
Output:  [1,1]
Explanation:  hit once, pseudo-hit once.
Note:

len(solution) = len(guess) = 4
There are only "R","G","B","Y" in solution and guess.

 */

#include <vector>
#include <unordered_map>
using namespace std;
class Solution {
public:
  vector<int> masterMind(string solution, string guess) {
    unordered_map<char, int> rc;
    for (auto c: solution) rc[c]++;
    vector<int> ans = {0, 0};
    for (int i = 0; i < 4; ++i) {
      if (guess[i] == solution[i]) {
        ans[0]++;
        rc[guess[i]]--;
      }
    }
    for (int i = 0; i < 4; ++i) {
      if (guess[i] != solution[i]) {
        if (rc.count(guess[i]) && rc[guess[i]] > 0) {
          ans[1]++;
          rc[guess[i]]--;
        }
      }
    }
    return ans;
  }
};