/**
 * @type {HTMLCollectionOf<Element>}
 * @description 所有class名为a的
 */
const a = document.getElementsByClassName('a')

/**
 * @param {Element} element - 元素
 * @description 判断元素标签是否为div
 */
function isDivElement(element) {
    /** 这里也可以
     * return element.nodeName.toLowerCase() === "div"
     * nodeName是 Node 里面的属性，tagName是 Element 的属性，Element是继承Node的
     */
    return element.tagName.toLowerCase() === "div"
}

for (const element of a) {
    console.log(isDivElement(element))
}
// true false true