/** @type {HTMLCollectionOf<Element>} */
const box = document.getElementsByClassName("box")
console.log(box)  // 前5个

/** @type {HTMLCollectionOf<Element>} */
const even = document.getElementsByClassName("even")
console.log(even)  // 第2 4 6个

const boxAndEven = document.getElementsByClassName("box even")
console.log(boxAndEven)  // 第2个
