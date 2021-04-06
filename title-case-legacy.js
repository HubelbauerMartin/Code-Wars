function titleCase(/** @type {string} */ title, /** @type {string} */ minorWords = '') {
    const words = title.split(' ')
    const ignoreWords = minorWords.split(' ').map(word => word.toLowerCase())
    const lowerCaseWords = words.map(word => word.toLowerCase())
    const capitalisedWords = lowerCaseWords.map((word, index) => {
        if (ignoreWords.includes(word) && index !== 0) {
            return word
        }

        return (word[0] !== undefined ? word[0].toUpperCase() : '') + word.slice(1)
    })

    const sentence = capitalisedWords.join(' ')
    return sentence
}
console.log(titleCase('') === '')
console.log(titleCase('a clash of KINGS', 'a an the of') === 'A Clash of Kings')
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In') === 'The Wind in the Willows')
console.log(titleCase('the quick brown fox') === 'The Quick Brown Fox')
