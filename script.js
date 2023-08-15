const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


let bigImg = $("#bigImg");

let smallImg = $$("#smallImg img");

for(let i = 0; i < smallImg.length; i++) {
    
    smallImg[i].onmouseover = function() {
        let srcImg = smallImg[i].getAttribute('src');
        bigImg.src= srcImg;
    }

    smallImg[i].onclick = function() {
        let srcImg = smallImg[i].getAttribute('src');
        bigImg.src= srcImg;
    }
    
       
}



/* navs menu */ 
const mobile = $("#mobile");

window.onclick = function(event) {
    if(event.target == mobile) {
        mobile.style.display = "none";
    }
}

/* display navs top */ 
// let icon = $(".icon");
// let mobile = (".mobile");
// console.log(icon);

// icon.onclick = function() {
//     console.log('ok');
//     mobile.style.display = 'block';
// }

let slides = $$("#img-list li");

slideIndex = 0;
showSlide();

function showSlide() {
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex++;
    if(slideIndex > slides.length) {slideIndex = 1};
    slides[slideIndex-1].style.display = 'block';
   
}


// Navbar
// let icon = $(".icon");

// icon.onclick = function() {
//     let x = $("#navtop");

//     if(x.className === "nav-list") {
//         x.className += " reponsive";
//     } else {
//         x.className = "nav-list";
//     }
// }

// Cart product
/*
let slideCart = 1;
showCart(slideCart);

function plusCarts(n) {
    showCart(slideCart += n);
}

// Get pageWidth


function showCart(n) {
    let cartId = $("#cart");
    let cartWidth = cartId.offsetWidth;
    let cartAll = $$(".cart li");


    if(n > cartAll.length){slideCart = 1}
    if(n < 1) {slideCart = cartAll.length}
 
        for(let i = 0; i < cartAll.length; i++) {
            if(cartWidth <= 600){
                cartAll[i].style.display = 'none';
            }
        }

    cartAll[slideCart-1].style.display = 'block';
}

*/

// onscroll not ok
// window.onscroll = function() {myFunction()}

// let navtop = $("#navtop");

// let topoffSet = navtop.offsetTop;

// console.log(topoffSet);

// function myFunction() {
//     if(window.pageYOffset >= topoffSet) {
//         console.log(topoffSet);
//         navtop.className = "nav-list";
//     }
// }


