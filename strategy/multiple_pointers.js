/*
MULTIPLE POINTERS
- Creating POINTERS or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
- VERY efficient for solving problems with minimal space complexity as well

- Take a linear data structure; while looking for a pair of values or something that meets some condition, use two references (values) and work in a direction
*/

/*
EXAMPLE: sumZero
Write a function called sumZero which accepts a SORTED array of integers. The function should find the FIRST pair where the sum is 0. Return an array that includes both values that sum to zero or underfined if a pair does not exist.
*/

// Naive Solution O(n^2) time, O(1) space
function naiveSumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}
// console.log(naiveSumZero([1, 2, 3, -2, -5]));

// Pointers on either end of arr working toward the middle
// Refactor - time: O(n) space: 0(1)
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// console.log(sumZero([-3, -2, -1, 0, 1, 4, 5, 10]));

// Moving from one end to the other
/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
*/
function countUniqueValues() {}
