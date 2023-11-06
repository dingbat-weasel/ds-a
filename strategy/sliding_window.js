/*
SLIDING WINDOW
- This pattern involves creating a WINDOW which can either by an array or number from one position to another
- Depending on a certain condition, the window either increases or closes (and a new window is created)
- Very useful for keeping track of a subset of data in an array/string etc.
*/

/*
Example:
Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
*/

// time: O(n)
function maxSubarraySum(arr, num) {
  //
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  // sum together n elements
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  // keep value in memory
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    // subtract value on left and add value on right
    tempSum = tempSum - arr[i - num] + arr[i];
    // store higher of the two
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
