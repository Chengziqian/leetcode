//
// Created by ZiqianCheng on 2021/7/6.
//

// MEDIUM https://leetcode-cn.com/problems/display-table-of-food-orders-in-a-restaurant

/*
 * Given the array orders, which represents the orders that customers have done in a restaurant. More specifically orders[i]=[customerNamei,tableNumberi,foodItemi] where customerNamei is the name of the customer, tableNumberi is the table customer sit at, and foodItemi is the item customer orders.

Return the restaurant's “display table”. The “display table” is a table whose row entries denote how many of each food item each table ordered. The first column is the table number and the remaining columns correspond to each food item in alphabetical order. The first row should be a header whose first column is “Table”, followed by the names of the food items. Note that the customer names are not part of the table. Additionally, the rows should be sorted in numerically increasing order.

 

Example 1:

Input: orders = [["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]
Output: [["Table","Beef Burrito","Ceviche","Fried Chicken","Water"],["3","0","2","1","0"],["5","0","1","0","1"],["10","1","0","0","0"]]
Explanation:
The displaying table looks like:
Table,Beef Burrito,Ceviche,Fried Chicken,Water
3    ,0           ,2      ,1            ,0
5    ,0           ,1      ,0            ,1
10   ,1           ,0      ,0            ,0
For the table 3: David orders "Ceviche" and "Fried Chicken", and Rous orders "Ceviche".
For the table 5: Carla orders "Water" and "Ceviche".
For the table 10: Corina orders "Beef Burrito".
Example 2:

Input: orders = [["James","12","Fried Chicken"],["Ratesh","12","Fried Chicken"],["Amadeus","12","Fried Chicken"],["Adam","1","Canadian Waffles"],["Brianna","1","Canadian Waffles"]]
Output: [["Table","Canadian Waffles","Fried Chicken"],["1","2","0"],["12","0","3"]]
Explanation:
For the table 1: Adam and Brianna order "Canadian Waffles".
For the table 12: James, Ratesh and Amadeus order "Fried Chicken".
Example 3:

Input: orders = [["Laura","2","Bean Burrito"],["Jhon","2","Beef Burrito"],["Melissa","2","Soda"]]
Output: [["Table","Bean Burrito","Beef Burrito","Soda"],["2","1","1","1"]]
 

Constraints:

1 <= orders.length <= 5 * 10^4
orders[i].length == 3
1 <= customerNamei.length, foodItemi.length <= 20
customerNamei and foodItemi consist of lowercase and uppercase English letters and the space character.
tableNumberi is a valid integer between 1 and 500.
 */

#include <vector>
#include <unordered_map>
#include <unordered_set>
#include <string>
using namespace std;
class Solution {
public:
  vector<vector<string>> displayTable(vector<vector<string>>& orders) {
    unordered_map<string, unordered_map<string, int>> rc;
    unordered_set<string> foods;
    for (auto &order: orders) {
      string customer = order[0], table = order[1], food = order[2];
      rc[table][food]++;
      foods.insert(food);
    }
    vector<vector<string>> ans(1);
    for (auto food: foods) ans[0].emplace_back(food);
    sort(ans[0].begin(), ans[0].end());;
    ans[0].insert(ans[0].begin(), "Table");
    for (auto &[table, count]: rc) {
      vector<string> cur;
      cur.emplace_back(table);
      for (int i = 1; i < ans[0].size(); ++i) {
        cur.emplace_back(to_string(count[ans[0][i]]));
      }
      ans.emplace_back(cur);
    }
    sort(ans.begin() + 1, ans.end(), [](const vector<string>& a, const vector<string>& b) {
      return stoi(a[0]) < stoi(b[0]);
    });
    return ans;
  }
};