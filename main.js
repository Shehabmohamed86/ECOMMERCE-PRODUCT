const bigPic = document.querySelector('.big-pic')
const hidePic = document.querySelector('.hide-imges')
const deleteActiveImg = document.querySelector('.delete')
const firstImg = document.querySelector('.first-img')
const secondPic = document.querySelector('.second-img')
const thirdPic = document.querySelector('.third-img')
const shoppingCart = document.querySelector('.shopping-cart')
const btnNum = document.querySelector('.btn-num')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')



bigPic.addEventListener('click',function(){
  hidePic.classList.add('active-img')
})



deleteActiveImg.addEventListener('click',function(){
  hidePic.classList.remove('active-img')
})

plus.addEventListener('click',addOne)
minus.addEventListener('click',minusONe)

function addOne(){
 if (btnNum.value === 0 || btnNum.value <9){
 btnNum.value ++

 }
}
function minusONe(){
 if (btnNum.value > 0 && btnNum.value <10){
 btnNum.value --

 }
}