const assert = require('assert');

function openOrSenior(/** @type {[number, number][]} */ data) {
    const result = []
    for (const [age, handicap] of data) {
        if (age >= 55 && handicap > 7) {
            result.push('Senior')
        }
        else {
            result.push('Open')
        }
    }

    return result
}

assert.deepStrictEqual(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]), ['Open', 'Senior', 'Open', 'Senior'])
assert.deepStrictEqual(openOrSenior([[3, 12], [55, 1], [91, -2], [54, 23]]), ['Open', 'Open', 'Open', 'Open'])
assert.deepStrictEqual(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]), ['Senior', 'Open', 'Open', 'Open'])
