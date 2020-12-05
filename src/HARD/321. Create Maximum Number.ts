// 12/02/2020 HARD

// https://leetcode-cn.com/problems/create-maximum-number/

/*

Given two arrays of length m and n with digits 0-9 representing two numbers. 
Create the maximum number of length k <= m + n from digits of the two. 
The relative order of the digits from the same array must be preserved. 
Return an array of the k digits.

Note: You should try to optimize your time and space complexity.

Example 1:

Input:
nums1 = [3, 4, 6, 5]
nums2 = [9, 1, 2, 5, 8, 3]
k = 5
Output:
[9, 8, 6, 5, 3]
Example 2:

Input:
nums1 = [6, 7]
nums2 = [6, 0, 4]
k = 5
Output:
[6, 7, 6, 0, 4]
Example 3:

Input:
nums1 = [3, 9]
nums2 = [8, 9]
k = 3
Output:
[9, 8, 9]

 */
function maxNumber(nums1: number[], nums2: number[], k: number): number[] {
  let stack1: number[] = [];
  let stack2: number[] = [];
  let ans: number[] = [];
  for (let i = 0; i <= k; i++) {
    let rest1 = nums1.length - i, rest2 = nums2.length - k + i;
    if (rest1 < 0 || rest2 < 0) continue;
    stack1 = []; stack2 = [];
    for (let m = 0; m < nums1.length; m++) {
      while (stack1.length && rest1 && stack1[stack1.length - 1] < nums1[m]) {
        stack1.pop();
        rest1--;
      }
      stack1.push(nums1[m]);
    }
    while (rest1--) stack1.pop();
    for (let n = 0; n < nums2.length; n++) {
      while (stack2.length && rest2 && stack2[stack2.length - 1] < nums2[n]) {
        stack2.pop();
        rest2--;
      }
      stack2.push(nums2[n]);
    }
    while (rest2--) stack2.pop();
    const cur = [];
    while (stack2.length || stack1.length) {
      if (!stack1.length) {
        cur.push(...stack2);
        break;
      }
      if (!stack2.length) {
        cur.push(...stack1);
        break;
      }
      if (stack1[0] < stack2[0]) {
        cur.push(stack2.shift() as number);
      } else if (stack1[0] > stack2[0]) {
        cur.push(stack1.shift() as number);
      } else {
        let index1 = 1, index2 = 1;
        let found = false;
        while (index1 < stack1.length && index2 < stack2.length) {
          if (stack1[index1] < stack2[index2]) {
            const arr = stack2.slice(0, index1 + 1);
            cur.push(...arr);
            stack2 = stack2.slice(index1 + 1);
            found = true;
            break;
          } else if (stack1[index1] > stack2[index2]) {
            const arr = stack1.slice(0, index1 + 1);
            cur.push(...arr);
            stack1 = stack1.slice(index1 + 1);
            found = true;
            break;
          }
          index1++;
          index2++;
        }
        if (!found) {
          if (index1 >= stack1.length) {
            cur.push(stack2.shift() as number);
          } else {
            cur.push(stack1.shift() as number);
          }
        }
      }
    }
    ans = arrMax(ans, cur);
  }
  return ans;
  
  function arrMax(arr1: number[], arr2: number[]) {
    if (arr1.length > arr2.length) return arr1;
    else if (arr1.length < arr2.length) return arr2;
    else {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > arr2[i]) return arr1;
        else if (arr1[i] < arr2[i]) return arr2;
      }
    }
    return arr1;
  }
};

