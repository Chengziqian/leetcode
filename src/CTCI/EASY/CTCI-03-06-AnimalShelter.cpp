//
// Created by ZiqianCheng on 2021/5/26.
//

// EASY https://leetcode-cn.com/problems/animal-shelter-lcci/

/*
 * An animal shelter, which holds only dogs and cats, operates on a strictly"first in, first out" basis.
 * People must adopt either the"oldest" (based on arrival time) of all animals at the shelter,
 * or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type).
 * They cannot select which specific animal they would like.
 * Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat.
 * You may use the built-in Linked list data structure.

enqueue method has a animal parameter, animal[0] represents the number of the animal, animal[1] represents the type of the animal, 0 for cat and 1 for dog.

dequeue* method returns [animal number, animal type], if there's no animal that can be adopted, return [-1, -1].

Example1:

 Input:
["AnimalShelf", "enqueue", "enqueue", "dequeueCat", "dequeueDog", "dequeueAny"]
[[], [[0, 0]], [[1, 0]], [], [], []]
 Output:
[null,null,null,[0,0],[-1,-1],[1,0]]
Example2:

 Input:
["AnimalShelf", "enqueue", "enqueue", "enqueue", "dequeueDog", "dequeueCat", "dequeueAny"]
[[], [[0, 0]], [[1, 0]], [[2, 1]], [], [], []]
 Output:
[null,null,null,null,[2,1],[0,0],[1,0]]
Note:

The number of animals in the shelter will not exceed 20000.

 */

#include <queue>
using namespace std;
class AnimalShelf {
private:
  queue<pair<int, int>> catQueue;
  queue<pair<int, int>> dogQueue;
  int timestamp = 0;
  static const int CAT_TYPE = 0;
  static const int DOG_TYPE = 1;
public:
  AnimalShelf() = default;

  void enqueue(vector<int> animal) {
    if (animal[1] == CAT_TYPE) {
      catQueue.push(make_pair(animal[0], timestamp++));
    } else {
      dogQueue.push(make_pair(animal[0], timestamp++));
    }
  }

  vector<int> dequeueAny() {
    if (catQueue.empty() && dogQueue.empty()) return {-1, -1};
    else if (catQueue.empty()) {
      int dogCount = dogQueue.front().first;
      dogQueue.pop();
      return {dogCount, DOG_TYPE};
    } else if (dogQueue.empty()) {
      int catCount = catQueue.front().first;
      catQueue.pop();
      return {catCount, CAT_TYPE};
    } else {
      pair<int, int> dog = dogQueue.front();
      pair<int, int> cat = catQueue.front();
      if (dog.second < cat.second) {
        dogQueue.pop();
        return {dog.first, DOG_TYPE};
      } else {
        catQueue.pop();
        return {cat.first, CAT_TYPE};
      }
    }
  }

  vector<int> dequeueDog() {
    if (dogQueue.empty()) return {-1, -1};
    else {
      int count = dogQueue.front().first;
      dogQueue.pop();
      return {count, DOG_TYPE};
    }
  }

  vector<int> dequeueCat() {
    if (catQueue.empty()) return {-1, -1};
    else {
      int count = catQueue.front().first;
      catQueue.pop();
      return {count, CAT_TYPE};
    }
  }
};

/**
 * Your AnimalShelf object will be instantiated and called as such:
 * AnimalShelf* obj = new AnimalShelf();
 * obj->enqueue(animal);
 * vector<int> param_2 = obj->dequeueAny();
 * vector<int> param_3 = obj->dequeueDog();
 * vector<int> param_4 = obj->dequeueCat();
 */