const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const rightdiv = document.querySelector(".rightdiv");
const navlist = document.querySelector(".navlist");

burger.addEventListener("click", () => {
    rightdiv.classList.toggle("vclassresp");
    navlist.classList.toggle("vclassresp");
    navbar.classList.toggle("hnavresp");
});

// Responsive navigation menu toggle

const menubtn = document.querySelector(".burger");
const closebtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navlist");
const navItem = document.querySelectorAll(".navlist ul li");

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

// Navigation bar effect on scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 0);
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
                .querySelector(".navlinks ul li a[href*=" + id + "]")
                .classList.add("active");
        } else {
            document
                .querySelector(".navlinks ul li a[href*=" + id + "]")
                .classList.remove("active");
        }
    });
});

const left = document.querySelector(".arrow-left");
const right = document.querySelector(".arrow-right");
const slider = document.querySelector(".slider");

const indicatorParent = document.querySelector(".control ul");
const indicators = document.querySelectorAll(".control li");
index = 0;

indicators.forEach((indicator, i) => {
    indicator.addEventListener("click", () => {
        document.querySelector(".control .selected").classList.remove("selected");
        indicator.classList.add("selected");
        slider.style.transform = "translateX(" + i * -33.33 + "%)";
        index = i;
    });
});

left.addEventListener("click", function() {
    slider.style.transition = "all 0.4s ease-in-out";
    index = index > 0 ? index - 1 : index - 1 + 3;
    document.querySelector(".control .selected").classList.remove("selected");
    indicatorParent.children[index].classList.add("selected");
    slider.style.transform = "translateX(" + index * -33.33 + "%)";
});

right.addEventListener("click", function() {
    slider.style.transition = "all 0.4s ease-in-out";
    index = index < 3 - 1 ? index + 1 : index + 1 - 3;
    document.querySelector(".control .selected").classList.remove("selected");
    indicatorParent.children[index].classList.add("selected");
    slider.style.transform = "translateX(" + index * -33.33 + "%)";
});

setInterval(function() {
    slider.style.transition = "all 0.4s ease-in-out";
    index = index < 3 - 1 ? index + 1 : index + 1 - 3;
    document.querySelector(".control .selected").classList.remove("selected");
    indicatorParent.children[index].classList.add("selected");
    slider.style.transform = "translateX(" + index * -33.33 + "%)";
}, 5000);

// Scroll Button
const Scrollbtn = document.querySelector(".scroll");

window.addEventListener("scroll", function() {
    Scrollbtn.classList.toggle("active", window.scrollY > 500);
});

Scrollbtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Scroll Reveal Animation
ScrollReveal({
    reset: false,
    distance: "100px",
    duration: 800,
    delay: 10,
});

ScrollReveal().reveal(".main .left, .container .row, .mainrow, .box", {
    delay: 600,
    origin: "bottom",
    interval: 200,
});
ScrollReveal().reveal(
    ".leftcol, .cols .left,  #Nationals .flex-center .container h1", {
        delay: 500,
        origin: "left"
    }
);
ScrollReveal().reveal(
    ".rightcol, .cols .right1, .eligright .eligp, .leftcontact", {
        delay: 500,
        origin: "right"
    }
);
ScrollReveal().reveal(".group .block, .delhi .content", {
    delay: 700,
    origin: "bottom",
    interval: 200,
});
ScrollReveal().reveal(".cols .mid, .container .bottom, .delhi .images", {
    delay: 500,
    origin: "bottom",
});
ScrollReveal().reveal(
    ".container .top, #Nationals .flex-center .container .delhi .ver h1", {
        delay: 500,
        origin: "top"
    }
);
ScrollReveal().reveal(".eligright .info", {
    delay: 600,
    origin: "right",
    interval: 200,
});
ScrollReveal().reveal(".Edge h2, .rightborder, .eligleft, .rightcontact", {
    delay: 600,
    origin: "left",
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

// Judging Criteria
const accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener("click", (event) => {
        // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

        const currentlyActiveAccordionItemHeader = document.querySelector(
            ".accordion-item-header.active"
        );
        if (
            currentlyActiveAccordionItemHeader &&
            currentlyActiveAccordionItemHeader !== accordionItemHeader
        ) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});