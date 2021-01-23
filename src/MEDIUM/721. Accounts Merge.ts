// 01/18/2021 MEDIUM

// https://leetcode-cn.com/problems/accounts-merge/

/*
Given a list accounts, each element accounts[i] is a list of strings, 
where the first element accounts[i][0] is a name, 
and the rest of the elements are emails representing emails of the account.

Now, we would like to merge these accounts. 
Two accounts definitely belong to the same person if there is some email that is common to both accounts. 
Note that even if two accounts have the same name, they may belong to different people as people could have the same name. 
A person can have any number of accounts initially, but all of their accounts definitely have the same name.

After merging the accounts, return the accounts in the following format: 
the first element of each account is the name, and the rest of the elements are emails in sorted order. 
The accounts themselves can be returned in any order.

Example 1:
Input: 
accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]
Output: [["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],  ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]
Explanation: 
The first and third John's are the same person as they have the common email "johnsmith@mail.com".
The second John and Mary are different people as none of their email addresses are used by other accounts.
We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'], 
['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.
Note:

The length of accounts will be in the range [1, 1000].
The length of accounts[i] will be in the range [1, 10].
The length of accounts[i][j] will be in the range [1, 30].

 */
import { UnionFind } from '../../utils/UnionFind';

function accountsMerge(accounts: string[][]): string[][] {
  const record: Map<string, number> = new Map<string, number>();
  let count = 0;
  for (let i = 0; i < accounts.length; i++) {
    for (let j = 1; j < accounts[i].length; j++) {
      if (!record.has(accounts[i][j])) {
        record.set(accounts[i][j], count++);
      }
    }
  }
  const uf = new UnionFind(count + accounts.length);
  for (let i = 0; i < accounts.length; i++) {
    const parent = count + i;
    for (let j = 1; j < accounts[i].length; j++) {
      const index = record.get(accounts[i][j]);
      const currentParent = uf.find(index);
      if (currentParent === index) {
        uf.union(index, parent);
      } else {
        uf.union(parent, currentParent);
      }
    }
  }
  const ans: string[][] = new Array(accounts.length);
  for (let i = 0; i < ans.length; i++) {
    ans[i] = [];
  }
  record.forEach((value, key) => {
    const index = uf.find(value) - count;
    if (!ans[index].length) ans[index].push(accounts[index][0]);
    ans[index].push(key);
  });
  
  for (let i = 0; i < ans.length; i++) {
    ans[i].sort();
  }
  
  return ans.filter(v => !!v.length);
};
