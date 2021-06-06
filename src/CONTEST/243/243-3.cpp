//
// Created by 程子骞 on 2021/5/30.
//

#include <queue>
#include <vector>
using namespace std;
class Solution {
public:
  vector<int> assignTasks(vector<int>& servers, vector<int>& tasks) {
    auto cmp1 = [&](const int& a, const int& b) {
      return servers[a] == servers[b] ? a > b : servers[a] > servers[b];
    };
    auto cmp2 = [](const pair<int, int>& a, const pair<int, int>& b) {
      return a.second > b.second;
    };
    priority_queue<int, vector<int>, decltype(cmp1)> serversQueue(cmp1);
    priority_queue<pair<int, int>, vector<pair<int, int>>, decltype(cmp2)> busyServers(cmp2);
    for (int i = 0; i < servers.size(); ++i) {
      serversQueue.push(i);
    }
    int index = 0;
    int currentTime = 0;
    vector<int> ans(tasks.size());
    while (index < tasks.size()) {
      currentTime = max(currentTime, index);
      while (!busyServers.empty() && busyServers.top().second <= currentTime) {
        serversQueue.push(busyServers.top().first);
        busyServers.pop();
      }
      if (serversQueue.empty()) {
        currentTime = busyServers.top().second;
        while (!busyServers.empty() && busyServers.top().second == currentTime) {
          serversQueue.push(busyServers.top().first);
          busyServers.pop();
        }
      }
      busyServers.push(make_pair(serversQueue.top(), currentTime + tasks[index]));
      ans[index] = serversQueue.top();
      index++;
      serversQueue.pop();
    }
    return ans;
  }
};