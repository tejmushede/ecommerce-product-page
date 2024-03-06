let imageThumbnails = document.querySelectorAll(".image-thumbnails img");
let modalThumbnails = document.querySelectorAll(".modal-image-thumbnails img");
let mainImage = document.querySelector(".main-image");
let modalMainImage =  document.querySelector(".modal-main-image");
let closeModalButton = document.querySelector(".modal-close-button")
let modalPrevButton = document.querySelector(".modal-prev-icon");
let modalNextButton = document.querySelector(".modal-next-icon");
let modalButtons = document.querySelectorAll(".modal-main-image button");
let decrement = document.querySelector(".minus-icon");
let increment = document.querySelector(".plus-icon");
let cartCheckout = document.querySelector(".cart-checkout");
let cartCheckoutButton = document.querySelector(".cart-checkout-button");
let totalCount = document.querySelector(".cart-counter");
let addToCartButton = document.querySelector(".add-to-cart-button");
let clearCart = document.querySelector(".clear-cart");
let menuCartButton = document.querySelector(".menu-cart");
let nextPrevButton = document.querySelectorAll(".main-image button")
let totalAmount = 375;
let currentImage = 1;

window.addEventListener('DOMContentLoaded', ()=> {
  document.querySelector(".cart-highlight").style.display = "none";
  document.querySelector(".modal-overlay").style.display = "none";
  document.querySelector(".cart-image").style.display = "none";
  document.querySelector(".cart-title-price-total").style.display = "none";
  document.querySelector(".clear-cart").style.display = "none";
  document.querySelector(".cart-checkout-button").style.display = "none";
  cartCheckout.style.display = "none";
})

nextPrevButton.forEach(function (button) {
  button.addEventListener("click", function (){

    if (button.classList.value == "next-icon"){
      currentImage += 1;
      if (currentImage >= 4) {
        currentImage = 1;
      };
    } else {
      currentImage -= 1;
      if (currentImage < 1) {
        currentImage = 4;
      };
    }
    mainImage.style.backgroundImage = `url("./images/image-product-${currentImage}.jpg")`;
  })
})

mainImage.addEventListener("click", function() {

  if (window.innerWidth >= 1024) {
    document.querySelector(".product-title").style.display = "none";
    document.querySelector(".modal-overlay").style.display = "flex";
    document.querySelector(".add-to-cart-button img").style.display = "none";
  }
});

imageThumbnails.forEach(function (imageThumbnail) {
  imageThumbnail.addEventListener("click", function () {
    mainImage.style.backgroundImage = `url("./images/image-product-${imageThumbnail.alt}.jpg")`
    document.querySelector(".active-thumbnail").classList.remove("active-thumbnail");
    document.querySelector(`.image-thumbnail-${imageThumbnail.alt}`).classList.add("active-thumbnail");
  });
} )

modalThumbnails.forEach(function (modalThumbnail) {
  modalThumbnail.addEventListener("click", function () {
    modalMainImage.style.backgroundImage = `url("./images/image-product-${modalThumbnail.alt}.jpg")`;
    document.querySelector(".modal-active-thumbnail").classList.remove("modal-active-thumbnail");
    document.querySelector(`.modal-thumbnail-${modalThumbnail.alt}`).classList.add("modal-active-thumbnail");
  });
})

closeModalButton.addEventListener("click", () => {
  document.querySelector(".product-title").style.display = "inline";
  document.querySelector(".modal-overlay").style.display = "none";
  document.querySelector(".add-to-cart-button img").style.display = "inline";
})

modalButtons.forEach(function (modalButton) {
  modalButton.addEventListener("click", function () {
    let currentModalPage = document.querySelector(".modal-active-thumbnail").alt;

    if ((currentModalPage <= 1) && (modalButton.classList.value == "modal-prev-icon")) {
      currentModalPage = 4;
      modalMainImage.style.backgroundImage = `url("./images/image-product-${currentModalPage}.jpg")`;
      document.querySelector(".modal-active-thumbnail").classList.remove("modal-active-thumbnail");
      document.querySelector(`.modal-thumbnail-${currentModalPage}`).classList.add("modal-active-thumbnail");
    } else if ((currentModalPage >= 4) && (modalButton.classList.value == "modal-next-icon")){
      currentModalPage = 1;
      modalMainImage.style.backgroundImage = `url("./images/image-product-${currentModalPage}.jpg")`;
      document.querySelector(".modal-active-thumbnail").classList.remove("modal-active-thumbnail");
      document.querySelector(`.modal-thumbnail-${currentModalPage}`).classList.add("modal-active-thumbnail");
    } else if (modalButton.classList.value == "modal-prev-icon") {
      currentModalPage -= 1;
      modalMainImage.style.backgroundImage = `url("./images/image-product-${currentModalPage}.jpg")`;
      document.querySelector(".modal-active-thumbnail").classList.remove("modal-active-thumbnail");
      document.querySelector(`.modal-thumbnail-${currentModalPage}`).classList.add("modal-active-thumbnail");
    } else if (modalButton.classList.value == "modal-next-icon") {
      let nextPage = parseInt(currentModalPage) + 1;
      modalMainImage.style.backgroundImage = `url("./images/image-product-${nextPage}.jpg")`;
      document.querySelector(".modal-active-thumbnail").classList.remove("modal-active-thumbnail");
      document.querySelector(`.modal-thumbnail-${nextPage}`).classList.add("modal-active-thumbnail");
    };
  })
})

decrement.addEventListener("click", function () {
  (totalCount.innerHTML > 0) ? totalCount.innerHTML -= 1 : totalCount.innerHTML = 0;
})

increment.addEventListener("click", function () {
  totalCount.innerHTML = parseInt(totalCount.innerHTML) + 1;
})

addToCartButton.addEventListener("click", function () {
  document.querySelector(".cart-highlight").innerHTML = totalCount.innerHTML;
  document.querySelector(".cart-highlight").style.display = "flex";
  document.querySelector(".quantity").innerHTML = totalCount.innerHTML;
  totalAmount = 125.00 * totalCount.innerHTML;
  document.querySelector(".cart-total").innerHTML = `$${totalAmount.toFixed(2)}`;
  document.querySelector(".empty-cart").style.display = "none";
  document.querySelector(".cart-image").style.display = "block";
  document.querySelector(".cart-title-price-total").style.display = "block";
  document.querySelector(".clear-cart").style.display = "block";
  document.querySelector(".cart-checkout-button").style.display = "block";
})

clearCart.addEventListener("click", function () {
  document.querySelector(".cart-highlight").style.display = "none";
  document.querySelector(".cart-image").style.display = "none";
  document.querySelector(".cart-title-price-total").style.display = "none";
  document.querySelector(".cart-checkout-button").style.display = "none";
  document.querySelector(".clear-cart").style.display = "none";
  document.querySelector(".empty-cart").style.display = "block";
})

menuCartButton.addEventListener("click", function () {
  if (cartCheckout.style.display === "none") {
    cartCheckout.style.display = "block";
  } else {
    cartCheckout.style.display = "none";
  }
})

cartCheckoutButton.addEventListener("click", function () {
  document.querySelector(".cart-highlight").style.display = "none";
  cartCheckout.style.display = "none";
})