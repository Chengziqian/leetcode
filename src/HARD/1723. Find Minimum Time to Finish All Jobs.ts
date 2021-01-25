// 01/16/2021 HARD

// https://leetcode-cn.com/problems/find-minimum-time-to-finish-all-jobs/

/*
1723. Find Minimum Time to Finish All Jobs
You are given an integer array jobs, where jobs[i] is the amount of time it takes to complete the ith job.

There are k workers that you can assign jobs to. Each job should be assigned to exactly one worker. The working time of a worker is the sum of the time it takes to complete all jobs assigned to them. Your goal is to devise an optimal assignment such that the maximum working time of any worker is minimized.

Return the minimum possible maximum working time of any assignment.

 

Example 1:

Input: jobs = [3,2,3], k = 3
Output: 3
Explanation: By assigning each person one job, the maximum time is 3.
Example 2:

Input: jobs = [1,2,4,7,8], k = 2
Output: 11
Explanation: Assign the jobs the following way:
Worker 1: 1, 2, 8 (working time = 1 + 2 + 8 = 11)
Worker 2: 4, 7 (working time = 4 + 7 = 11)
The maximum working time is 11.
 

Constraints:

1 <= k <= jobs.length <= 12
1 <= jobs[i] <= 107

*/

// function minimumTimeRequired(jobs: number[], k: number): number {
//   const n = jobs.length;
//   const N = 1 << n;
//   const time: number[] = new Array(N).fill(0);

//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < jobs.length; j++) {
//       if ((i & (1 << j)) === 0) continue; 
//       time[i] = time[i ^ (1 << j)] + jobs[j];
//     }
//   }
//   const dp: number[][] = new Array(k);
//   for (let i = 0; i < k; i++) {
//     dp[i] = new Array(N).fill(Number.MAX_SAFE_INTEGER);
//   }

//   for (let i = 0; i < k; i++) {
//     for (let state = 0; state < N; state++) {
//       if (i === 0) {
//         dp[i][state] = time[state];
//       } else {
//         for (let subset = state; subset; subset = (subset - 1) & state) {
//           dp[i][state] = Math.min(dp[i][state], Math.max(dp[i - 1][state ^ subset], time[subset]))
//         }
//       }
//     }
//   }

//   return dp[k - 1][N - 1];
// };


function minimumTimeRequired(jobs: number[], k: number): number {
  const n = jobs.length;
  const N = 1 << n;
  const time: number[] = new Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < jobs.length; j++) {
      if ((i & (1 << j)) === 0) continue; 
      time[i] = time[i ^ (1 << j)] + jobs[j];
      break;
    }
  }
  
  let left = Math.max(...jobs);
  let right = jobs.reduce((pre, cur) => pre + cur, 0);

  while (left <= right) {
    const mid = (left + right) >> 1;
    const dp: number[] = new Array(N).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for (let state = 0; state < N; state++) {
      for (let subset = state; subset; subset = (subset - 1) & state) {
        if (time[subset] <= mid) {
          dp[state] = Math.min(dp[state], dp[state ^ subset] + 1);
        }
      }
    }
    const minWorker = dp[N - 1];
    if (minWorker <= k) right = mid - 1;
    else left = mid + 1;
  }

  return left;
};