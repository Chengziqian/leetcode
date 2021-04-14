import { PriorityQueue } from '../../../utils/index';
function getNumberOfBacklogOrders(orders: number[][]): number {
  const MOD = 1e9 + 7;
  const sell: PriorityQueue<number[]> = new PriorityQueue<number[]>((a, b) => a[0] < b[0]);
  const buy: PriorityQueue<number[]> = new PriorityQueue<number[]>((a, b) => a[0] > b[0]);
  for (let i = 0; i < orders.length; i++) {
    let [price, amount, type] = orders[i];
    if (type === 0) {
      while (!sell.empty() && amount) {
        let [sellPrice, sellAmount] = sell.remove();
        if (sellPrice <= price) {
          if (sellAmount <= amount) {
            amount -= sellAmount;
            sellAmount = 0;
          } else {
            sellAmount -= amount;
            amount = 0;
          }
        } else {
          sell.add([sellPrice, sellAmount]);
          break;
        }
        if (sellAmount !== 0) {
          sell.add([sellPrice, sellAmount]);
        }
      }
      if (amount !== 0) {
        buy.add([price, amount]);
      }
    } else {
      while (!buy.empty() && amount) {
        let [buyPrice, buyAmount] = buy.remove();
        if (buyPrice >= price) {
          if (buyAmount <= amount) {
            amount -= buyAmount;
            buyAmount = 0;
          } else {
            buyAmount -= amount;
            amount = 0;
          }
        } else {
          buy.add([buyPrice, buyAmount]);
          break;
        }
        if (buyAmount !== 0) {
          buy.add([buyPrice, buyAmount]);
        }
      }
      if (amount !== 0) {
        sell.add([price, amount]);
      }
    }
  }
  let ans = 0;
  while(!sell.empty()) {
    const [price, amount] = sell.remove();
    ans += amount % MOD;
  }
  while(!buy.empty()) {
    const [price, amount] = buy.remove();
    ans += amount % MOD;
  }
  return ans % MOD;
};