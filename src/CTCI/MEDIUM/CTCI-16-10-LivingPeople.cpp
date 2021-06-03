//
// Created by ZiqianCheng on 2021/6/3.
//

// MEDIUM https://leetcode-cn.com/problems/living-people-lcci/

/*
 * Given a list of people with their birth and death years,
 * implement a method to compute the year with the most number of people alive.
 * You may assume that all people were born between 1900 and 2000 (inclusive).
 * If a person was alive during any portion of that year,
 * they should be included in that year's count.
 * For example, Person (birth= 1908, death= 1909) is included in the counts for both 1908 and 1909.

If there are more than one years that have the most number of people alive, return the smallest one.

Example:

Input:
birth = {1900, 1901, 1950}
death = {1948, 1951, 2000}
Output:  1901
Note:

0 < birth.length == death.length <= 10000
birth[i] <= death[i]

 */

#include <vector>
#include <unordered_map>
#include <iostream>
using namespace std;
class Solution {
private:
  vector<int> segmentTree;
  vector<int> lazy;
public:
  int maxAliveYear(vector<int>& birth, vector<int>& death) {
    unordered_map<int, int> indexMap;
    int index = 0;
    sort(birth.begin(), birth.end());
    sort(death.begin(), death.end());
    int n = birth.size();
    int i = 0, j = 0;
    while (i < n || j < n) {
      if (i >= n) {
        if (!indexMap.count(death[j])) {
          indexMap[death[j]] = index++;
        }
        j++;
      } else if (j >= n) {
        if (!indexMap.count(birth[i])) {
          indexMap[death[i]] = index++;
        }
        i++;
      } else {
        if (birth[i] < death[j]) {
          if (!indexMap.count(birth[i])) {
            indexMap[birth[i]] = index++;
          }
          i++;
        } else {
          if (!indexMap.count(death[j])) {
            indexMap[death[j]] = index++;
          }
          j++;
        }
      }
    }
    segmentTree.resize(4 * index, 0);
    lazy.resize(4 * index, 0);
    for (int i = 0; i < n; ++i) {
      update(1, 0, index - 1, indexMap[birth[i]], indexMap[death[i]], 1);
    }
    int ans;
    int maxCount = 0;
    for (auto p: indexMap) {
      int count = query(1, 0, index - 1, p.second);
      if (maxCount < count) {
        ans = p.first;
        maxCount = count;
      } else if (maxCount == count) {
        if (ans > p.first) ans = p.first;
      }
    }
    return ans;
  }

  void pushDown(int root) {
    if (lazy[root] > 0) {
      segmentTree[root << 1] += lazy[root];
      segmentTree[root << 1 | 1] += lazy[root];
      lazy[root << 1] += lazy[root];
      lazy[root << 1 | 1] += lazy[root];
      lazy[root] = 0;
    }
  }

  int query(int root, int L, int R, int index) {
    if (L == R && index == L) return segmentTree[root];
    int mid = (L + R) / 2;
    pushDown(root);
    if (mid >= index) return query(root << 1, L, mid, index);
    else return query(root << 1 | 1, mid + 1, R, index);
  }

  void update(int root, int L, int R, int UL, int UR, int delta) {
    if (UL <= L && R <= UR) {
      segmentTree[root] += delta;
      lazy[root] += delta;
      return;
    }
    pushDown(root);
    int mid = (L + R) / 2;
    if (UL <= mid) update(root << 1, L, mid, UL, UR, delta);
    if (UR > mid) update(root << 1 | 1, mid + 1, R, UL, UR, delta);
  }
};

int main() {
  Solution s;
  vector<int> birth = {1900, 1901, 1950};
  vector<int> death = {1948, 1951, 2000};
  cout << s.maxAliveYear(birth, death) << endl;
  return 0;
}