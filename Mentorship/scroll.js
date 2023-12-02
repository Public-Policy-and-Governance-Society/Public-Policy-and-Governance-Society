window.onscroll = function() {
    scrollFunction()
}

function scrollFunction() {
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    // console.log(scrollTop);
    var navElement = document.querySelector("header")
    var targetEls = document.querySelector("#nav-bar").querySelectorAll('li')
    // console.log(targetEls);
    var logoText = document.querySelector('.logo-text')
    // console.log(logoText)
    var width = window.innerWidth;
    if (scrollTop < 200 && width > 800) {
        navElement.style.backgroundColor = "transparent"
        logoText.style.color = "black"
        targetEls.forEach((ele) => {
            if (ele.querySelector('a'))
                ele.querySelector('a').style.color = "black";
        })
    } else {
        navElement.style.backgroundColor = "black"
        logoText.style.color = "white"
        targetEls.forEach((ele) => {
            if (ele.querySelector('a'))
                ele.querySelector('a').style.color = "yellow";
        })
    }

}