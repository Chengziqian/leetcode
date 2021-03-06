// 02/02/2021 EASY

// https://leetcode-cn.com/problems/day-of-the-year/

/*
Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

 

Example 1:

Input: date = "2019-01-09"
Output: 9
Explanation: Given date is the 9th day of the year in 2019.
Example 2:

Input: date = "2019-02-10"
Output: 41
Example 3:

Input: date = "2003-03-01"
Output: 60
Example 4:

Input: date = "2004-03-01"
Output: 61
 

Constraints:

date.length == 10
date[4] == date[7] == '-', and all other date[i]'s are digits
date represents a calendar date between Jan 1st, 1900 and Dec 31, 2019.
 */

function dayOfYear(date: string): number {
  const days: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const [y, m, d] = date.split('-');
  const sum: number[] = new Array(days.length + 1);
  sum[0] = 0;
  for (let i = 0; i < days.length; i++) {
    sum[i + 1] = sum[i] + days[i];
  }
  const ans = sum[+m - 1] + +d;
  if ((+y % 4 === 0 && +y % 100 !== 0) || +y % 400 === 0) {
    if (+m > 2) return ans + 1;
  }
  return ans;
};
