// 04/19/2021 HARD

// https://leetcode-cn.com/problems/basic-calculator-iv/

/*
Given an expression such as expression = "e + 8 - a + 5"
and an evaluation map such as {"e": 1} 
(given in terms of evalvars = ["e"] and evalints = [1]), 
return a list of tokens representing the simplified expression, such as ["-1*a","14"]

An expression alternates chunks and symbols, with a space separating each chunk and symbol.
A chunk is either an expression in parentheses, a variable, or a non-negative integer.
A variable is a string of lowercase letters (not including digits.) 
Note that variables can be multiple letters, 
and note that variables never have a leading coefficient or unary operator like "2x" or "-x".
Expressions are evaluated in the usual order: 
brackets first, then multiplication, then addition and subtraction. 
For example, expression = "1 + 2 * 3" has an answer of ["7"].

The format of the output is as follows:

For each term of free variables with non-zero coefficient, 
we write the free variables within a term in sorted order lexicographically. 
For example, we would never write a term like "b*a*c", only "a*b*c".
Terms have degree equal to the number of free variables being multiplied, 
counting multiplicity. (For example, "a*a*b*c" has degree 4.) 
We write the largest degree terms of our answer first, 
breaking ties by lexicographic order ignoring the leading coefficient of the term.
The leading coefficient of the term is placed directly to the left 
with an asterisk separating it from the variables (if they exist.)
A leading coefficient of 1 is still printed.
An example of a well formatted answer is ["-2*a*a*a", "3*a*a*b", "3*b*b", "4*a", "5*c", "-6"]
Terms (including constant terms) with coefficient 0 are not included.
For example, an expression of "0" has an output of [].
Examples:

Input: expression = "e + 8 - a + 5", evalvars = ["e"], evalints = [1]
Output: ["-1*a","14"]

Input: expression = "e - 8 + temperature - pressure",
evalvars = ["e", "temperature"], evalints = [1, 12]
Output: ["-1*pressure","5"]

Input: expression = "(e + 8) * (e - 8)", evalvars = [], evalints = []
Output: ["1*e*e","-64"]

Input: expression = "7 - 7", evalvars = [], evalints = []
Output: []

Input: expression = "a * b * c + b * a * c * 4", evalvars = [], evalints = []
Output: ["5*a*b*c"]

Input: expression = "((a - b) * (b - c) + (c - a)) * ((a - b) + (b - c) * (c - a))",
evalvars = [], evalints = []
Output: ["-1*a*a*b*b","2*a*a*b*c","-1*a*a*c*c","1*a*b*b*b","-1*a*b*b*c","-1*a*b*c*c","1*a*c*c*c","-1*b*b*b*c","2*b*b*c*c","-1*b*c*c*c","2*a*a*b","-2*a*a*c","-2*a*b*b","2*a*c*c","1*b*b*b","-1*b*b*c","1*b*c*c","-1*c*c*c","-1*a*a","1*a*b","1*a*c","-1*b*c"]
Note:

expression will have length in range [1, 250].
evalvars, evalints will have equal lengths in range [0, 100].

 */

