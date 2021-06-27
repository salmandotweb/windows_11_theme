const computer = document.querySelector('.comp')
const panel = document.querySelector('.window-panel')

computer.addEventListener('click', ()=>{
    panel.classList.toggle('show')
})