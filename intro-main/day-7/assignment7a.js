var sum = 0;
document.body.style.fontSize="50px";
document.body.style.color="red";
document.body.style.textAlign="center";
document.body.style.paddingTop="18%";
while(true) {
    var user = parseInt(prompt("Enter positive number. If you enter negative number then it will terminate."));
    if(user >= 0) {
        sum += user;
    }
    else {
        break; 
    }
}
document.write(sum);
