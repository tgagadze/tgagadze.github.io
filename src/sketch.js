let box;
let Bottles;
let canvasWidth;
let canvasHeight;

let score = 0;
let totalScores = 0;
let scoreTarget = 5;
let stage = 1;
let stageSpan;
let targetSpan;
let scoresTotalSpan;
let girlImage;

let beerImage;
let backgroundImage;

let speedMin = 0.5;
let speedMax = 2;

let rate = 0.01;

let btnReset;
let btnContinue;

let fontsize = 32;
let targetStage = 6;

function preload() {
  girlImage = document.querySelector(".image");
  beerImage = loadImage("src/img/beer3.png");
  boxImage = loadImage("src/img/box.png");
  backgroundImage = loadImage("src/img/background.jpg");
  canvasHeight = windowHeight;
  canvasWidth = windowWidth;
}

function setup() {
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.mouseClicked(continueSketch);
  box = new Box(25, canvasHeight - 90);
  Bottles = [];
  // stageSpan = document.querySelector(".stage");
  // targetSpan = document.querySelector(".target");
  // scoresTotalSpan = document.querySelector(".total_scores");
  // btnReset = document.querySelector(".reset");
  // btnContinue = document.querySelector(".continue");

  // btnReset.addEventListener("click", resetSketch);
  // btnContinue.addEventListener("click", continueSketch);

  textSize(fontsize);
  textAlign(CENTER, CENTER);

  console.log(windowWidth, windowHeight);
}

function resetSketch() {
  box = new Box(25, canvasHeight - 100);
  Bottles = [];
  score = 0;
  totalScores = 0;
  scoreTarget = 5;
  stage = 1;
  speedMin = 0.5;
  speedMax = 1.5;
  rate = 0.01;
  girlImage.src = "src/img/question.png";
  loop();
}

function continueSketch() {
  loop();
}

function showMessage(stage) {
  fill(0);
  text(
    `Stage ${stage} has been completed\n Get Redy for the next one`,
    canvasWidth / 2,
    canvasHeight / 2
  );
}

function draw() {
  background(backgroundImage);
  box.move();
  box.show();
  if (random(1) < rate) {
    Bottles.push(
      new Bottle(random(0, canvasWidth - 50), random(speedMin, speedMax))
    );
  }
  for (let i = 0; i < Bottles.length; i++) {
    if (Bottles[i].y + Bottles[i].height >= box.y) {
      if (
        Bottles[i].x >= box.x &&
        Bottles[i].x + Bottles[i].width <= box.x + 100
      ) {
        Bottles.splice(i, 1);
        score++;
        totalScores++;
      } else if (Bottles[i].y >= box.y) {
        fill(0);
        text(
          "You Lost\nPress Restart to try again",
          canvasWidth / 2,
          canvasHeight / 2
        );
        resetSketch();
        noLoop();
      }
    }
    if (Bottles[i]) {
      Bottles[i].move();
      Bottles[i].show();
    }
  }

  if (score === scoreTarget && stage !== targetStage) {
    showMessage(stage);
    scoreTarget += 5 * stage;
    stage++;
    score = 0;
    girlImage.src = `src/img/${stage}.jpg`;
    speedMin += 1;
    speedMax += 1;
    rate += 0.005;
    noLoop();
  } else if (stage === targetStage) {
    fill(255, 100, 100);
    text(
      "You Win\nPress Restart to try again",
      canvasWidth / 2,
      canvasHeight / 2
    );
    noLoop();
  }
  // stageSpan.innerHTML = "Stage: " + stage;
  // targetSpan.innerHTML = `Target: ${score}/${scoreTarget}`;
  // scoresTotalSpan.innerHTML = `Scores Total: ${totalScores}`;
}
