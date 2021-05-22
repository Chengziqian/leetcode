// 05/12/2021 MEDIUM

// https://leetcode-cn.com/problems/analyze-user-website-visit-pattern

/*
We are given some website visits: 
the user with name username[i] visited the website website[i] at time timestamp[i].

A 3-sequence is a list of websites of length 3 sorted in ascending order by the time of their visits.  (The websites in a 3-sequence are not necessarily distinct.)

Find the 3-sequence visited by the largest number of users. If there is more than one solution, return the lexicographically smallest such 3-sequence.

 

Example 1:

Input: username = ["joe","joe","joe","james","james","james","james","mary","mary","mary"], timestamp = [1,2,3,4,5,6,7,8,9,10], website = ["home","about","career","home","cart","maps","home","home","about","career"]
Output: ["home","about","career"]
Explanation: 
The tuples in this example are:
["joe", 1, "home"]
["joe", 2, "about"]
["joe", 3, "career"]
["james", 4, "home"]
["james", 5, "cart"]
["james", 6, "maps"]
["james", 7, "home"]
["mary", 8, "home"]
["mary", 9, "about"]
["mary", 10, "career"]
The 3-sequence ("home", "about", "career") was visited at least once by 2 users.
The 3-sequence ("home", "cart", "maps") was visited at least once by 1 user.
The 3-sequence ("home", "cart", "home") was visited at least once by 1 user.
The 3-sequence ("home", "maps", "home") was visited at least once by 1 user.
The 3-sequence ("cart", "maps", "home") was visited at least once by 1 user.
 

Note:

3 <= N = username.length = timestamp.length = website.length <= 50
1 <= username[i].length <= 10
0 <= timestamp[i] <= 10^9
1 <= website[i].length <= 10
Both username[i] and website[i] contain only lowercase characters.
It is guaranteed that there is at least one user who visited at least 3 websites.
No user visits two websites at the same time.

*/
#include <vector>
#include <unordered_map>
#include <unordered_set>
#include <string>
using namespace std;
typedef tuple<int, string, string> Path;
class Solution {
  public:
      vector<string> mostVisitedPattern(vector<string>& username, vector<int>& timestamp, vector<string>& website) {
        int n = timestamp.size();
        vector<tuple<int, string, string>> pathList(n);
        for (int i = 0; i < n; i++) {
          pathList[i] = Path(timestamp[i], username[i], website[i]);
        }
        unordered_map<string, vector<Path*>> userPath;
        sort(
          pathList.begin(), 
          pathList.end(), 
          [](Path t1, Path t2){ return get<0>(t1) < get<0>(t2); });
        for (int i = 0; i < n; i++) {
          string currentUser = get<1>(pathList[i]);
          if (userPath.find(currentUser) == userPath.end()) {
            userPath.insert(pair<string, vector<Path*>>(currentUser, vector<Path*>()));
          }
          userPath.find(currentUser)->second.push_back(&pathList[i]);
        }

        unordered_map<string, int> pathCount;
        unordered_map<string, vector<Path*>>::iterator it = userPath.begin();
        int maxVis = 0;
        string ansStr;
        for (; it != userPath.end(); ++it) {
          int len = it->second.size();
          unordered_set<string> used;
          for (int i = 0; i < len; ++i) {
            for (int j = i + 1; j < len; ++j) {
              for (int k = j + 1; k < len; ++k) {
                string path = get<2>(*(it->second[i])) + ',' + get<2>(*(it->second[j])) +  ',' + get<2>(*(it->second[k]));
                if (used.find(path) != used.end()) continue;
                used.insert(path);
                if (pathCount.find(path) == pathCount.end()) {
                  pathCount.insert(pair<string, int>(path, 1));
                } else {
                  pathCount.find(path)->second += 1;
                }
                int vis = pathCount.find(path)->second;
                if (vis > maxVis) {
                  maxVis = vis;
                  ansStr = path;
                } else if (vis == maxVis) {
                  if (ansStr > path) ansStr = path;
                }
              }
            }
          }
        }
        vector<string> ans;
        string s = "";
        for (int i = 0; i < ansStr.size(); i++) {
          if (ansStr[i] == ',') {
            ans.push_back(s);
            s = "";
          }
          else s += ansStr[i];
        }
        ans.push_back(s);
        return ans;
      }
  };