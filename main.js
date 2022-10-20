const bigPic = document.querySelector('.big-pic')
const hidePic = document.querySelector('.hide-imges')
const deleteActiveImg = document.querySelector('.delete')
const firstImg = document.querySelector('.first-img')
const secondPic = document.querySelector('.second-img')
const thirdPic = document.querySelector('.third-img')
const shoppingCart = document.querySelector('.shopping-cart')



bigPic.addEventListener('click',function(){
  hidePic.classList.add('active-img')
})



deleteActiveImg.addEventListener('click',function(){
  hidePic.classList.remove('active-img')
})


thirdPic.addEventListener('click',function(){
 
})


