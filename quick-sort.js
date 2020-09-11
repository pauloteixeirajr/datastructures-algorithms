// In order to implement quick sort, it is useful to first implement
// a function responsible for arranging elements in an array on either
// side of a pivot.
// Given an array, this helper function should designate an element
// as the pivot. It should then rearrange elements in the array so that
// all values greater than the pivot are moved to the right of the pivot.
// The order of elements on either side of the pivot doesn't matter.
// The helper should not create a new array, but change the existing one
// When complete, the helper should return the index of the pivot

// The runtime of quick sort depends in part on how one selects the pivot
// Ideally the pivot should be chosen so that it is roughly the median value
// in the data set you are sorting.
// For simplicity, we will always choose the pivot to be the first element

// Pivot Helper Pseudocode
// - It should accept 3 arguments: an array, a start index and an end index
//   (these can default to 0 and the array length minus 1, respectively)
// - Grab the pivot from the start of the array
// - Store the current pivot index in a variable
//   (this will keep track of where the pivot should end up)
// - Loop through the array from the start unil the end
// - If the pivot is greater than the current element, increment the pivot index
//   variable and then swap the current element with the element at the pivot index
// - Swap the starting element (i.e. the pivot) with the pivot index
// - Return the pivot index

/**
 * Pivot Helper Implementation
 * @param {number[]} array
 * @param {number} start
 * @param {number} end
 *
 * @returns {number} The pivot index
 */
function pivot(array, start = 0, end = array.length - 1) {
  /**
   * Swap Helper Implementation
   * @param {number[]} arr
   * @param {number} i
   * @param {number} j
   */
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  let pivot = array[start];
  let swapIndex = start;

  for (let i = start + 1; i < array.length; i++) {
    if (pivot > array[i]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }

  swap(array, start, swapIndex);

  return swapIndex;
}

// Quick Sort Pseudocode
// - Call the pivot helper on the array
// - When the helper returns to you the updated pivot index
//   recursively call the pivot helper on the subarray to the
//   left of that index, and the subarray to the right of that index.
// - Your base case occurs when you consider a subarray with less than 2 elements

/**
 *
 * @param {number[]} array
 * @param {number} left
 * @param {number} rigth
 */
function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);

    // Left side of the subarray
    quickSort(array, left, pivotIndex - 1);
    // Right side of the subarray
    quickSort(array, pivotIndex + 1, right);
  }

  return array;
}
