//  NEWLY-MINTED NFTS SESSION 

let image = document.getElementById('image');

let images = ["image-new-minted-1.jpeg", "image-new-minted-2.jpeg", "image-new-minted-3.jpg", 
             "image-new-minted-4.jpg", "image-new-minted-5.jpg", "image-new-minted-6.jpg", "image-new-minted-7.jpg", 
             "image-new-minted-8.jpg", "image-new-minted-10.png", "image-new-minted-11.png"]


setInterval(function () {
    let random = Math.floor(Math.random() *10);
    image.src = images[random];
}, 800)

// TRENDING NFTS SESSION

const buttons = document.querySelectorAll("[data-switch-button]");

buttons.forEach(button => {
    button.addEventlistener("click",  () => {
    const offset = button.dataset.image-wrapButton === "next" ? 1 : -1
    const slide = button.closest("[data-imageWrapper]").querySelector("[data-slide]")

    const activeSlide = slide.querySelector("[data-active]")
    let newIndex = [...slide.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slide.children.length -1
    if (newIndex >= slide.children.length) newIndex = 0

    slide.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
})
})