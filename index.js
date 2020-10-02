var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
sideNav.style.right = "-250px";
menuBtn.onclick = function () {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
    }
    else {
        sideNav.style.right = "-250px";
    }
}
var x = document.getElementById("text-1");
var y = document.getElementById("text-2");
var z = document.getElementById("text-3");
var m = document.getElementById("text-4");
function myFunction1() {
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        m.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        m.style.display = "none";
    }
}
function myFunction2() {
    if (y.style.display === "none") {
    y.style.display = "block";
        x.style.display = "none";
        z.style.display = "none";
        m.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        m.style.display = "none";
    }
}
function myFunction3() {
    if (z.style.display === "none") {
        z.style.display = "block";
        y.style.display = "none";
        x.style.display = "none";
        m.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        m.style.display = "none";
    }
}
function myFunction4() {
    if (m.style.display === "none") {
        m.style.display = "block";
        y.style.display = "none";
        x.style.display = "none";
        z.style.display = "none";
    } else {
        x.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        m.style.display = "none";
    }
}