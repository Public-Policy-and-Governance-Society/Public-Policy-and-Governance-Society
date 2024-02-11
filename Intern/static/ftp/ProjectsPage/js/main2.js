// DOM Elements
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var themeBtn = document.querySelector(".themeBtn");
var profileBtn = document.querySelector(".profileBtn");
var profileMenu = document.querySelector(".profileMenu");
var nav = document.querySelector("nav");
var navScroll = document.querySelector(".nav__onScroll");
var navDropdown = document.querySelector(".nav__dropdown");
var navDropdownBtn = document.querySelector(".nav__dropdownBtn");
var projectCards = Array.from(document.getElementsByClassName("section__projectCard"));
var pastProjectCards = Array.from(document.getElementsByClassName("section__pastProjectCard"));

// theme handling
var headTag = document.getElementsByTagName("head")[0];
var darkCSS = document.createElement("link");
darkCSS.rel = "stylesheet";
darkCSS.type = "text/css";
darkCSS.href = "/static/ftp/ProjectsPage/css/dark.css";

var themeHandler = () => {
    var mode = themeBtn.classList.contains("fa-moon") ? "light" : "dark";
    if (mode === "light") darkMode();
    else lightMode();
};
var darkMode = () => {
    themeBtn.classList.remove("fa-moon");
    themeBtn.classList.add("fa-sun");
    localStorage.setItem("irc_ftp", JSON.stringify({
        theme: "dark"
    }));
    headTag.appendChild(darkCSS);
    // nav handling
    navScroll.classList.remove("nav__onScroll");
    navScroll.querySelector(".nav__logo").src = "/static/ftp/ProjectsPage/img/logo/ftp_logo.png"
};
var lightMode = () => {
    themeBtn.classList.remove("fa-sun");
    themeBtn.classList.add("fa-moon");
    localStorage.setItem("irc_ftp", JSON.stringify({
        theme: "light"
    }));
    headTag.removeChild(darkCSS);
    // nav handling
    navScroll.classList.add("nav__onScroll");
    navScroll.querySelector(".nav__logo").src = "/static/ftp/ProjectsPage/img/logo/ftp_logo2.png"
};
// setting theme from localstorage
var prevTheme = JSON.parse(localStorage.getItem("irc_ftp")) ? .theme;
if (prevTheme === "dark")
    darkMode()
// fix to dark mode enabling flash onload
// setTimeout(() => document.querySelector("section").style.transition = "background-color 0.5s", 500);

// scroll events
var scrollToTop = () => {
    window.scrollTo(0, 0);
};

window.addEventListener("scroll", () => {
    if (window.scrollY >= 2) {
        // nav
        nav.style.display = "none";
        navScroll.style.display = "flex";
        // floating buttons
        scrollToTopBtn ? scrollToTopBtn.style.transform = "scale(1)" : "";
        // footer-nav
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1) {
            setTimeout(() => navScroll.style.display = "none", 500);
            navScroll.style.animation = "nav__disappear 0.5s ease-out 1";
        } else {
            navScroll.style.display = "flex";
            navScroll.style.animation = "nav__appear 0.5s ease-out 1";
        }
    } else {
        // nav
        nav.style.display = "flex";
        navScroll.style.display = "none";
        // floating buttons
        scrollToTopBtn ? .style.transform = "scale(0)";
    }
    // card transitions
    pastProjectCards.map(projectCard => {
        if (projectCard ? .getBoundingClientRect().y < projectCard ? .clientHeight + 150) {
            projectCard ? .style.animation = "projectCard__appear 0.5s ease-out 1 forwards";
        } else {
            projectCard ? .style.animation = "projectCard__disappear 0.5s ease-out 1 forwards";
        }
    });
});

// grid
let projectCardTimeout;
let isOtherProjectOpen = false;

