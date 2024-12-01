const [div, remove] = document.querySelectorAll('div');
/*
这里和
const divElements = document.querySelectorAll('div')
const div = divElements[0]
const remove = divElements[1]
是一样的
*/
let i = 0
div.onclick = function () {
    console.log(i++)
    // console.log(i)
    // i++
    // 和这两行代码的结果是一样的
}

remove.onclick = () => {
    div.onclick = null; // 删除上面div的事件处理程序
}