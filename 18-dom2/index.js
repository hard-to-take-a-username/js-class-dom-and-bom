const div1 = document.querySelector('#div1');
const removeElement = document.querySelector('#remove');
let i = 0

const handleClick = () => {
    div1.innerHTML = (i++).toString()
}

div1.addEventListener('click', handleClick)
removeElement.addEventListener('click', () => {
    div1.removeEventListener('click', handleClick)
})