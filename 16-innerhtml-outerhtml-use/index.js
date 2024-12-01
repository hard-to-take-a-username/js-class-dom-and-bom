const insertElement = document.getElementById('insert');
const buttonElement = document.querySelector('button');
function insert() {
    insertElement.innerHTML = `
                <p>Hello world!</p>
                <div style="position: relative; top: 50px; height: 50px; width: 50px; background-color: mediumpurple;"></div>
                <div class="box">Sample Text</div>
            `
    // 这里在insertElement这里添加了三个子元素，insertElement还是存在的
    buttonElement.outerHTML = `<p id="add" onclick="pClick()">Don't click me!</p>`
    // 这里把之前的 <button> 改成了 <p>  button也被删除了
}

function pClick() {
    //  修改刚刚新添加的p元素
    document.querySelector('#add').innerText = "I am just a paragraph"
}