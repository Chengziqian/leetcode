// 10/21/2020 HARD

// https://leetcode-cn.com/problems/number-of-atoms/

/*
Given a chemical formula (given as a string), return the count of each atom.

The atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.

One or more digits representing that element's count may follow if the count is greater than 1. If the count is 1, no digits will follow. For example, H2O and H2O2 are possible, but H1O2 is impossible.

Two formulas concatenated together to produce another formula. For example, H2O2He3Mg4 is also a formula.

A formula placed in parentheses, and a count (optionally added) is also a formula. For example, (H2O2) and (H2O2)3 are formulas.

Given a formula, return the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than 1), followed by the second name (in sorted order), followed by its count (if that count is more than 1), and so on.

 

 

Example 1:

Input: formula = "H2O"
Output: "H2O"
Explanation: The count of elements are {'H': 2, 'O': 1}.
Example 2:

Input: formula = "Mg(OH)2"
Output: "H2MgO2"
Explanation: The count of elements are {'H': 2, 'Mg': 1, 'O': 2}.
Example 3:

Input: formula = "K4(ON(SO3)2)2"
Output: "K4N2O14S4"
Explanation: The count of elements are {'K': 4, 'N': 2, 'O': 14, 'S': 4}.
Example 4:

Input: formula = "Be32"
Output: "Be32"
 

Constraints:

1 <= formula.length <= 1000
formula consists of English letters, digits, '(', and ')'.
formula is always valid.

 */

function countOfAtoms(formula: string): string {
  const stack: {[Key: string]: number}[] = [];
  stack.push({});
  for (let i = 0; i < formula.length;) {
    if (formula[i] === '(') {
      stack.push({});
      i++;
    } else if (formula[i] === ')') {
      const pop = stack.pop() as {[Key: string]: number};
      let startIndex = ++i;
      while (i < formula.length && isDigit(formula[i])) i++;
      const multiplicity = i > startIndex ? +formula.slice(startIndex, i) : 1;
      const peek = stack[stack.length - 1];
      Object.keys(pop).forEach(name => {
        if (peek[name]) peek[name] += pop[name] * multiplicity;
        else peek[name] = pop[name] * multiplicity;
      })
    } else {
      const peek = stack[stack.length - 1];
      let startIndex = i;
      i++;
      while (i < formula.length && isLowerCase(formula[i])) i++;
      const nameStr = formula.slice(startIndex, i);
      startIndex = i;
      while (i < formula.length && isDigit(formula[i])) i++;
      const multiplicity = i > startIndex ? +formula.slice(startIndex, i) : 1;
      if (!peek[nameStr]) peek[nameStr] = multiplicity;
      else peek[nameStr] += multiplicity;
    }
  }
  
  const ans = stack.pop() as {[Key: string]: number};
  const keys = Object.keys(ans).sort();
  return keys.reduce((pre, cur) => `${pre}${cur}${ans[cur] > 1 ? ans[cur] : ''}`, '');
  
  function isUpperCase(char: string) {
    return char >= 'A' && char <= 'Z';
  }

  function isLowerCase(char: string) {
    return char >= 'a' && char <= 'z';
  }
  
  function isDigit(char: string) {
    return !isNaN(Number(char));
  }
};

