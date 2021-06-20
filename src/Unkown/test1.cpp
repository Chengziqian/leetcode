//
// Created by ZiqianCheng on 2021/6/9.
//

#include <vector>
#include <string>
using namespace std;
class Solution {
public:
  /**
   * Note: 类名、方法名、参数名已经指定，请勿修改
   *
   *
   * 输出每个站点区间
   * @param arr int整型vector 每个站点的编号
   * @return string字符串vector
   */
  vector<string> findConnectedStation(vector<int>& arr) {
    int start = -1;
    bool flag = false;
    vector<string> ans;
    for (int i = 0; i + 1 < arr.size(); ++i) {
      if (arr[i] + 1 == arr[i + 1] || arr[i] - 1 == arr[i + 1]) {
        if (!flag) {
          start = arr[i];
          flag = true;
        }
      } else {
        if (flag) {
          string str = to_string(min(start, arr[i])) + "-" + to_string(max(start, arr[i]));
          ans.push_back(str);
        }
        flag = false;
      }
    }
    if (flag) {
      string str = to_string(min(start, arr.back())) + "-" + to_string(max(start, arr.back()));
      ans.push_back(str);
    }
    return ans;
  }
};
