/* NEWLY-MINTED NFTS SESSION */
let image = document.getElementById('image');

let images = ["image-new-minted-1.jpeg", "image-new-minted-2.jpeg", "image-new-minted-3.jpg", 
             "image-new-minted-4.jpg", "image-new-minted-5.jpg", "image-new-minted-6.jpg", "image-new-minted-7.jpg", 
             "image-new-minted-8.jpg", "image-new-minted-10.png", "image-new-minted-11.png"]


setInterval(function () {
    let random = Math.floor(Math.random() *10);
    image.src = images[random];
}, 800)