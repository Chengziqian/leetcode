// 11/18/2020 MEDIUM

// https://leetcode-cn.com/problems/tweet-counts-per-frequency/

/*

Implement the class TweetCounts that supports two methods:

1. recordTweet(string tweetName, int time)

Stores the tweetName at the recorded time (in seconds).
2. getTweetCountsPerFrequency(string freq, string tweetName, int startTime, int endTime)

Returns the total number of occurrences for the given tweetName per minute, hour, or day (depending on freq) starting from the startTime (in seconds) and ending at the endTime (in seconds).
freq is always minute, hour or day, representing the time interval to get the total number of occurrences for the given tweetName.
The first time interval always starts from the startTime, so the time intervals are [startTime, startTime + delta*1>,  [startTime + delta*1, startTime + delta*2>, [startTime + delta*2, startTime + delta*3>, ... , [startTime + delta*i, min(startTime + delta*(i+1), endTime + 1)> for some non-negative number i and delta (which depends on freq).  
 

Example:

Input
["TweetCounts","recordTweet","recordTweet","recordTweet","getTweetCountsPerFrequency","getTweetCountsPerFrequency","recordTweet","getTweetCountsPerFrequency"]
[[],["tweet3",0],["tweet3",60],["tweet3",10],["minute","tweet3",0,59],["minute","tweet3",0,60],["tweet3",120],["hour","tweet3",0,210]]

Output
[null,null,null,null,[2],[2,1],null,[4]]

Explanation
TweetCounts tweetCounts = new TweetCounts();
tweetCounts.recordTweet("tweet3", 0);
tweetCounts.recordTweet("tweet3", 60);
tweetCounts.recordTweet("tweet3", 10);                             // All tweets correspond to "tweet3" with recorded times at 0, 10 and 60.
tweetCounts.getTweetCountsPerFrequency("minute", "tweet3", 0, 59); // return [2]. The frequency is per minute (60 seconds), so there is one interval of time: 1) [0, 60> - > 2 tweets.
tweetCounts.getTweetCountsPerFrequency("minute", "tweet3", 0, 60); // return [2, 1]. The frequency is per minute (60 seconds), so there are two intervals of time: 1) [0, 60> - > 2 tweets, and 2) [60,61> - > 1 tweet.
tweetCounts.recordTweet("tweet3", 120);                            // All tweets correspond to "tweet3" with recorded times at 0, 10, 60 and 120.
tweetCounts.getTweetCountsPerFrequency("hour", "tweet3", 0, 210);  // return [4]. The frequency is per hour (3600 seconds), so there is one interval of time: 1) [0, 211> - > 4 tweets.
 

Constraints:

There will be at most 10000 operations considering both recordTweet and getTweetCountsPerFrequency.
0 <= time, startTime, endTime <= 10^9
0 <= endTime - startTime <= 10^4

 */

class TweetCounts {
  private readonly record: {[Key: string]: number[]};
  private readonly interval: {[Key: string]: number} = {
    'minute': 60,
    'hour': 3600,
    'day': 24 * 3600
  }
  constructor() {
    this.record = {};
  }

  recordTweet(tweetName: string, time: number): void {
    if (!this.record[tweetName]) {
      this.record[tweetName] = [time];
    } else {
      this.record[tweetName].push(time);
    }
    this.record[tweetName].sort((a, b) => a - b);
  }

  getTweetCountsPerFrequency(freq: string, tweetName: string, startTime: number, endTime: number): number[] {
    const ranges = [];
    const interval = this.interval[freq];
    for (let i = 0; i < Math.floor((endTime - startTime) / interval) + 1; i++) {
      ranges.push([startTime + (interval * i), Math.min(startTime + (interval * (i + 1)), endTime + 1)]);
    }
    const ans = [];
    for (let i = 0; i < ranges.length; i++) {
      const points = this.record[tweetName];
      let count = 0;
      for (let k = 0; k < points.length; k++) {
        if (points[k] >= ranges[i][0] && points[k] < ranges[i][1]) count++;
        else if (points[k] >= ranges[i][1]) break;
      }
      ans.push(count);
    }
    return ans;
  }
}

/**
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */
