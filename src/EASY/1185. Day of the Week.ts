// 04/20/2021 EASY

// https://leetcode-cn.com/problems/day-of-the-week/

/*
Given a date, return the corresponding day of the week for that date.

The input is given as three integers representing the day, month and year respectively.

Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.

 

Example 1:

Input: day = 31, month = 8, year = 2019
Output: "Saturday"
Example 2:

Input: day = 18, month = 7, year = 1999
Output: "Sunday"
Example 3:

Input: day = 15, month = 8, year = 1993
Output: "Sunday"
 

Constraints:

The given dates are valid dates between the years 1971 and 2100.

 */

function dayOfTheWeek(day: number, month: number, year: number): string {
  const benchmark = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
  const week= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  year -= month < 3 ? 1 : 0;
  return week[(year + Math.floor(year/4) - Math.floor(year/100) + Math.floor(year/400) + benchmark[month-1] + day) % 7];
};
