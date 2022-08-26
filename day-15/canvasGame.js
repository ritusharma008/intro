// selector
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const image = document.getElementById("source");
const birds = document.getElementById('bird');

const player = {
  w: 80,
  h: 100,
  x: 20,
  y: 200,
  speed: 5,
  dx: 0,
  dy: 0
};

const bird = {
    // w: 50,
    // h: 70,
    x: 10,
    y: 70,
    dx: 0,
     dy: 0
 };
function flyBird() {
    ctx.drawImage(birds,bird.x,bird.y, player.w,player.h);
}

function drawPlayer() {
  ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos() {
  player.x += player.dx;
  player.y += player.dy;

  detectWalls();
}


// function newPosBird() {
//     player.x += player.dx;
//     player.y += player.dy;
  
//     wallBirds();
//   }


function detectWalls() {
  // Left wall
  if (player.x < 0) {
    player.x = 0;
  }

  // Right Wall
  if (player.x + player.w > canvas.width) {
    player.x = canvas.width - player.w;
  }

  // Top wall
  if (player.y < 0) {
    player.y = 0;
  }

  // Bottom Wall
  if (player.y + player.h > canvas.height) {
    player.y = canvas.height - player.h;
  }
}

// detect wall for birds
// function wallBirds() {
//     // Left wall
//     if (bird.x < 0) {
//       bird.x = 0;
//     }
  
//     // Right Wall
//     if (bird.x + bird.w > bird.width) {
//       bird.x = bird.width - bird.w;
//     }
  
//     // Top wall
//     if (bird.y < 0) {
//       bird.y = 0;
//     }
  
//     // Bottom Wall
//     if (bird.y + bird.h > canvas.height) {
//       player.y = canvas.height - bird.h;
//     }
//   }


// Create Animation
function update() {


  clear();
 
  drawPlayer();



  newPos();

  requestAnimationFrame(update);
  flyBird();
}

function moveUp() {
  player.dy = -player.speed;
}

function moveDown() {
  player.dy = player.speed;
}

function moveRight() {
  player.dx = player.speed;
}

function moveLeft() {
  player.dx = -player.speed;
}

function keyDown(e) {
  console.log(e.key);
  if (e.key === "ArrowRight" || e.key === "Right") {
    moveRight();
  } else if (e.key === "ArrowLeft" || e.key === "Left") {
    moveLeft();
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    moveUp();
  } else if (e.key === "ArrowDown" || e.key === "Down") {
    moveDown();
  }
}

function keyUp(e) {
  if (
    e.key == "Right" ||
    e.key == "ArrowRight" ||
    e.key == "Left" ||
    e.key == "ArrowLeft" ||
    e.key == "Up" ||
    e.key == "ArrowUp" ||
    e.key == "Down" ||
    e.key == "ArrowDown"
  ) {
    player.dx = 0;
    player.dy = 0;
  }
}

update();

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
