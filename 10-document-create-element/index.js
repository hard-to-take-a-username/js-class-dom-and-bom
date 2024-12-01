const box = document.querySelector('.box');

/**
 * @description 添加一个div
 */
function addDiv() {
    const div = document.createElement('div');
    div.className = 'one-line'
    box.appendChild(div);
}