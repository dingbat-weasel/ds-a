/*
- This pattern uses objects or sets to collect values/frequencies of values
- This can often avoid the need for nested loops or O(N^2) operations with arrays/strings
- Example:
    - Write a function called 'same', which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.
*/

// Naive example; nested for loops run in O(n^2) time
function nestedSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// Parallel for loops run in O(n) time
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  // objects each count the frequency of individual values in the arrays
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // for each value in array count the frequency of the value
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // check that val^2 occurs in arr2 in equivalent frequency for each value
  for (let key in frequencyCounter1) {
    // does the square occur at all?
    if (!(key ** 2 in frequencyCounter2)) return false;
    // does it occur often enough?
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }
  return true;
}

/*
Anagrams
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
*/

function validAnagram(phrase1, phrase2) {
  // clean str in case of spaces
  const str1 = phrase1.split(' ').join('');
  const str2 = phrase2.split(' ').join('');
  // if str1 and str2 are different lengths, return false
  if (str1.length !== str2.length) {
    console.log(false);
    return false;
  }
  // create two empty frequency counter objects
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // loop over each str, creating a key value pair in obj for the letter and the frequency counter
  for (let val in str1) {
    if (!frequencyCounter1[str1[val]]) {
      frequencyCounter1[str1[val]] = 1;
    } else {
      frequencyCounter1[str1[val]] = frequencyCounter1[str1[val]] + 1;
    }
    console.log(frequencyCounter1);
  }
  for (let val in str2) {
    if (!frequencyCounter2[str2[val]]) {
      frequencyCounter2[str2[val]] = 1;
    } else {
      frequencyCounter2[str2[val]] = frequencyCounter2[str2[val]] + 1;
    }
    console.log(frequencyCounter2);
  }
  for (let key in frequencyCounter1) {
    // check if each letter in str1 exists in str2
    if (!key in frequencyCounter2) {
      console.log(false);
      return false;
    }
    // check that it exists the correct number of times
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      console.log(false);
      return false;
    }
  }
  console.log(frequencyCounter1, frequencyCounter2);
  console.log(true);
  return true;
}

// validAnagram('a decimal point', 'im a dot in place');

// Refactored validAnagram
function validAnagram2(str1, str2) {
  if (str1.length !== str2.length) return false;

  const lookup = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  console.log(true);
  return true;
}

console.log(validAnagram2('cat', 'tac'));
