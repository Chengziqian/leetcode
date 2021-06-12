/*
 * 比特币最大收益
详细描述
众所周知，虚拟货币价格波动巨大，且每一秒都在变，假设有一个数组代表着比特币在未来一小段时间内每分钟的价格。请设计一个算法，根据该数组，算出应该在第几分钟买入，第几分钟卖出，才能实现最大收益，并返回这三个数据。

假设整个期间只能发生2次交易，先买入，再全部卖出，不考虑手续费。

如果最大收益为0，返回[0, 0, 0]

收益金额四舍五入，保留小数后4位

其他
时间限制: 1000ms

内存限制: 256.0MB

输入输出示例
示例1
输入
复制
[40000,41000,39000,38000,36000,3500]
输出
复制
[1,2,1000]
说明
第一分钟买入，第二分钟卖出，收益最大，之后一直都在跌了
示例2
输入
复制
[38000,41000,40000,37000,41000,42000]
输出
复制
[4,6,5000]
说明
第四天买入，最后一天卖出的收益最大
 *
 */

#include <vector>
#include <algorithm>
#include <math.h>
using namespace std;
class Solution {
public:
  /**
   * Note: 类名、方法名、参数名已经指定，请勿修改
   *
   *
   *
   * @param priceList float浮点型vector
   * @return float浮点型vector
   */
  vector<float> maxProfit(vector<float>& priceList) {
    int n = priceList.size();
    float currentValue = 0;
    float minValue = priceList[0];
    int minIndex = 0;
    int buyIndex = 0, sellIndex = 0;
    for (int i = 1; i < n; ++i) {
      if (currentValue < priceList[i] - minValue) {
        sellIndex = i;
        buyIndex = minIndex;
        currentValue = priceList[i] - minValue;
      }
      if (minValue > priceList[i]) {
        minIndex = i;
        minValue = priceList[i];
      }
    }
    if (currentValue == 0) {
      return {0, 0, 0};
    }
    return { (float)buyIndex + 1, (float)sellIndex + 1, round(currentValue * 1000) / 1000 };
  }
};
