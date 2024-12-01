/**
 * @description 是否运行 stopPropagation()  stopImmediatePropagation() 这一部分
 * @type {boolean}
 */
let stop = false

const stop1_i = document.getElementById('stop1_i');
const stop2_i = document.getElementById('stop2_i');
const stop1 = document.getElementById('stop1');
const stop2 = document.getElementById('stop2');

document.addEventListener('click', () => console.log('document click'))
window.addEventListener('click', () => console.log('window click'))
document.getElementsByTagName('html')[0].addEventListener('click', () => console.log('html click'))

stop1.addEventListener('click', () => console.log('stop1 click 1'))
stop1.addEventListener('click', (e) => {
    console.log('stop1 click 2')
    stop && e.stopPropagation()
    // 相当于 if (stop) { e.stopPropagation() }
})
stop1.addEventListener('click', () => console.log('stop1 click 3'))

stop2.addEventListener('click', () => console.log('stop2 click 1'))
stop2.addEventListener('click', () => console.log('stop2 click 2'))

stop1_i.addEventListener('click', () => console.log('stop1_i click 1'))
stop1_i.addEventListener('click', (e) => {
    console.log('stop1_i click 2')
    stop && e.stopImmediatePropagation()
    // 相当于 if (stop) { e.stopImmediatePropagation() }
})
stop1_i.addEventListener('click', () => console.log('stop1_i click 3'))

stop2_i.addEventListener('click', () => console.log('stop2_i click 1'))
stop2_i.addEventListener('click', () => console.log('stop2_i click 2'))
