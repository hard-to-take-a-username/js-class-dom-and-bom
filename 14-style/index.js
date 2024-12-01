const text = document.querySelector('#text');

/**
 * @description 让字体在每次执行的时候变大1px
 */
function bigger() {
    console.log(text.style.fontSize)
    text.style.fontSize = (Number(text.style.fontSize.split('px')[0]) + 1) + 'px';
}

/**
 * @description 让字体在每次执行的时候变小1px
 */
function smaller() {
    console.log(text.style.fontSize)
    text.style.fontSize = (Number(text.style.fontSize.split('px')[0]) - 1) + 'px';
}