projectCards.map(projectCard => {
    projectCard ? .querySelector(".js-expander").addEventListener("click", () => {
        if (projectCard ? .classList.contains("is-collapsed")) {
            projectCards.map(projectCard => {
                projectCard ? .classList.remove("is-expanded");
                projectCard ? .classList.add("is-collapsed");
                projectCard ? .style.zIndex = 0;
            });
            clearTimeout(projectCardTimeout);
            projectCardTimeout = setTimeout(() => {
                projectCard ? .classList.remove("is-collapsed");
                projectCard ? .classList.add("is-expanded");
                projectCard ? .style.zIndex = 1;
                window.scrollTo(0, projectCard ? .offsetTop + projectCard ? .querySelector(".section__projectCardInner").clientHeight - (Math.max(nav.clientHeight, navScroll.clientHeight)) - 20);
            }, isOtherProjectOpen ? 300 : 0);

            // switch isOtherProjectOpen
            isOtherProjectOpen = true;
        } else {
            projectCard ? .classList.remove("is-expanded");
            projectCard ? .classList.add("is-collapsed");
            projectCard ? .style.zIndex = 0;
            window.scrollTo(0, projectCard ? .offsetTop - (Math.max(nav.clientHeight, navScroll.clientHeight)) - 20);
            isOtherProjectOpen = false;
        }
    });

    projectCard ? .querySelector(".js-collapser").addEventListener("click", () => {
        projectCard ? .classList.remove("is-expanded");
        projectCard ? .classList.add("is-collapsed");
        projectCard ? .style.zIndex = 0;
        window.scrollTo(0, projectCard ? .offsetTop - (Math.max(nav.clientHeight, navScroll.clientHeight)) - 20);
        isOtherProjectOpen = false;
    });
});


// form handling
let isUploadedCV = false;
let isValidCV = true;

var openForm = (projectId) => {
    console.log(projectId);
    var projectForm = document.getElementById("project-" + projectId);
    console.log(projectForm);
    document.body.style.overflow = "hidden";
    if (navScroll)
        navScroll.style.animation = "nav__disappear 0.5s ease-out 1 forwards";
    scrollToTopBtn ? .style.transform = "scale(0)";
    profileBtn.style.opacity = "0";
    // themeBtn.style.opacity = "0";
    setTimeout(() => {
        profileBtn.style.zIndex = "-1"
        // themeBtn.style.zIndex = "-1"
    }, 500);

    projectForm.parentElement.style.display = "grid";
    projectForm.style.display = "flex";
    projectForm.style.animation = "form__appear 0.3s ease-out 1 forwards";
};

var closeForm = (projectId) => {
    var projectForm = document.getElementById("project-" + projectId);
    document.body.style.overflow = "auto";

    navScroll.style.animation = "nav__appear 0.5s ease-out 1 forwards";
    scrollToTopBtn ? .style.transform = "scale(1)";
    profileBtn.style.zIndex = "4";
    profileBtn.style.opacity = "1";
    // themeBtn.style.zIndex = "4";
    // themeBtn.style.opacity = "1";

    projectForm.style.animation = "form__disappear 0.3s ease-out 1 forwards";
    setTimeout(() => {
        projectForm.style.display = "none";
        projectForm.parentElement.style.display = "none";
    }, 300);
};

var submitProjectForm = (e) => {
    e.preventDefault();

    var formElement = e.target.parentElement;

    if (e.target.classList.contains("projectForm__disabledBtn"))
        openWordCountAlert(e);
    else {
        if (!isUploadedCV) {
            var fileConfirmation = confirm("Are you sure you want to apply with your default CV?");
            if (fileConfirmation)
                formElement.submit();
        } else
            formElement.submit();
    }
}

var openWordCountAlert = (e) => {
    var sop = e.target.parentElement.querySelector(".projectForm__ftpSOP").value;
    var loi = e.target.parentElement.querySelector(".projectForm__ftpLOI") ? .value;

    var wordCountAlert = e.target.parentElement.querySelector(".projectForm__wordCountAlert");

    if (e.target.classList.contains("projectForm__disabledBtn")) {
        var sopWordCount = sop.split(" ").length - 1;
        var loiWordCount = loi ? loi.split(" ").length - 1 : undefined;

        wordCountAlert.firstElementChild.innerText = loiWordCount ? "SOP word count: " + sopWordCount + "\nLOI word count: " + loiWordCount : "SOP word count: " + sopWordCount;

        wordCountAlert.style.zIndex = "1";
        wordCountAlert.style.opacity = "1";
    }
};

var closeWordCountAlert = (e) => {
    var wordCountAlert = e.target.parentElement.querySelector(".projectForm__wordCountAlert");

    wordCountAlert.style.opacity = "0";
    wordCountAlert.style.zIndex = "-1";
};

var wordCountCheck = (e) => {
    var project = e.target.parentElement.parentElement;
    var sop = project.querySelector(".projectForm__ftpSOP");
    var loi = project.querySelector(".projectForm__ftpLOI");
    var submitBtn = project.querySelector(".projectForm__submitBtn");

    var sopWordCount = sop.value.split(" ").length - 1;
    var loiWordCount = loi ? loi.value.split(" ").length - 1 : undefined;

    if (!loi && sopWordCount >= 150 && sopWordCount <= 200)
        submitBtn.classList.remove("projectForm__disabledBtn");
    else if (loi && sopWordCount >= 150 && sopWordCount <= 200 && loiWordCount <= 500)
        submitBtn.classList.remove("projectForm__disabledBtn");
    else
        submitBtn.classList.add("projectForm__disabledBtn");
};

