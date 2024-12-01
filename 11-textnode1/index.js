const div = document.querySelector('div');
const buttons = document.querySelectorAll('button');

console.log(div.childNodes)
buttons[0].onclick = function () {
    let text = document.createTextNode("Hello")
    div.appendChild(text);
    console.log(div.childNodes)
}

buttons[1].onclick = function () {
    const text = div.childNodes[0]
    text.nodeValue += "123456"
}

buttons[2].onclick = function () {
    div.childNodes[0].deleteData(0, 1)
}

buttons[3].onclick = function () {
    div.childNodes[0].replaceData(2, 2, "*****")
}