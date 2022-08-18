document.title = "new dom";   //title change with the help of DOM.
var x =document.getElementById("head1");
console.log(x);

var y = document.getElementsByClassName("para");
console.log(y);

var z = document.getElementsByTagName("ul");
console.log(z);

var a =document.querySelector(".para");        //it select only one element 
console.log(a);

var b = document.querySelectorAll(".para");
console.log(b[1]);

x.style.backgroundColor = "yellow";
x.innerText = "New Heading";

x.style.display ="none";        //x.style.visibility = "hidden"

b[1].style.fontFamily = "arial";
b[1].style.color = "red";

// we can use css on collection,apply ony on elements.
// for(var i =0; i<y.length;i++)


// function performTask() {
//     alert("btn clicked") ;
//     console.log("some statemnet is ");
// }

var btn = querySelector("button");
console.log(btn);

//using 2 way

btn.onmouseover = function() {
    document.querySelector("p").style.backgroundColor = "pink";
}


btn.onmouseleave = () => 
    (document.querySelector("p").style.backgroundColor = "blue");


    //way-3

    btn.addEventListener("click",task1);
    // remove listner
    btn.removeEventListener("click", task1)

    function task() {
        document.getElementById('head1').style.display = "none";
    }


