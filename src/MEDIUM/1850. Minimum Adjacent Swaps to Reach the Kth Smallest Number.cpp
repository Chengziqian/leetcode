// 05/14/2021 MEIDUM

// https://leetcode-cn.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/

/*
You are given a string num, representing a large integer, and an integer k.

We call some integer wonderful if it is a permutation of the digits in num and is greater in value than num. There can be many wonderful integers. However, we only care about the smallest-valued ones.

For example, when num = "5489355142":
The 1st smallest wonderful integer is "5489355214".
The 2nd smallest wonderful integer is "5489355241".
The 3rd smallest wonderful integer is "5489355412".
The 4th smallest wonderful integer is "5489355421".
Return the minimum number of adjacent digit swaps that needs to be applied to num to reach the kth smallest wonderful integer.

The tests are generated in such a way that kth smallest wonderful integer exists.

 

Example 1:

Input: num = "5489355142", k = 4
Output: 2
Explanation: The 4th smallest wonderful number is "5489355421". To get this number:
- Swap index 7 with index 8: "5489355142" -> "5489355412"
- Swap index 8 with index 9: "5489355412" -> "5489355421"
Example 2:

Input: num = "11112", k = 4
Output: 4
Explanation: The 4th smallest wonderful number is "21111". To get this number:
- Swap index 3 with index 4: "11112" -> "11121"
- Swap index 2 with index 3: "11121" -> "11211"
- Swap index 1 with index 2: "11211" -> "12111"
- Swap index 0 with index 1: "12111" -> "21111"
Example 3:

Input: num = "00123", k = 1
Output: 1
Explanation: The 1st smallest wonderful number is "00132". To get this number:
- Swap index 3 with index 4: "00123" -> "00132"
 

Constraints:

2 <= num.length <= 1000
1 <= k <= 1000
num only consists of digits.

*/
#include <string>
#include <vector>
#include <iostream>
#include <unordered_map>
using namespace std;
class Solution {
public:
    int getMinSwaps(string num, int k) {
      vector<char> nums;
      for (auto c: num) nums.push_back(c);
      for (int i = 1; i <= k; i++) nextPermutation(nums);

      unordered_map<char, vector<int>> indexMap;
      for (int i = 0; i < nums.size(); ++i) {
        indexMap[nums[i]].push_back(i);
      }
      vector<int> list;
      vector<int> idx(10, 0);
      for (auto c: num) list.push_back(indexMap[c][idx[c - '0']++]);
      int ans = 0;
      merge(list, 0, list.size() - 1, ans);
      return ans;
    }

    void merge(vector<int>& list, int left, int right, int& ans) {
      if (left >= right) return;
      int mid = (left + right) >> 1;
      merge(list, left, mid, ans);
      merge(list, mid + 1, right, ans);
      vector<int> temp;
      int p = left, q = mid + 1;
      while (p <= mid || q <= right) {
        if (p > mid) {
          while (q <= right) temp.push_back(list[q++]);
          break;
        }
        if (q > right) {
          while (p <= mid) temp.push_back(list[p++]);
          break;
        }
        if (list[p] > list[q]) {
          ans += mid - p + 1;
          temp.push_back(list[q++]);
        } else {
          temp.push_back(list[p++]);
        }
      }
      for (int i = left; i <= right; i++) {
        list[i] = temp[i - left];
      }
    }

    void nextPermutation(vector<char>& nums) {
      int n = nums.size();
      int i = n - 2;
      while (i >= 0 && nums[i] >= nums[i + 1]) i--;
      if (i >= 0) {
        int j = n - 1;
        while (j > i && nums[j] <= nums[i]) j--;
        swap(nums[i], nums[j]);
      }
      reverse(nums.begin() + i + 1, nums.end());
    }
};

int main() {
  Solution s;
  cout << s.getMinSwaps("5489355142", 4) << endl;
  cout << s.getMinSwaps("11112", 2) << endl;
  cout << s.getMinSwaps("11112", 3) << endl;
  cout << s.getMinSwaps("11112", 4) << endl;
  cout << s.getMinSwaps("00123", 1) << endl;
}