namespace BasicCalculatorIV {
  interface Block {
    vars: {
      list: string[]
      coefficient: number
    }[]
    num: number
  }
  function basicCalculatorIV(expression: string, evalvars: string[], evalints: number[]): string[] {
    const blocks: Block[] = [];
    const opts: string[] = [];
    const values: Map<string, number> = new Map<string, number>();
    for (let i = 0; i < evalvars.length; i++) {
      values.set(evalvars[i], evalints[i]);
    }
    const priority: { [Key: string]: number } = {
      '+': 1,
      '-': 1,
      '*': 2,
    }
    blocks.push({ vars: [], num: 0 });
    let index = 0;
    while (index < expression.length) {
      const ex = expression[index];
      if (ex === ' ') {
        index++;
        continue;
      }
      if (ex === '(') {
        opts.push(ex);
      } else if (ex === ')') {
        while (opts.length && opts[opts.length - 1] !== '(') {
          calc();
        }
        opts.pop();
      } else {
        if (ex === '+' || ex === '-' || ex === '*') {
          while (opts.length && opts[opts.length - 1] !== '(') {
            if (priority[opts[opts.length - 1]] >= priority[ex]) calc();
            else break;
          }
          opts.push(ex);
        } else {
          let str = '';
          while (index < expression.length && (expression[index] !== ' ' && expression[index] !== ')')) str += expression[index++];
          if (values.has(str) || !Number.isNaN(+str)) {
            const num = values.has(str) ? values.get(str) : +str;
            blocks.push({ vars: [], num });
          } else {
            blocks.push({ vars: [{ list: [str], coefficient: 1 }], num: 0 })
          }
          continue;
        }
      }
      index++;
    }
    while (opts.length && opts[opts.length - 1] !== '(') calc();
    const block = blocks.pop();
    block.vars.sort((a, b) => {
      const aStr = a.list.join('*');
      const bStr = b.list.join('*');
      if (a.list.length === b.list.length) {
        return aStr < bStr ? -1 : 1;
      } else {
        return b.list.length - a.list.length;
      }
    })
    const ans = block.vars.map((v, i) => `${v.coefficient}*${v.list.join('*')}`);
    if (block.num) ans.push(`${block.num}`);
    return ans
    
    function calc() {
      const opt = opts.pop();
      const blockRight = blocks.pop();
      const blockLeft = blocks.pop();
      const newBlock: Block = { vars: [], num: 0 };
      if (opt === '+' || opt === '-') {
        newBlock.num = blockLeft.num + (blockRight.num * (opt === '+' ? 1 : -1));
        const record: Map<string, number> = new Map<string, number>();
        let index = 0;
        for (let i = 0; i < blockLeft.vars.length; i++) {
          const varStr = blockLeft.vars[i].list.join('*');
          record.set(varStr, index);
          newBlock.vars.push({ list: blockLeft.vars[i].list, coefficient: blockLeft.vars[i].coefficient });
          index++;
        }
        for (let j = 0; j < blockRight.vars.length; j++) {
          const varStr = blockRight.vars[j].list.join('*');
          if (record.has(varStr)) {
            newBlock.vars[record.get(varStr)].coefficient += blockRight.vars[j].coefficient * (opt === '+' ? 1 : -1);
          } else {
            newBlock.vars.push({ list: blockRight.vars[j].list, coefficient: blockRight.vars[j].coefficient * (opt === '+' ? 1 : -1) });
            index++;
          }
        }
      } else {
        newBlock.num = blockRight.num * blockLeft.num;
        const record: Map<string, number> = new Map<string, number>();
        let index = 0;
        for (let i = 0; i < blockLeft.vars.length; i++) {
          for (let j = 0; j < blockRight.vars.length; j++) {
            const newVar = [...blockLeft.vars[i].list, ...blockRight.vars[j].list];
            newVar.sort();
            const newCoefficient = blockLeft.vars[i].coefficient * blockRight.vars[j].coefficient;
            const varStr = newVar.join('*');
            if (record.has(varStr)) {
              newBlock.vars[record.get(varStr)].coefficient += newCoefficient;
            } else {
              newBlock.vars.push({ list: newVar, coefficient: newCoefficient });
              record.set(varStr, index);
              index++;
            }
          }
          if (blockRight.num) {
            const varStr = blockLeft.vars[i].list.join('*');
            if (record.has(varStr)) {
              newBlock.vars[record.get(varStr)].coefficient += blockRight.num * blockLeft.vars[i].coefficient;
            } else {
              newBlock.vars.push({ list: blockLeft.vars[i].list, coefficient: blockRight.num * blockLeft.vars[i].coefficient });
              record.set(varStr, index);
              index++;
            }
          }
        }
        if (blockLeft.num) {
          for (let i = 0; i < blockRight.vars.length; i++) {
            const varStr = blockRight.vars[i].list.join('*');
            if (record.has(varStr)) {
              newBlock.vars[record.get(varStr)].coefficient += blockLeft.num * blockRight.vars[i].coefficient;
            } else {
              newBlock.vars.push({ list: blockRight.vars[i].list, coefficient: blockLeft.num * blockRight.vars[i].coefficient });
              record.set(varStr, index);
              index++;
            }
          }
        }
      }
      newBlock.vars = newBlock.vars.filter(v => v.coefficient !== 0);
      blocks.push(newBlock);
    }
  };
}
