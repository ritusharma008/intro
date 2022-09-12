var heading = document.querySelector('h1');
heading.innerText = 'ritu sharma';
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var form = document.querySelector('.myForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var newP = document.createElement('p');
    // newP.innerText = (input1.valueAsNumber + input2.valueAsNumber) as unknown as string;
    var result = input1.valueAsNumber + input2.valueAsNumber;
    newP.innerText = result;
    form.appendChild(newP);
    console.log(result);
});
