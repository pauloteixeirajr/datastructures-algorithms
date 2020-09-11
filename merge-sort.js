// In order to implement merge sort, it's useful to first implement
// a function responsible for merging two sorted arrays
// Given two arrays which are sorted, this helper function should
// create a new array which is sorted, and consists of all the
// elements in the two input arrays
// This function should not modify the parameters passed to it

// Helper Function Pseudocode
// - Create an empty array, search for the smallest values in each input array
// - While there are still values we haven't searched for...
// -- If the value in the first array is smaller than the value in the second array
//    push the value in the first array into our results and move on to the next
//    value in the first array
// -- If the value in the first array is larger than the value in the second array
//    push the value in the second array into our results and move on to the next
//    value in the second array
// -- Once we exhaust one array, push in all remaining values from the other array

/**
 * Merge Helper Implementation
 * @param {number[]} arr1
 * @param {number[]} arr2
 *
 * @returns {number[]} The newly sorted array
 */
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  // Since the arrays can have different sizes,
  // continue looping until it reaches the end
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

// Merge Sort Pseudocode
// - Break up the array into halves until you have arrays that are empty or have one element
// - Once you have smaller sorted arrays, merge those arrays with other sorted arrays until
//   you are back at teh full length of the passed array.
// - Once the array has been merged back together, return the merged (and sorted) array.

/**
 * Merge Sort Implementation
 * @param {number[]} arr
 *
 * @returns {number[]} The sorted array
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  // Split the arrays in halves
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
