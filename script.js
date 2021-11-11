"use strict";

var screen = "";
var ans = "";
var sign = false;

var num = document.getElementsByClassName('number');
var operator = document.getElementsByClassName('operator');

document.getElementById('screen-clear').addEventListener('click', clear);
document.getElementById('equal').addEventListener('click', displayAns);

for(var i of num) {
    i.addEventListener('click', fn1); 
}
for(var i of operator) {
    i.addEventListener('click', fn2)
}

function fn1() {
    sign = false;

    var string = document.getElementById(this.id).innerHTML;
    screen += string;
    ans += string;

    refreshScreen();
}

function fn2() {
    var string = document.getElementById(this.id).innerHTML;

    if(sign) {
        ans = ans.slice(0, -1);
        ans += string;
    } else {
        ans += string;
    }

    screen = "";
    sign = true;

    refreshScreen();
}

function refreshScreen() {
    if(screen == "Infinity") screen = "Error";
    document.getElementById('screen').innerHTML = screen;
}

function clear() {
    ans = "";
    screen = "";

    refreshScreen();
}

function displayAns() {
    screen = eval(ans);
    ans = screen;

    refreshScreen();
}