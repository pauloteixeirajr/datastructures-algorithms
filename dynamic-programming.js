/**
 * What is Dynamic Programming?
 *
 * A method for solving a complex problem by breaking it down
 * into a collection of simpler subproblems, solving each of
 * those subproblems just once, and storing their solutions.
 *
 * It only works on problems with Optimal Substructure & Overlapping subproblems
 *
 * Overlapping Subproblems
 * - A problem is said to have overlapping subproblems if it can be broken
 * down into subproblems, which are reused several times.
 *
 * Optimal Substructure
 * - A problem is said to have optimal substructure if an optimal solution
 * can be constructed from optimal solutions of its subproblems.
 */

// The problem with this solution is:
// Time complexity: O(2^n) (very slow & steep)
//
function fibRecursive(n) {
  if (n <= 2) return 1;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// Memoization
// Storing the results of expensive function calls
// and returning the cached result when the same input
// occurs again
// Time complexity: O(n)
function fibMemoized(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  const res = fibMemoized(n - 1, memo) + fibMemoized(n - 2, memo);
  memo[n] = res;

  return res;
}

// Tabulation: A bottom up approach
// Storing the results of a previous result in a
// "table" (usually an array)
// It will not throw stack overflow for large numbers
function fibTabulation(n) {
  if (n < 2) return 1;
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
