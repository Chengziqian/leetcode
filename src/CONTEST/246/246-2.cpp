//
// Created by 程子骞 on 2021/6/20.
//

#include <vector>
#include <string>
using namespace std;

class Solution {
public:
  int numberOfRounds(string startTime, string finishTime) {
    int start = covertMinus(startTime);
    int end = covertMinus(finishTime);
    if (start <= end) {
      return end / 15 - (start + 14) / 15;
    } else {
      return 24 * 60 / 15 - (start + 14) / 15 + end / 15;
    }
  }

  int covertMinus(string& time) {
    int hours = stoi(time.substr(0, 2));
    int minus = stoi(time.substr(3, 2));
    return hours * 60 + minus;
  }
};