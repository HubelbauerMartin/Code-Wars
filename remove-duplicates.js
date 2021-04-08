const assert = require('assert');

function deleteNth(/** @type {number[]} */ arr,/** @type {number} */ n) {
  const result = []

  for (const number of arr) {
    const occurences = result.filter(num => number === num).length
    if (occurences < n) {
      result.push(number)
    }
  }
  return result
}


assert.deepStrictEqual(deleteNth([20, 37, 20, 21], 1), [20, 37, 21])
assert.deepStrictEqual(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [1, 1, 3, 3, 7, 2, 2, 2])
