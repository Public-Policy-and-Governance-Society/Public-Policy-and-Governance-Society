(function(window) {
    'use strict';

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }
    var hasClass, addClass, removeClass;
    if ('classList' in document.documentElement) {
        hasClass = function(elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function(elem, c) {
            elem.classList.add(c);
        };
        removeClass = function(elem, c) {
            elem.classList.remove(c);
        };
    } else {
        hasClass = function(elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function(elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function(elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }
    var classie = {
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };
    if (typeof define === 'function' && define.amd) {
        define(classie);
    } else {
        window.classie = classie;
    }
})(window);

//////////////////////////////////////////////////////////////////////
var overlay = document.querySelector('.md-overlay');


// need modelid and buttonid
//modelid= id of div to be shown
//buttonid= button used to trigger the model


function run_model(modelid, buttonid) {
    var modal = document.getElementById(modelid);
    var trigger = document.getElementById(buttonid);
    var close = modal.querySelector('.md-close');

    classie.add(modal, 'md-show');
    overlay.removeEventListener('click', function() {
        removeModal(modal, classie.has(trigger, 'md-setperspective'))
    });
    overlay.addEventListener('click', function() {
        removeModal(modal, classie.has(trigger, 'md-setperspective'))
    });

    if (classie.has(trigger, 'md-setperspective')) {
        setTimeout(function() {
            classie.add(document.documentElement, 'md-perspective');
        }, 25);
    }

    close.addEventListener('click', function(ev) {
        ev.stopPropagation();
        removeModal(modal, classie.has(trigger, 'md-setperspective'));
    });
}

function removeModal(modal, hasPerspective) {
    classie.remove(modal, 'md-show');
    if (hasPerspective) {
        classie.remove(document.documentElement, 'md-perspective');
    }
}