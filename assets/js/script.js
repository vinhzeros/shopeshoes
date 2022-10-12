const OpenMenu = document.querySelector('.nav-open-btn')
const showOpenMenu = document.querySelector('.navbar')

OpenMenu.addEventListener('click',()=>{
  showOpenMenu.classList.toggle('active')
})

const closeOpenMenu = document.querySelector('.nav-close-btn')
closeOpenMenu.addEventListener('click',()=>{
  showOpenMenu.classList.remove('active')
})

