// Navigation bar effect on scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    document
        .querySelector("header")
        .classList.toggle("small-icon", window.scrollY > 0);
});

// Scroll Button
const Scrollbtn = document.querySelector(".scroll");

window.addEventListener("scroll", function() {
    Scrollbtn.classList.toggle("active", window.scrollY > 500);
});

Scrollbtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Navigation effect on Scrolling

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-items a[href*=" + id + "]")
                .classList.add("active");
        } else {
            document
                .querySelector(".nav-items a[href*=" + id + "]")
                .classList.remove("active");
        }
    });
});

//Roadmap content
const roadmapMoadals = document.querySelectorAll(".timeline-modal");
const timeline = document.querySelectorAll(".timeline-content");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick) {
    roadmapMoadals[modalClick].classList.add("active");
};

timeline.forEach((timelineBtn, i) => {
    timelineBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        roadmapMoadals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

// Responsive navigation menu toggle

const menubtn = document.querySelector(".nav-menu-btn");
const closebtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItem = document.querySelectorAll(".nav-items a");

menubtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closebtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItem.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

// Scroll Reveal Animation
ScrollReveal({
    reset: false,
    distance: "78px",
    duration: 1200,
    delay: 20,
});

ScrollReveal().reveal(".profile-card", {
    delay: 650,
    origin: "bottom",
    interval: 200,
});
ScrollReveal().reveal(
    ".home .home-container h1, .section-title-01, .section-title-02, .whiteheading", {
        delay: 500,
        origin: "left"
    }
);
ScrollReveal().reveal(".home .home-container h3, .home .home-container p", {
    delay: 600,
    origin: "right",
});
ScrollReveal().reveal(".home .home-container .btn", {
    delay: 700,
    origin: "bottom",
});
ScrollReveal().reveal(
    ".policy, .policy-mid, .center-line, .timeline-content, .contact-left, .contact-right, .block,.content .para1, .content .para", {
        delay: 600,
        origin: "bottom"
    }
);
ScrollReveal().reveal(".content .info img, .img1 img", {
    delay: 600,
    origin: "right",
});
ScrollReveal().reveal(".content .info p", {
    delay: 600,
    origin: "left"
});

// To create animation
// window.addEventListener('scroll', move);

// function move(){
//     var moves = document.querySelectorAll('.move');

//     for(var i=0; i<moves.length; i++){

//         var windowheight = window.innerHeight;
//         var movetop = moves[i].getBoundingClientRect().top;
//         var movepoint = 150;

//         if(movetop < windowheight - movepoint){
//             moves[i].classList.add('active');
//         }
//         else{
//             moves[i].classList.remove('active');
//         }
//     }
// }