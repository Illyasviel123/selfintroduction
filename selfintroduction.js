window.onload=function(){
const nav1 = document.querySelector('#introduction')
const nav2 = document.querySelector('#qianduan')
const nav3 = document.querySelector('#album')
const blank1 = document.querySelector('.blank1')
const blank2 = document.querySelector('.blank2')
const blank3 = document.querySelector('.blank3')

function clear(){
    let a = document.querySelector('.active')
    let b = document.querySelector('.act')
    a.classList.remove('active')
    b.classList.remove('act')
}

nav1.addEventListener('click',function(){
    clear()
    blank1.classList.add('active')
    nav1.classList.add('act')
})
nav2.addEventListener('click',function(){
    clear()
    blank2.classList.add('active')
    nav2.classList.add('act')
})
nav3.addEventListener('click',function(){
    clear()
    blank3.classList.add('active')
    nav3.classList.add('act')
})
}