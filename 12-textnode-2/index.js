// index.js
const div = document.querySelector('div');
const buttons = document.querySelectorAll('button');

buttons[0].onclick = function () {
    let text = document.createTextNode("Hello")
    div.appendChild(text);
    div.normalize()  // 合并所有的文本节点
}

buttons[1].onclick = function () {
    div.childNodes[0].nodeValue += "123456"
    // 往文本节点添加一个字符串 "123456"
}

buttons[2].onclick = function () {
    div.childNodes[0].deleteData(0, 1)
    // 从第1个字符（下标是0）开始 删除一个字符 （这里就是删除第一个字符）
}

buttons[3].onclick = function () {
    div.childNodes[0].replaceData(2, 2, "*****")
    // 从第3个字符（下标为2）开始，到第4个字符，替换成 "*****"
}

buttons[4].onclick = function () {
    div.childNodes[0].splitText(5)
    // 从第5个开始拆分文本节点
    console.log(div.childNodes.length)
    console.log(div.childNodes[0]) // 前五个
    console.log(div.childNodes[1])
}