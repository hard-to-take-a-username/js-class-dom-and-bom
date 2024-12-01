/**
 * @description 是否捕获 true为捕获 false为冒泡
 * @type {boolean}
 */
const capture = false

const div2 = document.getElementById('div2')
const div3 = document.getElementById('div3')

div2.addEventListener('click', () => console.log('div2'), capture)
div3.addEventListener('click', (e) => {
    console.log('div3')
    e.stopPropagation()
}, capture)
document.addEventListener('click', () => console.log('document'), capture)
window.addEventListener('click', () => console.log('window'), capture)