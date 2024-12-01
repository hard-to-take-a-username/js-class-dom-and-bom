const stopTask = document.getElementById('stop-task');
let timeout = null;
let i = 0
window.addEventListener('load', () => {
    console.log('start');
    timeout = setInterval(() => {
        console.log(i++)
    }, 1000)
})

stopTask.addEventListener('click', () => {
    clearInterval(timeout)
})