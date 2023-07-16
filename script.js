const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

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
    setTimeout(showSlide, 4000);
}


// Navbar
let icon = $(".icon");

icon.onclick = function() {
    let x = $("#navtop");

    if(x.className === "nav-list") {
        x.className += " reponsive";
    } else {
        x.className = "nav-list";
    }
}

// Cart product

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
    console.log(cartAll);

    if(n > cartAll.length){slideCart = 1}
    if(n < 1) {slideCart = cartAll.length}
 
        for(let i = 0; i < cartAll.length; i++) {
            if(cartWidth <= 600){
                cartAll[i].style.display = 'none';
            }
        }

    cartAll[slideCart-1].style.display = 'block';
}



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


