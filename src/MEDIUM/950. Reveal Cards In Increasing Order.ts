// 09/14/2020 MEDIUM ???

// https://leetcode-cn.com/problems/reveal-cards-in-increasing-order/

function deckRevealedIncreasing(deck: number[]): number[] {
  const sortDeck = deck.sort((a, b) => b - a);
  const queue: number[] = [];
  for (let i = 0; i < sortDeck.length; i++) {
    queue.push(sortDeck[i]);
    if (i === sortDeck.length - 1) break;
    const top = queue.shift() as number;
    queue.push(top);
  }
  return queue.reverse();
};
