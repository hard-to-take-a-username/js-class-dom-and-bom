const box = document.getElementById('box');
console.log(box.getAttribute('id'))  // box
console.log(box.getAttribute('class')) // red  注意: 这里使用class而不是className
console.log(box.getAttribute('onclick')) // console.log('Hello world!')  注意：这里是一个字符串
console.log(box.getAttribute('data-my-special-label')) // 1234 注意: getAttribute可以获取自定义属性
console.log(box.getAttribute('not-exist')) // null

/**
 * @param {Element} e - 要修改的元素
 * @description class 改为 pink
 */
function changeClassToPink(e) {
    e.setAttribute('class', 'pink');
}

/**
 * @param {Element} e - 要修改的元素
 * @description 删除元素的id属性
 */
function removeId(e) {
    e.removeAttribute('id'); // 删除
}