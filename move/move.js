var time;
var stops;

function a() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/A.jpg')";
    time = setTimeout(b, 1000);
}
function b() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/B.jpg')";
    time = setTimeout(c, 1000);
}
function c() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/C.jpg')";
    time = setTimeout(d, 1000);
}
function d() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/D.png')";
    time = setTimeout(e, 1000);
}
function e() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/E.jpg')";
    time = setTimeout(f, 1000);
}
function f() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/F.jpg')";
    time = setTimeout(g, 1000);
}
function g() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/G.jpg')";
    time = setTimeout(h, 1000);
}
function h() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/H.png')";
    time = setTimeout(i, 1000);
}
function i() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/I.jpg')";
    time = setTimeout(j, 1000);
}
function j() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/J.jpg')";
    time = setTimeout(k, 1000);
}
function k() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/K.jpg')";
    time = setTimeout(l, 1000);
}
function l() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/L.jpg')";
    time = setTimeout(m, 1000);
}
function m() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/M.jpg')";
    time = setTimeout(n, 1000);
}
function n() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/N.jpg')";
    time = setTimeout(o, 1000);
}
function o() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/O.jpg')";
    time = setTimeout(p, 1000);
}
function p() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/P.jpg')";
    time = setTimeout(q, 1000);
}
function q() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/Q.jpg')";
    time = setTimeout(r, 1000);
}
function r() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/R.jpg')";
    time = setTimeout(s, 1000);
}
function s() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/S.png')";
    time = setTimeout(t, 1000);
}
function t() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/T.png')";
    time = setTimeout(u, 1000);
}
function u() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/U.jpg')";
    time = setTimeout(v, 1000);
}
function v() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/V.jpg')";
    time = setTimeout(w, 1000);
}
function w() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/W.jpg')";
    time = setTimeout(x, 1000);
}
function x() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/X.jpg')";
    time = setTimeout(y, 1000);
}
function y() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/Y.jpg')";
    time = setTimeout(z, 1000);
}
function z() {
    document.getElementById("d1").style.backgroundImage = "url('../A-Z/Z.jpg')";
    time = setTimeout(a, 1000);
}

function stop() {
    stops = document.getElementById("d1").value;
    document.getElementById("d1").value=stops;
    clearTimeout(time);
}
function resume() {
    document.getElementById("d1").value=stops;
    time = setTimeout(stops, 1000);
}