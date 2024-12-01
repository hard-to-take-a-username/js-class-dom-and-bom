var age = 18
var addOne = (n) => console.log(n + 1)
console.log(age, window.age)  // 18  18

addOne(window.age)  // 19
window.addOne(window.age)  // 19

let number = 1
console.log(number) // 1
console.log(window.number) // undefined
const addTwo = (n) => console.log(n + 2)
addTwo(number) // 3
window.addTwo(number) // Uncaught TypeError: window.addTwo is not a function