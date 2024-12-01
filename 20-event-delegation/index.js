/**
 * @param {MouseEvent} e - 事件的event对象
 */
function showColor(e) {
    const x = e.target;
    /** 判断是不是li标签 */
    if (x.nodeName.toLowerCase() === 'li') {
        alert('The color is ' + x.innerHTML);
    }
}

document.addEventListener('click', showColor);