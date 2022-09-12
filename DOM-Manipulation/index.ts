var heading = document.querySelector('h1') as HTMLHeadElement;
heading.innerText='ritu sharma';

var input1 = document.getElementById('num1') as HTMLInputElement;
var input2 = document.getElementById('num2') as HTMLInputElement;

var form = document.querySelector('.myForm') as HTMLFormElement;

form.addEventListener('submit', function(e:Event) {
    e.preventDefault();
    let newP = document.createElement('p');
    // newP.innerText = (input1.valueAsNumber + input2.valueAsNumber) as unknown as string;
let result = input1.valueAsNumber + input2.valueAsNumber;
newP.innerText =<string><unknown>result;
form.appendChild(newP);
})

