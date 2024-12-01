/**
 * @description 删除一个class
 * @param {string} className - 要删除的class名
 */
function removeClass(className) {
    const remove = document.querySelector('#remove');
    const classes = remove.getAttribute("class").split(/\s+/)  // 正则表达式，\s+匹配1个或多个空白字符
    /** @description 获取 'w100px'的位置 找不到就返回-1 */
    const index = classes.indexOf(className)
    console.log(index)
    if (index >= 0) { // 如果找到了
        classes.splice(index, 1)  // 删除
    }

    remove.setAttribute("class", classes.join(" "))
}