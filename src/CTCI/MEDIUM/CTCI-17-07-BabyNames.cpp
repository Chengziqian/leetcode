//
// Created by ZiqianCheng on 2021/6/7.
//

// MEDIUM https://leetcode-cn.com/problems/baby-names-lcci/

/*
 * Each year, the government releases a list of the 10000 most common baby names and their frequencies (the number of babies with that name).
 * The only problem with this is that some names have multiple spellings.
 * For example,"John" and ''Jon" are essentially the same name but would be listed separately in the list.
 * Given two lists, one of names/frequencies and the other of pairs of equivalent names,
 * write an algorithm to print a new list of the true frequency of each name.
 * Note that if John and Jon are synonyms, and Jon and Johnny are synonyms, then John and Johnny are synonyms.
 * (It is both transitive and symmetric.)
 * In the final list, choose the name that are lexicographically smallest as the "real" name.

Example:

Input: names = ["John(15)","Jon(12)","Chris(13)","Kris(4)","Christopher(19)"], synonyms = ["(Jon,John)","(John,Johnny)","(Chris,Kris)","(Chris,Christopher)"]
Output: ["John(27)","Chris(36)"]
Note:

names.length <= 100000
 */
#include <vector>
#include <string>
#include <unordered_map>
using namespace std;
class Solution {
public:
  vector<string> trulyMostPopular(vector<string>& names, vector<string>& synonyms) {
    int n = names.size();
    vector<int> parent(n);
    vector<int> count(n);
    for (int i = 0; i < n; ++i) parent[i] = i;
    vector<pair<string, int>> list;
    unordered_map<string, int> nameToIndex;
    for (int i = 0; i < n; ++i) {
      pair<string, int>&& cur = getNameAndFrequencies(names[i]);
      list.push_back(cur);
      count[i] = cur.second;
      nameToIndex[cur.first] = i;
    }
    for (auto str: synonyms) {
      pair<string, string>&& syn = getSynonyms(str);
      unionNode(nameToIndex[syn.first], nameToIndex[syn.second], parent, count, list);
    }
    vector<string> ans;
    for (int i = 0; i < n; ++i) {
      if (find(i, parent) == i) {
        string format = list[i].first + "(" + to_string(count[i]) + ")";
        ans.push_back(format);
      }
    }
    return ans;
  }

  int find(int x, vector<int>& parent) {
    return parent[x] == x ? x : parent[x] = find(parent[x], parent);
  }

  void unionNode(int x, int y, vector<int>& parent, vector<int>& count, vector<pair<string, int>>& list) {
    int fx = find(x, parent);
    int fy = find(y, parent);
    if (fx == fy) return;
    else {
      if (list[fx].first > list[fy].first) {
        parent[fx] = fy;
        count[fy] += count[fx];
      } else {
        parent[fy] = fx;
        count[fx] += count[fy];
      }
    }
  }

  pair<string, int> getNameAndFrequencies(string& str) {
    string name;
    int fre = 0;
    for (auto c: str) {
      if (c >= '0' && c <= '9') fre = fre * 10 + (c - '0');
      else if (c != '(' && c != ')') name.push_back(c);
    }
    return make_pair(name, fre);
  }

  pair<string, string> getSynonyms(string& str) {
    string first, second;
    bool isInFirst = true;
    for (auto c: str) {
      if (c == '(' || c == ')') continue;
      if (c == ',') {
        isInFirst = false;
        continue;
      }
      if (isInFirst) first.push_back(c);
      else second.push_back(c);
    }
    return make_pair(first, second);
  }
};

int main() {
  Solution s;
  vector<string> names = {"John(15)","Jon(12)","Chris(13)","Kris(4)","Christopher(19)"};
  vector<string> synonyms = {"(Jon,John)","(John,Johnny)","(Chris,Kris)","(Chris,Christopher)"};
  vector<string> ans = s.trulyMostPopular(names, synonyms);
  return 0;
}