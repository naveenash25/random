//cmd : node filename.js asc/desc
const given = [2, 12, 5, 7, 1, 4]
var arguments = process.argv
const order = arguments[2] || 'asc';
const maxNumber = given => given.reduce((a, b) => a > b ? a : b)
const minNumber = given => given.reduce((a, b) => a < b ? a : b)
let givenArray = given;
const sortedArray = given.map((_) => {
    let max = order == 'asc' ? maxNumber(givenArray) : minNumber(givenArray)
    givenArray = givenArray.filter(_ => _ !== max);
    return max
})
console.log(sortedArray)