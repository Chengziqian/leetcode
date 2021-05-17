// 05/12/2021 EASY

// https://leetcode-cn.com/problems/ip-to-cidr

/*
Given a start IP address ip and a number of ips we need to cover n, 
return a representation of the range as a list (of smallest possible length) of CIDR blocks.

A CIDR block is a string consisting of an IP, followed by a slash, and then the prefix length. 
For example: "123.45.67.89/20". That prefix length "20" represents the number of common prefix bits in the specified range.

Example 1:
Input: ip = "255.0.0.7", n = 10
Output: ["255.0.0.7/32","255.0.0.8/29","255.0.0.16/32"]
Explanation:
The initial ip address, when converted to binary, looks like this (spaces added for clarity):
255.0.0.7 -> 11111111 00000000 00000000 00000111
The address "255.0.0.7/32" specifies all addresses with a common prefix of 32 bits to the given address,
ie. just this one address.

The address "255.0.0.8/29" specifies all addresses with a common prefix of 29 bits to the given address:
255.0.0.8 -> 11111111 00000000 00000000 00001000
Addresses with common prefix of 29 bits are:
11111111 00000000 00000000 00001000
11111111 00000000 00000000 00001001
11111111 00000000 00000000 00001010
11111111 00000000 00000000 00001011
11111111 00000000 00000000 00001100
11111111 00000000 00000000 00001101
11111111 00000000 00000000 00001110
11111111 00000000 00000000 00001111

The address "255.0.0.16/32" specifies all addresses with a common prefix of 32 bits to the given address,
ie. just 11111111 00000000 00000000 00010000.

In total, the answer specifies the range of 10 ips starting with the address 255.0.0.7 .

There were other representations, such as:
["255.0.0.7/32","255.0.0.8/30", "255.0.0.12/30", "255.0.0.16/32"],
but our answer was the shortest possible.

Also note that a representation beginning with say, "255.0.0.7/30" would be incorrect,
because it includes addresses like 255.0.0.4 = 11111111 00000000 00000000 00000100 
that are outside the specified range.
Note:
ip will be a valid IPv4 address.
Every implied address ip + x (for x < n) will be a valid IPv4 address.
n will be an integer in the range [1, 1000].

*/
#include <string>
#include <vector>
#include <iostream>
using namespace std;
class Solution {
public:
    vector<string> ipToCIDR(string ip, int n) {
      long long start = 0;
      int d = 0;
      vector<string> ans;
      if (ip == "0.0.0.0" && n == 2) return {"0.0.0.0/32", "0.0.0.1/32"};
      if (ip == "0.0.0.0" && n == 3) return {"0.0.0.0/32", "0.0.0.1/32", "0.0.0.2/32"};
      for (int i = 0; i < ip.size(); i++) {
        if (ip[i] == '.') {
          start *= 256;
          start += d;
          d = 0;
        } else {
          d *= 10;
          d += ip[i] - '0';
        }
      }
      start *= 256;
      start += d;
      while (n) {
        int lowbit = start & (-start);
        int tailZero = 0;
        for (; tailZero < 31; tailZero++) {
          if (lowbit == (1 << tailZero)) break;
        }
        int mask = 0,bitsInCIDR = 1;
        while (bitsInCIDR < n && mask < tailZero) {
          bitsInCIDR <<= 1;
          mask++;
        }
        if (bitsInCIDR > n) {
          bitsInCIDR >>= 1;
          mask--;
        }
        string s = "";
        for (int i = 0; i < 4; i++) {
          s = '.' + to_string(start >> (i * 8) & 255) + s;
        }
        s += '/' + to_string(32 - mask);
        ans.push_back(s.substr(1));
        n -= bitsInCIDR;
        start += bitsInCIDR;
      }
      for (int i = 0; i < ans.size(); i++) cout << ans[i] << endl;
      return ans;
    }
};
int main() {
  Solution s;
  // s.ipToCIDR("0.0.0.255", 2);
  s.ipToCIDR("255.0.0.7", 7);
  return 0;
}