$(window).on("load", function() {
    setTimeout(function() {
        gsap.to("#loader", 1, {
            y: "-100%"
        });
        gsap.to("#loader", 1, {
            opacity: 0
        });
        gsap.to("#loader", 0, {
            display: "none",
            delay: 1
        });
        gsap.to("#header", 0, {
            display: "block",
            delay: 1
        });
        gsap.to("#navigation-content", 0, {
            display: "none"
        });
        gsap.to("#navigation-content", 0, {
            display: "flex",
            delay: 1
        });
        addTeamMembers();
    }, 1000);
});
$(function() {
    $(".color-panel").on("click", function(e) {
        e.preventDefault();
        $(".color-changer").toggleClass("color-changer-active");
    });
    $(".colors a").on("click", function(e) {
        e.preventDefault();
        var attr = $(this).attr("title");
        console.log(attr);
        $("head").append('<link rel="stylesheet" href="css_2022-2023/' + attr + '.css">');
    });
});
$(function() {
    $(".menubar").on("click", function() {
        gsap.to("#navigation-content", 0.6, {
            y: 0
        });
    });
    $(".navigation-close").on("click", function() {
        gsap.to("#navigation-content", 0.6, {
            y: "-100%"
        });
    });
});

$(function() {
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = "";
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
            this.isDeleting = false;
            this.loopNum++;
            delta = 100;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName("txt-rotate");
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute("data-rotate");
            var period = elements[i].getAttribute("data-period");
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
        document.body.appendChild(css);
    };
});
$(function() {
    var body = document.querySelector("body");
    var $cursor = $(".cursor");

    function cursormover(e) {
        gsap.to($cursor, {
            x: e.clientX,
            y: e.clientY,
            stagger: 0.002,
        });
    }

    function cursorhover(e) {
        gsap.to($cursor, {
            scale: 1.4,
            opacity: 1,
        });
    }

    function cursor(e) {
        gsap.to($cursor, {
            scale: 1,
            opacity: 0.6,
        });
    }
    $(window).on("mousemove", cursormover);
    $(".menubar").hover(cursorhover, cursor);
    $("a").hover(cursorhover, cursor);
    $(".navigation-close").hover(cursorhover, cursor);
});

$(window).scroll(function() {
    if ($(window).scrollTop() >= 100) {
        $(".navbarx-container").addClass("navScroll");
    } else {
        $(".navbarx-container").removeClass("navScroll");
    }
});

window.CustomSubstackWidget = {
    substackUrl: "https://edciitdelhi.substack.com/",
    placeholder: "example@gmail.com",
    buttonText: "Subscribe",
    theme: "custom",
    colors: {
        primary: "#C94208",
        input: "#000000",
        email: "#FFFFFF",
        text: "#FFFFFF",
    },
};

var maxHeight = Math.max.apply(
    null,
    $(".landingteam").map(function() {
        return $(this).height();
    })
);
$(".landingteam").height(maxHeight + 20);