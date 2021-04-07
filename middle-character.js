function getMiddle(/** @type {string} */ s) {
    if (s.length % 2 == 1) {
        let index = (s.length / 2)
        index = Math.trunc(index)
        return s[index]
    }
    const index = (s.length / 2) - 1
    return s.slice(index, index + 2)
}

console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");
