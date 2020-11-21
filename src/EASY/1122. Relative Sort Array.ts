// 11/13/2020 EASY

// https://leetcode-cn.com/problems/relative-sort-array/


/*

Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

 

Example 1:

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
 

Constraints:

arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
Each arr2[i] is distinct.
Each arr2[i] is in arr1.

 */

function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    return arr1.sort((a, b) => {
        let aIndex = arr2.indexOf(a);
        let bIndex = arr2.indexOf(b);
        if (aIndex === -1) aIndex = Infinity;
        if (bIndex === -1) bIndex = Infinity;
        if (aIndex === Infinity && bIndex === Infinity) return a - b;
        else return aIndex - bIndex;
    })
};