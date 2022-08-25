var myAudio = document.getElementById("myAudio");
console.log(myAudio);

var btn1 = document.getElementById("btn");

btn1.onclick = performAudioTasks;
function performAudioTasks() {
    myAudio.play();
    myAudio.src = "./Kesariya(PagalWorld.com.se).mp3 ";
    myAudio.play();
    myAudio.load();
    myAudio.autoplay = true;
    if(myAudio.muted == true) {
        myAudio.muted = true;
    }
    else {
        myAudio.muted = true;
    }
}

var newAudio = new Audio();
newAudio.src = "./";
newAudio.play();
newAudio.loop = true;
newAudio.play();