// profile menu handling
let profileMenuTimeout;
var profileMenuHandler = () => {
    var display = profileMenu.style.display;
    if (!display || display === "none")
        setTimeout(() => openProfileMenu(), 0);
    else
        closeProfileMenu();
};
var openProfileMenu = () => {
    profileMenu.style.display = "flex";
    profileMenu.style.animation = window.innerWidth >= 800 ? "menuAppear 0.2s ease-out 1 forwards" : "menuAppear_phone 0.2s ease-out 1 forwards";
    closeDropdown();
};
var closeProfileMenu = () => {
    clearTimeout(profileMenuTimeout);
    profileMenuTimeout = setTimeout(() => profileMenu.style.display = "none", 200);
    profileMenu.style.animation = window.innerWidth >= 800 ? "menuDisappear 0.2s ease-out 1 forwards" : "menuDisappear_phone 0.2s ease-out 1 forwards";
};
profileMenu.addEventListener("click", closeProfileMenu);

// Drop down menu
let dropdownTimeout;

function dropdownHandler() {
    var display = navDropdown.style.display;
    if (!display || display === "none")
        setTimeout(() => openDropdown(), 0);
    else
        closeDropdown();
};
var openDropdown = () => {
    navDropdown.style.display = "flex";
    navDropdown.style.animation = "nav__dropdownAppear 0.2s ease-out 1 forwards";
    closeProfileMenu();
};
var closeDropdown = () => {
    clearTimeout(dropdownTimeout);
    dropdownTimeout = setTimeout(() => navDropdown.style.display = "none", 200);
    navDropdown.style.animation = "nav__dropdownDisappear 0.2s ease-out 1 forwards";
};
navDropdown.addEventListener("click", closeDropdown);

// fix
window.addEventListener("click", () => {
    if (navDropdown.style.display === "flex")
        closeDropdown();
    else if (profileMenu.style.display === "flex")
        closeProfileMenu();
});

// upload file
var truncate = (str, n) => {
    return (str.length > n) ? str.substr(0, n - 1) + "..." : str;
};

var uploadFile = (e) => {
    e.preventDefault();
    e.target.previousElementSibling.click();
};

var changedFile = (e) => {
    console.log("changedfile");
    var fileInput = e.target;
    var uploadedFile = e.target.files[0];

    var fileConfirmation = confirm("Are you sure you want to apply with a different CV than your default one?");

    if (!uploadedFile.name.endsWith(".pdf")) {
        alert("Please, upload your CV in pdf format");
        fileInput.value = "";
        fileInput.nextElementSibling.innerText = "Apply with a different CV";
        isValidCV = false;
        isUploadedCV = false;
        return;
    } else if (fileConfirmation) {
        fileInput.nextElementSibling.innerText = "Uploaded: \"" + uploadedFile.name.substring(0, Math.min(20, uploadedFile.name.length)) + "\"";
        isValidCV = true;
        isUploadedCV = true;
    }
};

//---------------------------------------------------------------------------------------------------------------------------------------//
var darkCSS = document.createElement("link");
darkCSS.rel = "stylesheet";
darkCSS.type = "text/css";
darkCSS.href = "/static/ftp/ProjectsPage/css/dark.css";


window.addEventListener("scroll", () => {
    if (window.scrollY >= 2) {
        // nav
        nav.style.display = "none";
        navScroll.style.display = "flex";
        // floating buttons
        scrollToTopBtn ? .style.transform = "scale(1)";
        // footer-nav
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1) {
            setTimeout(() => navScroll.style.display = "none", 500);
            navScroll.style.animation = "nav__disappear 0.5s ease-out 1";
        } else {
            navScroll.style.display = "flex";
            navScroll.style.animation = "nav__appear 0.5s ease-out 1";
        }
    } else {
        // nav
        nav.style.display = "flex";
        navScroll.style.display = "none";
        // floating buttons
        scrollToTopBtn ? .style.transform = "scale(0)";
    }
    // card transitions
    pastProjectCards.map(projectCard => {
        if (projectCard ? .getBoundingClientRect().y < projectCard ? .clientHeight + 150) {
            projectCard ? .style.animation = "projectCard__appear 0.5s ease-out 1 forwards";
        } else {
            projectCard ? .style.animation = "projectCard__disappear 0.5s ease-out 1 forwards";
        }
    });
});

// grid

