// console.log("welcome to javascript world");
// var a =10 ;
// var b =5;
// var c;
// c = a+b;
// console.log(c);


//Assignment 1

var date = new Date();
var week = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dateFormat = "<i> Today Date: </i>" + date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() ;
document.write(dateFormat) ; 
var dayFormat = "<br> <i>Today Day: </i>"+ week[date.getDay()];
document.write(dayFormat);

//Assignment 2
document.body.style.backgroundColor = "lightblue";
document.body.style.fontSize = "35px";
// document.body.style.paddingTop="25%";
// document.user.style.color = "pink"

var user = window.prompt("Enter your name");
 document.write("<br>"+"<u> Your name is:</u> "+ user.fontcolor("voilet"));


// assignment 3
var input1 = parseInt(window.prompt("enter first number"));
var input2 = parseInt(window.prompt("enter second number"));
var sum = input1 + input2;
document.write("<br>"+"<b> sum is </b> : " +sum);

var sub = input1 - input2;
document.write("<br>"+"<b> subtraction is </b> : " +sub);

var multiple = input1 * input2;
document.write("<br>"+"<b> multiple is: </b> " +multiple);

var divide = input1 / input2;
document.write("<br>" + "<b> divide is: </b> " +divide);

// Ques = 4
// node myScript.js