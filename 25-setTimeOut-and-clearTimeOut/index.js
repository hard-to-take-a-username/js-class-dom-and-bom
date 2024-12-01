const stopTask = document.getElementById('stop-task');
/**
 * @description 一个表示定时器的id
 * @type {number | null}
 */
let timeout = null;

/** 页面加载过后，开始计时 */
window.addEventListener('load', () => {
    console.log('start');
    timeout = setTimeout(() => {
        alert("Hello World!")
    }, 5000)
})

/** 点击id为stop-task的元素，停止计时 */
stopTask.addEventListener('click', () => {
    clearTimeout(timeout)
})