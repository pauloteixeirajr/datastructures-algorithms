// Radix Sort is a special sorting algorithm that works on lists of numbers
// - It never makes comparisons between elements
// - It exploits the fact that information about the size of a number
//   is encoded in the number of digits.
// - More digits means a bigger number

// It is useful to create helper functions to get a digit based on the index
// and a a helper to count the number of digits entered

/**
 * Get Digit From Index Helper
 * @param {number} num
 * @param {number} i
 * @returns {number} The digit in the number index
 */
function getDigitFromIndex(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/**
 * Count number of digits Helper
 * @param {number} num
 * @returns {number} The number of digits in a given number
 */
function digitCount(num) {
  if (num === 0) return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * Gets the larger (in length) number in the array
 * @param {number[]} nums
 * @returns {num} The max digit
 */
function numberWithMostDigits(nums) {
  let maxDigits = 0;
  for (const num of nums) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }

  return maxDigits;
}

// Radix Sort Pseudocode
// Define a function that accepts a list of numbers
// Figure out how many digits the largest number has
// Loop from "i = 0" up to this largest number of digits

// For each iteration of the loop:
// - Create buckets for each digit (0 to 9)
// - Place each number in the corresponding bucket based on it "ith" digit
// - Replace our existing array with values in our buckets, starting with 0
// Return list at the end

/**
 * Radix Sort Implementation
 * @param {number[]} nums
 * @returns {number[]} The sorted array
 */
function radixSort(nums) {
  const maxDigitCount = numberWithMostDigits(nums);

  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (const num of nums) {
      let digit = getDigitFromIndex(num, i);
      digitBuckets[digit].push(num);
    }
    nums = [].concat(...digitBuckets);
  }

  return nums;
}
