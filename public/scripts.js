const navbar = $(".navbar");
const navLogo = document.getElementById("fwLogo");
let navContacts = document.getElementsByClassName("contactNav");
const server = "http://localhost:3000/"
const navText = $("#navText");
const navTextAgain = $("#navTextAgain");
const navLinksAll = $(".navLinksAll");

navText.addClass("hello there");


let width = innerWidth;
$( window ).resize(function() {
    width = innerWidth;
    navLogoChange();
});

function navLogoChange() {if (width < 768) {
    navLogo.src = server + "images/fw-logo.png";
    navLogo.style.height = "120px";
    navLogo.style.marginBottom = "20px";
    navLogo.style.objectPosition = "0 -5px"
    navText.addClass("d-flex justify-content-end");
    navTextAgain.removeClass("d-flex justify-content-end");
    navLinksAll[0].style.display = "none"
    navLinksAll[1].style.display = "inline"
} else if (width >= 768 && width < 960 ) {
    navLogo.src = server + "images/fw-logo-long-nobg-white.png";
    navLogo.style.height = "120px";
    navLogo.style.objectPosition = "0 0"
    navText.addClass("d-flex justify-content-end");
    navTextAgain.removeClass("d-flex justify-content-end");
    navLinksAll[0].style.display = "none"
    navLinksAll[1].style.display = "inline"
} else if (width >= 960) {
    navLogo.src = server + "images/fw-logo-long-nobg-white.png";
    navLogo.style.height = "150px";
    navLogo.style.objectPosition = "0 -15px"
    navTextAgain.addClass("d-flex justify-content-end")
    navText.removeClass("d-flex justify-content-end")
    navLinksAll[0].style.display = "inline"
    navLinksAll[1].style.display = "none"

}}

navLogoChange();
// for (i = 0; i < navContacts.length; i++) {
//     navContacts[i].style.color = "red";
// }


// $(function() {
//     $( "#mobileNavbar" ).draggable();
// });

let mobGrow = 0;
// $(".dropdownNav2").hidden();
$(".navbar-toggler").on ("click", function() {
    
    console.log("hi")
    // let mobGrow = 0;
    let i = 0
    while (i < 200) {
        // $("#navLRGrow").slideRight()
        setTimeout( function() {console.log(i)}, 100);
        i++;
    }

    function balls() {
        if (i < 200) {
        setTimeout( function() {console.log(i)}, 100)
        balls();
        i++
        } else {
            return;
        }
        
    } 
    console.log("hi")
    // $("#navLRGrow").slideRight();
    // $("#navbarNav2").slideToggle();
})

