'use strict'
const instChild = document.querySelectorAll('.Instruments-child')
const backImg = document.querySelectorAll('.Backgrounds-img')

instChild.forEach((eachChild,index)=>{
    eachChild.addEventListener('mouseenter', () => {
        backImg.forEach(backImg => backImg.classList.remove('isActive'))
        backImg[index].classList.add('isActive')
    })
    eachChild.addEventListener('mouseleave', () => {
        backImg.forEach(backImg => backImg.classList.remove('isActive'))
    })
})