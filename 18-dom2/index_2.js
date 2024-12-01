const div1 = document.querySelector('#div1');
const removeElement = document.querySelector('#remove');
let i = 0

div1.addEventListener('click', () => {
    div1.innerHTML = (i++).toString()
})
removeElement.addEventListener('click', () => {
    div1.removeEventListener('click', () => {
        div1.innerHTML = (i++).toString()
    })
})