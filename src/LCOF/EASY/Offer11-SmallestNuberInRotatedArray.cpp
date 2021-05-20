// 05/17/2021 EASY

// https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/

/*
[3,4,5,1,2]
1
*/

#include <vector>
using namespace std;
class Solution {
public:
    int minArray(vector<int>& numbers) {
      int left = 0, right = numbers.size() - 1;
      while (left <= right && numbers[0] == numbers[right]) right--;
      while (left <= right) {
        int mid = (left + right) >> 1;
        if (numbers[mid] >= numbers[0]) left = mid + 1;
        else right = mid - 1;
      }
      return left == numbers.size() ? numbers[0] : numbers[left];
    }
};