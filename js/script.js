const $start = document.getElementById("start");
const $game = document.getElementById("game");
const $time = document.getElementById("time");
const $timeHeader = document.getElementById("time-header");
const $result = document.getElementById("result");
const $resultHeader = document.getElementById("result-header");
const $gameTime = document.getElementById("game-time");

const images = [
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
  "img/img4.jpg",
  "img/img5.jpg",
];

// console.log(
//   $start,
//   $game,
//   $time,
//   $timeHeader,
//   $result,
//   $resultHeader,
//   $gameTime
// );

let score = 0;

$start.addEventListener("click", startGame);
$game.addEventListener("click", handleBox);
$gameTime.addEventListener("input", setGameTime);


function startGame() { 
  $start.classList.toggle("hide");
  $gameTime.setAttribute("disabled", true);
  $game.style.background = "linear-gradient(to bottom, red, gray)";
  setGameTime();
  score = 0;


  let timeGame = +$time.innerText;

  let interval = setInterval(function () {
    // console.log("interval", timeGame);

    if (timeGame <= 0) {
      clearInterval(interval);
      endGame();
    } else {
      timeGame = (timeGame - 0.1).toFixed(1);
      $time.innerText = timeGame;
    }
  }, 100);
  renderBox();
}

function endGame() {
  $start.classList.toggle("hide");
  $game.style.background = "#ccc";
  $gameTime.removeAttribute("disabled");
  
  $timeHeader.classList.toggle("hide");
  $game.innerHTML = "";
  setScore()
}

function renderBox() {
  $game.innerHTML = "";

  let box = document.createElement("div");
  let boxSize = getRandom(30, 150);
  let gameZone = $game.getBoundingClientRect();
  let maxLeft = gameZone.width - boxSize;
  let maxTop = gameZone.height - boxSize;
  let randomIndex = getRandom(0, images.length)

  box.style.width = box.style.height = boxSize + "px";
  box.style.background = `url(${images[randomIndex]}) center/cover`;
  box.style.cursor = "pointer";
  box.setAttribute("id", "check");
  box.style.position = "absolute";
  box.style.left = getRandom(0, maxLeft) + "px";
  box.style.top = getRandom(0, maxTop) + "px";

  $game.appendChild(box);
}

function handleBox(event) {
  if (event.target.id === "check") {
    score += 1;
    renderBox();
    console.log("clicked");
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function setScore(){
    $result.innerText = score;
    $resultHeader.classList.toggle("hide");
}

function setGameTime(){
    if ($timeHeader.classList.contains("hide")) {
        $resultHeader.classList.toggle("hide");
        $timeHeader.classList.toggle("hide");
    }

    let gameTime = +$gameTime.value;
    $time.innerText = gameTime.toFixed(1);
}



// function getRandom(n) {
//   return Math.floor(Math.random() * n);
// }

// const imgHolder = document.getElementById
// ("img_holder");

// let src = getRandom(imgSrc.length);
// imgHolder.style.background = `url(${imgSrc[src]})center/cover`;

// console.log(getRandom(4));






// const $start = document.getElementById("start");
// const $game = document.getElementById("game");
// const $time = document.getElementById("time");
// const $timeHeader = document.getElementById("timeHeader");
// const $result = document.getElementById("result");
// const $resultHeader = document.getElementById("resultHeader");
// const $gametime = document.getElementById("gametime");

// console.log($start, $game, $time, $timeHeader, $result, $resultHeader, $gametime);

// $start.addEventListener("click", startGame);
// $game.addEventListener("click", handleBox);

// function startGame() {
//     $start.classList.toggle("hide");
//     $gametime.setAttribute("disabled", true)
//     $game.style.background = "linear-gradient(to bottom, red, grey)";

//     let timeGame = +$time.innerText;

//     let interval = setInterval (function(){
//         console.log("interval", timeGame);

//         if (timeGame <= 0) {
//             clearInterval(interval);
//             endGame();
//         } else {
//             timeGame = (timeGame - 0.1).toFixed(1);
//             $time.innerText = timeGame;
//         }
//     },100);
//     renderBox()
// }

// function endGame() {
//     $start.classList.toggle("hide");
//     $game.style.background = "#ccc";
//     $gametime.removeAttribute("disabled");
//     $game.innerHTML = "";
// }

// function renderBox(){
//     let box = document.createElement("div");

//     box.style.width = box.style.height = "150px";
//     box.style.background = "#000"
//     box.style.cursor = "pointer";
//     box.setAttribute("id", "check")
//     $game.appendChild(box);
// }

// function handleBox(even){
//     if (event.target.id === "check"){
//         renderBox();
//         console.log("clicked");
//     }
// }

// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max-min) + min);
// }








































