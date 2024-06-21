// pacman styling orientation
// right/default =   transform: rotate(0deg) scaleX(1);
// down =   transform: rotate(90deg) scaleX(1);
// up =   transform: rotate(-90deg) scaleX(1);
// left =   transform: rotate(0deg) scaleX(-1);

// 1. assign action to the button to execute the movement of pacman
// 2. pacman move with 50px distant in the direction of button pressed
// 3. pacman cannot move out of the game area

const pacman = document.querySelector("#pacman");
const up = document.querySelector("#up");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const down = document.querySelector("#down");
const gameField = document.querySelector("#gameField");

function moveRight() {
  console.log("Right");
  // assign pacman styling
  pacman.style.transform = "rotate(0deg) scaleX(1)";
  const currentLeft = parseInt(pacman.style.left || 0);
  const newLeft = currentLeft + 70;
  const maxWidth = gameField.offsetWidth;
  const gameFieldWidth = maxWidth - 77;
  console.log(newLeft);
  console.log(gameFieldWidth);
  if (newLeft < gameFieldWidth) {
    pacman.style.left = newLeft + "px";
  } else pacman.style.left = gameFieldWidth - 25 + "px";
}

function moveLeft() {
  console.log("Left");
  pacman.style.transform = "rotate(0deg) scaleX(-1)";
  const currentLeft = parseInt(pacman.style.left || 0);
  const newLeft = currentLeft - 70;
  if (newLeft >= 0) {
    pacman.style.left = newLeft + "px";
  } else pacman.style.left = "0px";
}

function moveUp() {
  console.log("Up");
  pacman.style.transform = "rotate(-90deg) scaleX(1)";
  const currentTop = parseInt(pacman.style.top || 0);
  const newTop = currentTop - 70;
  if (newTop >= 0) {
    pacman.style.top = newTop + "px";
  } else pacman.style.top = "0px";
}

function moveDown() {
  console.log("Down");
  pacman.style.transform = "rotate(90deg) scaleX(1)";
  const currentTop = parseInt(pacman.style.top || 0);
  const newTop = currentTop + 70;
  const maxHeight = gameField.scrollHeight;
  const gameFieldHeight = maxHeight - 75;
  console.log(newTop);
  console.log(gameFieldHeight);
  if (newTop < gameFieldHeight) {
    pacman.style.top = newTop + "px";
  } else pacman.style.top = gameFieldHeight - 25 + "px";
}

// move by detect keypress
document.addEventListener("keydown", function (event) {
  //   console.log(event.key);

  if (event.key === "ArrowRight") {
    moveRight();
  } else if (event.key === "ArrowLeft") {
    moveLeft();
  } else if (event.key === "ArrowUp") {
    moveUp();
  } else if (event.key === "ArrowDown") {
    moveDown();
  }
});

// move by detecting click button
right.addEventListener("click", function () {
  moveRight();
});
left.addEventListener("click", function () {
  moveLeft();
});
up.addEventListener("click", function () {
  moveUp();
});
down.addEventListener("click", function () {
  moveDown();
});
