/** @type {HTMLCollectionOf<HTMLDivElement>} */
const divElement = document.getElementsByTagName("div")
const spanElement = document.getElementsByTagName("span")
console.log(divElement, spanElement)
console.log(divElement.length)
console.log(divElement.item(0))
console.log(divElement[1])
for (let i = 0; i < divElement.length; i++) {
    console.log(divElement[i])
}