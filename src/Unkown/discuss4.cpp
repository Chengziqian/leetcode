//
// Created by 程子骞 on 2021/6/10.
//

#include <unordered_map>
#include <vector>
#include <iostream>
using namespace std;
class Solution {
public:
  int minSwapCount(vector<int>& arr) {
    unordered_map<int, int> index;
    int n = arr.size();
    for (int i = 0; i < n; ++i) {
      index[arr[i]] = i; // 保存下标
    }
    sort(arr.begin(), arr.end()); // 排序
    int ans = 0;
    int tail = n;
    for (int i = 0; i + 1 < n; ++i) {
      if (index[arr[i]] > index[arr[i + 1]]) { // 判断每个相邻的数，小的数下标大需要交换到尾部
        index[arr[i + 1]] = tail++;
        ans++;
      }
    }
    return ans;
  }
};

int main() {
  Solution s;
  vector<int> t = {10,11,12,1,3,4,5,6,7,8,9,2};
  cout << s.minSwapCount(t) << endl;
  return 0;
}