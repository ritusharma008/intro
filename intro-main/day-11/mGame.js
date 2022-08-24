var counter=0;
var h1 = document.querySelector('h1');
var strtMoles = document.querySelector('#mole');
var muds = document.querySelector('#mud');
var strtbtn = document.querySelector('#start');

var point = document.querySelectorAll('.points');
var dirts = document.querySelectorAll('.dirt');
var moles = document.querySelectorAll('.mole');

var changeBg = document.querySelector('.chngeBg');

function start() {
    h1.style.visibility = "hidden";
    muds.style.visibility = "hidden";
    strtMoles.style.visibility ="hidden";
    strtbtn.style.visibility = "hidden";
    
    for(let i=0;i<2;i++)  point[i].style.visibility ="visible";
    for(let i=0;i<6;i++) dirts[i].style.visibility = "visible";
    
    setInterval(() => {
        var ran=Math.floor(Math.random()*6);
        moles[ran].style.visibility="visible";
        setTimeout(() => {
        moles[ran].style.visibility="hidden";
        }, 900);
    }, 1000)   
}
function incr() {
    document.getElementById("currentPoint").innerHTML = counter++;
    // console.log(counter);
}

