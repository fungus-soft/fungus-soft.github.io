document.getElementById("body").style.minHeight=(window.innerHeight - document.getElementById("header").style.height - document.getElementById("footer").style.height) + "px";

function sizechange() {
    if (window.innerWidth < 600)
         document.getElementById("h1").style.fontSize="26px";
    else document.getElementById("h1").style.fontSize="36px";
}
window.onresize = sizechange;
sizechange();