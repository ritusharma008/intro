window.onload = function() {
    setInterval(() => {
        stopLoader();
    }, 3000);
};
function stopLoader() {
    document.querySelector('.container').style.display = "none";
    document.getElementById('todoCon').style.display = "block";
}



var todoInput = document.querySelector(".todo-input");
var btn = document.querySelector("button");
var todoList = document.querySelector(".todo-list");

btn.onclick = function createTodo(e) {
    e.preventDefault();
    if(todoInput.value=="")
    {
        alert("Fill the To-Do List");
    }
    else{

    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");

    var newLi = document.createElement("li");
    newLi.classList.add("todo_items");
    newLi.innerHTML = todoInput.value;
    newDiv.appendChild(newLi);

    var optbtn = document.createElement("button");
    optbtn.classList.add("optbtn");
    optbtn.innerHTML = '<i class="fa fa-check"></i>'
    newDiv.appendChild(optbtn);

    var dltbtn = document.createElement("button");
    dltbtn.classList.add("dltbtn");
    dltbtn.innerHTML = '<i class="fa fa-trash"></i>'
    newDiv.appendChild(dltbtn);

    todoList.appendChild(newDiv);
    todoInput.value = "";

}}

    todoList.onclick = function checkbtn(e) {
        var check = e.target;
        //console.log(check);

        if(check.classList[0] == "dltbtn") {
            console.log("delete button pessed");
            var parentNode = check.parentNode;
            parentNode.remove();
        }
        else if(check.classList[0]== "optbtn") {
            console.log("complete button pressed");
            var parentNode = check.parentNode;
            parentNode.classList.add("check");
        }
    }



    

    


















