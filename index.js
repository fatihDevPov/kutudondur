const returnBtn = document.getElementById('returnBtn');
const container = document.getElementById('container')


returnBtn.addEventListener('click',()=>{
    container.classList.toggle('active')
})