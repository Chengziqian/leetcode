//
// Created by 程子骞 on 2021/6/13.
//

#include <vector>
#include <unordered_set>
using namespace std;
class Solution {
public:
  bool mergeTriplets(vector<vector<int>>& triplets, vector<int>& target) {
    int n = triplets.size();
    unordered_set<int> first, second, third, unionSet;
    for (int i = 0; i < n; ++i) {
      if (triplets[i][0] <= target[0]) first.insert(i);

      if (triplets[i][1] <= target[1]) second.insert(i);

      if (triplets[i][2] <= target[2]) third.insert(i);
    }

    for (int i = 0; i < n; ++i) {
      if (first.count(i) && second.count(i) && third.count(i)) {
        unionSet.insert(i);
      }
    }
    int ansFirst = 0, ansSecond = 0, ansThird = 0;
    for (auto index: unionSet) {
      ansFirst = max(ansFirst, triplets[index][0]);
      ansSecond = max(ansSecond, triplets[index][1]);
      ansThird = max(ansThird, triplets[index][2]);
    }

    return ansFirst == target[0] && ansSecond == target[1] && ansThird == target[2];
  }
};