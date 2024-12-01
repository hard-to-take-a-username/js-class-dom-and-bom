// 05
/**
 * @type {HTMLCollectionOf<Element>}
 * @description 使用getElementsByClassName获取的所有class为a的元素
 */
const class_a = document.getElementsByClassName('a')

/**
 * @type {NodeListOf<Element>}
 * @description 使用querySelectorAll获取所有class为a的元素
 */
const a = document.querySelectorAll('.a')

/**
 * 触发点击事件过后，执行下面函数，输出a 和 class_a
 */
window.onclick = () => {
    a[0].className = 'b'
    console.log(a.length)  // 2
    console.log(class_a.length)  // 1
}