projectCards.map(projectCard => {
    projectCard ? .querySelector(".js-expander").addEventListener("click", () => {
        if (projectCard ? .classList.contains("is-collapsed")) {
            projectCards.map(projectCard => {
                projectCard ? .classList.remove("is-expanded");
                projectCard ? .classList.add("is-collapsed");
                projectCard ? .style.zIndex = 0;
            });
            clearTimeout(projectCardTimeout);
            projectCardTimeout = setTimeout(() => {
                projectCard ? .classList.remove("is-collapsed");
                projectCard ? .classList.add("is-expanded");
                projectCard ? .style.zIndex = 1;
                window.scrollTo(0, projectCard ? .offsetTop + projectCard ? .querySelector(".section__projectCardInner").clientHeight - (Math.max(nav.clientHeight, navScroll.clientHeight)) - 20);
            }, isOtherProjectOpen ? 300 : 0);

            // switch isOtherProjectOpen
            isOtherProjectOpen = true;
        } else {
            projectCard ? .classList.remove("is-expanded");
            projectCard ? .classList.add("is-collapsed");
            projectCard ? .style.zIndex = 0;
            window.scrollTo(0, projectCard ? .offsetTop - (Math.max(nav.clientHeight, navScroll.clientHeight)) - 20);
            isOtherProjectOpen = false;
        }
    });

    projectCard ? .querySelector(".js-collapser").addEventListener("click", () => {
        projectCard ? .classList.remove("is-expanded");
        projectCard ? .classList.add("is-collapsed");
        projectCard ? .style.zIndex = 0;
        window.scrollTo(0, projectCard ? .offsetTop - (Math.max(nav.clientHeight, navScroll.clientHeight)) - 20);
        isOtherProjectOpen = false;
    });
});


navDropdown.addEventListener("click", closeDropdown);

// fix
window.addEventListener("click", () => {
    if (navDropdown.style.display === "flex")
        closeDropdown();
    else if (profileMenu.style.display === "flex")
        closeProfileMenu();
});


$(document).ready(


    function() {

        setCheckboxSelectLabels();

        $('.toggle-next').click(function() {
            $(this).next('.checkboxes').slideToggle(400);
        });

        $('.ckkBox').change(function() {
            if ($('.ckkBox:checked').length > 0)
                $(".reqbtn").removeClass("disabled");
            else
                $(".reqbtn").addClass("disabled");
            if ($(".other:checked").length == 1) {
                console.log("checkd");
                $(".req-input").css("display", "block");
                $(".req-input").prop('required', true);
            } else {
                $(".req-input").css("display", "none");
                $(".req-input").prop('required', false);
            }

            toggleCheckedAll(this);
            setCheckboxSelectLabels();
        });

    });


function setCheckboxSelectLabels(elem) {
    var wrappers = $('.wrapper');
    $.each(wrappers, function(key, wrapper) {
        var checkboxes = $(wrapper).find('.ckkBox');
        var label = $(wrapper).find('.checkboxes').attr('id');
        var prevText = '';
        $.each(checkboxes, function(i, checkbox) {
            var button = $(wrapper).find('button');
            if ($(checkbox).prop('checked') == true) {
                var text = $(checkbox).next().html();
                var btnText = prevText + text;
                var numberOfChecked = $(wrapper).find('input.val:checkbox:checked').length;
                if (numberOfChecked >= 4) {
                    btnText = numberOfChecked + ' ' + label + ' selected';
                }
                $(button).text(btnText);
                prevText = btnText + ', ';
            }
        });
    });
}

function toggleCheckedAll(checkbox) {
    var apply = $(checkbox).closest('.wrapper').find('.apply-selection');
    apply.fadeIn('slow');

    var val = $(checkbox).closest('.checkboxes').find('.val');
    var all = $(checkbox).closest('.checkboxes').find('.all');
    var ckkBox = $(checkbox).closest('.checkboxes').find('.ckkBox');

    if (!$(ckkBox).is(':checked')) {
        $(all).prop('checked', true);
        return;
    }

    if ($(checkbox).hasClass('all')) {
        $(val).prop('checked', false);
    } else {
        $(all).prop('checked', false);
    }
}


$(".reqbtn").on("click", function(e) {
    if (
        $(this).hasClass("disabled") ||
        ($("#id_inputfield").val() == "" && $(".other:checked").length == 1)
    ) {
        alert("Please fill out your topic!");
    } else if ($(".ckkBox:checked").length > 0) {
        alert("Your Project has been successfully requested!");
    } else {
        alert("Your Project has been successfully requested!");
    }
});



profileMenu.addEventListener("click", closeProfileMenu);

navDropdown.addEventListener("click", closeDropdown);

// fix
window.addEventListener("click", () => {
    if (navDropdown.style.display === "flex")
        closeDropdown();
    else if (profileMenu.style.display === "flex")
        closeProfileMenu();
});