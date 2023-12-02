function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}


const box = document.querySelector('.timeline3');
const box1 = document.querySelector('.timeline2');
const video = document.querySelector('#myVideo')
const heading = document.querySelector('.investing')
// const boxMid = document.querySelector('.timeline-mid');
// boxMid.style.backgroundColor = "white";
// const message = document.querySelector('#message');
let set = 0;

document.addEventListener('scroll', function() {
    const messageText = checkVisible(box1) ?
        'The box is visible in the viewport' :
        'The box is not visible in the viewport';
    let help = window.innerWidth;
    if (checkVisible(box)) {
        set = 1;
        var translateDistance = window.innerWidth * 0.5;
        box.style.transform = `translateY(53vw)`;
        heading.style.padding = "48vw 0 0 0"
        // console.log(box.style)
        video.style.opacity = "0.9";
        // boxMid.style  = "height: 200px";

    } else {
        set = 0;
        box.style.transform = "translateY(0px)";
        video.style.opacity = "0";
        heading.style.padding = "10vw 0 0 0"
        // console.log(heading)
        // boxMid.style = "height: 00px";
    }
    // message.textContent = messageText;
    // console.log(messageText);
    // console.log(box)

}, {
    passive: true
});