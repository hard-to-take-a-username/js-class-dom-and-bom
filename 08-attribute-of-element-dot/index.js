/**
 *  @type {HTMLDivElement}
 */
const element = document.getElementsByTagName("div")[0]
console.log(element.id)  // id1
console.log(element.className)  // class1
console.log(element.onclick)  // 注意: 这里输出的是一个函数
console.log(element['data-my-special-label'])  // undefined

/**
 * @description 把e的class设置成 "red"
 * @param {Element} e - 要修改class的元素
 */
function handleClick(e) {
    e.className = "red"
}