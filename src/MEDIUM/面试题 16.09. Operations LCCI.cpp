// 05/11/2021 MEDIUM

// https://leetcode-cn.com/problems/operations-lcci/

/*
Write methods to implement the multiply, subtract, and divide operations for integers. 
The results of all of these are integers. Use only the add operator.

You should implement following methods:

Operations()  constructor
minus(a, b)  Subtraction, returns a - b
multiply(a, b)  Multiplication, returns a * b
divide(a, b)  Division, returns a / b
Example:

Operations operations = new Operations();
operations.minus(1, 2); //returns -1
operations.multiply(3, 4); //returns 12
operations.divide(5, -2); //returns -2
Note:

You can assume inputs are always valid, that is, e.g., denominator will not be 0 in division.
The number of calls will not exceed 1000.

*/

class Operations {
public:
    Operations() {

    }
    
    int minus(int a, int b) {
      return a - b;
    }
    
    int multiply(int a, int b) {
      return a * b;
    }
    
    int divide(int a, int b) {
      return a / b;
    }
};

/**
 * Your Operations object will be instantiated and called as such:
 * Operations* obj = new Operations();
 * int param_1 = obj->minus(a,b);
 * int param_2 = obj->multiply(a,b);
 * int param_3 = obj->divide(a,b);
 */

int main() {
  return 0;
}