const bigPic = document.querySelector('.big-pic')
const hidePic = document.querySelector('.hide-imges')
const deleteActiveImg = document.querySelector('.delete')
const shoppingCart = document.querySelector('.shopping-cart')
const btnNum = document.querySelector('.btn-num')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const addCart = document.querySelector('.btn-cart')
const cartNum = document.querySelector('.num')
const empty = document.querySelector('.empty')
const textCart = document.querySelector('.text-cart')
const imgCart = document.querySelector('.cart')
const deleteValue = document.querySelector('.delete-value')
const images = document.querySelectorAll('.image')








plus.addEventListener('click',addOne)
minus.addEventListener('click',minusONe)






bigPic.addEventListener('click',function(){
  hidePic.classList.add('active-img')
})






deleteActiveImg.addEventListener('click',function(){
  hidePic.classList.remove('active-img')
})






addCart.addEventListener('click',function(){
  cartNum.classList.add('active-num')
  cartNum.innerHTML = btnNum.value

  let price = 125
  let newPrice = price * btnNum.value

    if(btnNum.value > 0){
       empty.innerHTML = `<img class = "text-img" src="images/image-product-1-thumbnail.jpg" alt=""> Fall Limited Edition Sneakers<br/>$${price}.00 x ${btnNum.value }   <span>$${newPrice}.00</span>`
 } else{
  empty.innerHTML = '';
}


})








imgCart.addEventListener('click',function add(){
  let price = 125
  let newPrice = price * btnNum.value
  textCart.classList.toggle('active-cart')
    if(btnNum.value > 0){
       empty.innerHTML = ` <img class = "text-img" src="images/image-product-1-thumbnail.jpg" alt=""> Fall Limited Edition Sneakers<br/>$${price}.00 x ${btnNum.value }   <span>$${newPrice}.00</span>`
    }else{
      empty.innerHTML = '';
    }

})




deleteValue.addEventListener('click',function(){
  btnNum.value = 0;
  textCart.classList.remove('active-cart')
  empty.innerHTML = '';
  cartNum.innerHTML = '';

})





function addOne(){
 if (btnNum.value === 0 || btnNum.value < 9){
 btnNum.value ++

 }else if(btnNum.value > 0){
  empty.innerHTML = `Fall Limited Edition Sneakers<br/>$${price}.00 x ${btnNum.value }   <span>$${newPrice}.00</span>`
 }else{
  empty.innerHTML = '';
}

}



function minusONe(){
 if (btnNum.value > 0 && btnNum.value <10){
 btnNum.value --
 }else if (btnNum.value > 0){
  empty.innerHTML = `Fall Limited Edition Sneakers<br/>$${price}.00 x ${btnNum.value }   <span>$${newPrice}.00</span>`
 }else{
  empty.innerHTML = '';
}


}










///slide images

// let imgNum = 1;

// images.forEach(image=>{
//   image.addEventListener('click',function(){
//    imgNum = img.id
//   })
// })


// console.log(img)



