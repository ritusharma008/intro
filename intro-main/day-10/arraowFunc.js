// var add = function(a,b) {
//     return a+b;
// }
// console.log(add(2,3));


//arrow function
var add= (a,b) =>  a+b ;            //for one line code
console.log(add(2,3));

var sayHello = () => {          //for more than one line code
    console.log("csdjfnsdkjd");
    console.log("csdjfnsdkjd");
}
sayHello();


//variation-2
var sqr = (a) => console.log("result " +a*a);
sqr(5);


var arr =[1,3,5,7];
arr.forEach((a) => console.log(a*10));


//map function return new array but forEach doesn't return anythng.

//array of objects--
var users = [
    { firstName: "ritu", lastName: " sharma " },
    { firstName: "dsjhdsf", lastName: " arefjja " },
];
var fullName = users.map((i) => {
    return i.firstName+" "+ i.lastName;
});
console.log(fullName);


//filter method

var ages = [20,30,40,50];
var result = ages.filter((age) => {return age > 20});
console.log(result);



//timeout function
setTimeout(callback,3000);
function callback() {
    console.log("hello");
}

//by arrow function
setTimeout(() => {
    console.log("HELLO");
}, 5000);