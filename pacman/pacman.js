const canvas = document.getElementById("pacMan");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

class Boundary {
  static width = 40;
  static height = 40;
  constructor({ position, image }) {
    this.position = position;
    this.width = 40;
    this.height = 40;
    this.image = image;
  }
  draw() {
    // ctx.fillStyle = "blue";
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    ctx.drawImage(this.image, this.position.x, this.position.y);
  }
}

class PacMan {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 15;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

const boundaries = [];
const pacMan = new PacMan({
  position: {
    x: Boundary.width + Boundary.width / 2,
    y: Boundary.height + Boundary.height / 2,
  },
  velocity: {
    x: 0,
    y: 0,
  },
});

const keys = {
  ArrowUp: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
  ArrowDown: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
};

let lastKey = "";

const map = [
  [
    "1",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "2",
  ],
  [
    "|",
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    "-",
    3,
    "-",
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    "|",
  ],
  [
    "|",
    2,
    "-",
    "-",
    2,
    "-",
    "-",
    "-",
    "-",
    "-",
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    "-",
    "-",
    "-",
    "-",
    "-",
    2,
    2,
    "-",
    "-",
    "-",
    2,
    "-",
    "-",
    "-",
    "-",
    "-",
    2,
    "-",
    2,
    "|",
  ],

  [
    "|",
    2,
    "-",
    2,
    2,
    "-",
    2,
    2,
    2,
    "-",
    2,
    "-",
    "-",
    "-",
    "-",
    "-",
    2,
    "-",
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    "-",
    2,
    2,
    2,
    2,
    2,
    "-",
    2,
    "|",
  ],
  [
    "|",
    2,
    2,
    2,
    2,
    "-",
    2,
    "-",
    2,
    2,
    2,
    "-",
    5,
    0,
    5,
    "-",
    2,
    "-",
    3,
    2,
    2,
    2,
    "-",
    "-",
    "-",
    "-",
    "-",
    2,
    "-",
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    "|",
  ],
  [
    "|",
    "-",
    "-",
    2,
    2,
    "-",
    3,
    "-",
    "-",
    2,
    2,
    "-",
    0,
    0,
    0,
    "-",
    2,
    "-",
    "-",
    "-",
    "-",
    2,
    "-",
    0,
    0,
    0,
    "-",
    2,
    "-",
    "-",
    "-",
    "-",
    2,
    2,
    "-",
    "-",
    "|",
  ],
  [
    "|",
    0,
    0,
    0,
    2,
    "-",
    2,
    "-",
    2,
    2,
    2,
    "-",
    5,
    0,
    5,
    "-",
    2,
    "-",
    2,
    2,
    2,
    2,
    "-",
    "-",
    "-",
    "-",
    "-",
    2,
    "-",
    2,
    2,
    2,
    2,
    0,
    0,
    0,
    "|",
  ], //exit
  [
    "|",
    "-",
    "-",
    2,
    2,
    "-",
    2,
    2,
    2,
    "-",
    2,
    "-",
    "-",
    "-",
    "-",
    "-",
    2,
    "-",
    2,
    "-",
    "-",
    2,
    "-",
    3,
    2,
    2,
    2,
    2,
    "-",
    2,
    2,
    2,
    2,
    2,
    "-",
    "-",
    "|",
  ],
  [
    "|",
    3,
    2,
    2,
    2,
    "-",
    "-",
    "-",
    "-",
    "-",
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    "-",
    2,
    2,
    2,
    2,
    "-",
    "-",
    "-",
    "-",
    "-",
    2,
    "-",
    "-",
    "-",
    "-",
    "-",
    2,
    2,
    2,
    "|",
  ],
  [
    "|",
    2,
    "-",
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    "-",
    2,
    "-",
    "-",
    "-",
    2,
    2,
    2,
    "-",
    "-",
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    "-",
    2,
    "|",
  ],
  [
    "|",
    2,
    "-",
    "-",
    "-",
    2,
    "-",
    "-",
    2,
    "-",
    2,
    "-",
    "-",
    "-",
    2,
    "-",
    2,
    2,
    "-",
    0,
    0,
    "-",
    2,
    2,
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    2,
    "|",
  ],
  [
    "|",
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    "-",
    0,
    0,
    0,
    0,
    "-",
    4,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    "|",
  ],
  [
    "3",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "4",
  ],
];
// "-"-border; 2-dot; 3-powerDot; 4-pacMan; 5-ghost;

// const map = [
//   ["-", "-", "-", "-", "-", "-", "-"],
//   ["-", " ", " ", " ", " ", " ", "-"],
//   ["-", " ", " ", " ", " ", " ", "-"],
//   ["-", " ", " ", " ", " ", " ", "-"],
//   ["-", "-", "-", "-", "-", "-", "-"],
// ];

function createImage(src) {
  const image = new Image();
  image.src = src;
  return image;
}

map.forEach((row, i) => {
  row.forEach((symbol, ind) => {
    switch (symbol) {
      case "-":
        boundaries.push(
          new Boundary({
            position: {
              x: Boundary.width * ind,
              y: Boundary.height * i,
            },
            image: createImage("./images/pipeHorizontal.png"),
          })
        );
        break;
      case "|":
        boundaries.push(
          new Boundary({
            position: {
              x: Boundary.width * ind,
              y: Boundary.height * i,
            },
            image: createImage("./images/pipeVertical.png"),
          })
        );
        break;
      case "1":
        boundaries.push(
          new Boundary({
            position: {
              x: Boundary.width * ind,
              y: Boundary.height * i,
            },
            image: createImage("./images/pipeCorner1.png"),
          })
        );
        break;
      case "2":
        boundaries.push(
          new Boundary({
            position: {
              x: Boundary.width * ind,
              y: Boundary.height * i,
            },
            image: createImage("./images/pipeCorner2.png"),
          })
        );
        break;
      case "3":
        boundaries.push(
          new Boundary({
            position: {
              x: Boundary.width * ind,
              y: Boundary.height * i,
            },
            image: createImage("./images/pipeCorner3.png"),
          })
        );
        break;
      case "4":
        boundaries.push(
          new Boundary({
            position: {
              x: Boundary.width * ind,
              y: Boundary.height * i,
            },
            image: createImage("./images/pipeCorner4.png"),
          })
        );
        break;
    }
  });
});

function circleCollidesWithRectangle({ circle, rectangle }) {
  return (
    circle.position.y - circle.radius + circle.velocity.y <=
      rectangle.position.y + rectangle.height &&
    circle.position.x + circle.radius + circle.velocity.x >=
      rectangle.position.x &&
    circle.position.y + circle.radius + circle.velocity.y >=
      rectangle.position.y &&
    circle.position.x - circle.radius + circle.velocity.x <=
      rectangle.position.x + rectangle.width
  );
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (keys.ArrowUp.pressed && lastKey === "ArrowUp") {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        circleCollidesWithRectangle({
          circle: {
            ...pacMan,
            velocity: {
              x: 0,
              y: -5,
            },
          },
          rectangle: boundary,
        })
      ) {
        pacMan.velocity.y = 0;
        break;
      } else {
        pacMan.velocity.y = -5;
      }
    }
  } else if (keys.ArrowLeft.pressed && lastKey === "ArrowLeft") {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        circleCollidesWithRectangle({
          circle: {
            ...pacMan,
            velocity: {
              x: -5,
              y: 0,
            },
          },
          rectangle: boundary,
        })
      ) {
        pacMan.velocity.x = 0;
        break;
      } else {
        pacMan.velocity.x = -5;
      }
    }
  } else if (keys.ArrowDown.pressed && lastKey === "ArrowDown") {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        circleCollidesWithRectangle({
          circle: {
            ...pacMan,
            velocity: {
              x: 0,
              y: 5,
            },
          },
          rectangle: boundary,
        })
      ) {
        pacMan.velocity.y = 0;
        break;
      } else {
        pacMan.velocity.y = 5;
      }
    }
  } else if (keys.ArrowRight.pressed && lastKey === "ArrowRight") {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        circleCollidesWithRectangle({
          circle: {
            ...pacMan,
            velocity: {
              x: 5,
              y: 0,
            },
          },
          rectangle: boundary,
        })
      ) {
        pacMan.velocity.x = 0;
        break;
      } else {
        pacMan.velocity.x = 5;
      }
    }
  }

  boundaries.forEach((boundary) => {
    boundary.draw();

    if (
      circleCollidesWithRectangle({
        circle: pacMan,
        rectangle: boundary,
      })
    ) {
      pacMan.velocity.x = 0;
      pacMan.velocity.y = 0;
    }
  });

  pacMan.update();
  // pacMan.velocity.y = 0;
  // pacMan.velocity.x = 0;
}

animate();

addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "ArrowUp":
      keys.ArrowUp.pressed = true;
      lastKey = "ArrowUp";
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = true;
      lastKey = "ArrowLeft";
      break;
    case "ArrowDown":
      keys.ArrowDown.pressed = true;
      lastKey = "ArrowDown";
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = true;
      lastKey = "ArrowRight";
      break;
  }
});

addEventListener("keyup", ({ key }) => {
  switch (key) {
    case "ArrowUp":
      keys.ArrowUp.pressed = false;
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      break;
    case "ArrowDown":
      keys.ArrowDown.pressed = false;
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = false;
      break;
  }
});

// const tileSize = 20;

// canvas.width = map[0].length * tileSize;
// canvas.height = map.length * tileSize;

// let pacMan = { x: 0, y: 0, dx: 0, dy: 0, mouth: 0 };
// let score = 0;
// let ghosts = [
//   { x: 0, y: 0, color: "red" },
//   { x: 0, y: 0, color: "blue" },
//   { x: 0, y: 0, color: "pink" },
//   { x: 0, y: 0, color: "mediumseagreen" },
// ];

// function drawBoard() {
//   ctx.fillStyle = "black";
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   for (let row = 0; row < map.length; row++) {
//     for (let col = 0; col < map[row].length; col++) {
//       let x = col * tileSize;
//       let y = row * tileSize;

//       if (map[row][col] === "-") {
//         // Draw wall
//         ctx.fillStyle = "blue";
//         ctx.fillRect(x, y, tileSize, tileSize);
//       } else if (map[row][col] === 2) {
//         // Draw small dot (regular pellet)
//         ctx.fillStyle = "gold";
//         ctx.beginPath();
//         ctx.arc(x + tileSize / 2, y + tileSize / 2, 2, 0, Math.PI * 2);
//         ctx.fill();
//       } else if (map[row][col] === 3) {
//         // Draw big dot (power pellet)
//         ctx.fillStyle = "gold";
//         ctx.beginPath();
//         ctx.arc(x + tileSize / 2, y + tileSize / 2, 6, 0, Math.PI * 2);
//         ctx.fill();
//       }
//     }
//   }
// }

// function drawPacMan() {
//   ctx.fillStyle = "yellow";
//   ctx.beginPath();

//   let mouthAngle = Math.sin(pacMan.mouth) * 0.3;
//   ctx.arc(
//     pacMan.x * tileSize + tileSize / 2,
//     pacMan.y * tileSize + tileSize / 2,
//     tileSize / 2.5,
//     (0.2 - mouthAngle) * Math.PI,
//     ("-".8 + mouthAngle) * Math.PI
//   );

//   ctx.lineTo(
//     pacMan.x * tileSize + tileSize / 2,
//     pacMan.y * tileSize + tileSize / 2
//   );
//   ctx.fill();
// }

// function drawGhosts() {
//   ghosts.forEach((ghost) => {
//     ctx.fillStyle = ghost.vulnerable ? "white" : ghost.color; // Vulnerable ghosts are white
//     ctx.beginPath();
//     ctx.arc(
//       ghost.x * tileSize + tileSize / 2,
//       ghost.y * tileSize + tileSize / 2,
//       tileSize / 2,
//       0,
//       Math.PI * 2
//     );
//     ctx.fill();

//     // Eyes
//     ctx.fillStyle = "black";
//     ctx.beginPath();
//     ctx.arc(
//       ghost.x * tileSize + 10,
//       ghost.y * tileSize + 10,
//       2,
//       0,
//       Math.PI * 2
//     );
//     ctx.arc(
//       ghost.x * tileSize + 20,
//       ghost.y * tileSize + 10,
//       2,
//       0,
//       Math.PI * 2
//     );
//     ctx.fill();
//   });
// }

// function findStartPositions() {
//   let ghostIndex = 0;
//   for (let row = 0; row < map.length; row++) {
//     for (let col = 0; col < map[row].length; col++) {
//       if (map[row][col] === 4) {
//         pacMan.x = col;
//         pacMan.y = row;
//         map[row][col] = 0; // Clear map tile
//       } else if (map[row][col] === 5 && ghostIndex < ghosts.length) {
//         ghosts[ghostIndex].x = col;
//         ghosts[ghostIndex].y = row;
//         ghostIndex++;
//         map[row][col] = 0; // Clear map tile
//       }
//     }
//   }
// }

// // Call this function before starting the game
// findStartPositions();

// function setDirection(dx, dy) {
//   if (canMove(pacMan.x + dx, pacMan.y + dy)) {
//     pacMan.dx = dx;
//     pacMan.dy = dy;
//   }
// }

// function canMove(x, y) {
//   return map[y] && map[y][x] !== "-";
// }

// function updatePacMan() {
//   if (canMove(pacMan.x + pacMan.dx, pacMan.y + pacMan.dy)) {
//     pacMan.x += pacMan.dx;
//     pacMan.y += pacMan.dy;
//   }
// }

// const pacManSpeed = 0."-"; // Speed of PacMan, lower value = smoother movement
// const frameRate = 1000 / 60; // 60 FPS, or update every 16.67ms

// function movePacMan() {
//   if (pacMan.dx !== 0 || pacMan.dy !== 0) {
//     let nextX = pacMan.x + pacMan.dx * pacManSpeed;
//     let nextY = pacMan.y + pacMan.dy * pacManSpeed;

//     if (canMove(Math.floor(nextX), Math.floor(nextY))) {
//       pacMan.x = nextX;
//       pacMan.y = nextY;

//       // Handle dot eating logic
//       let nextTile = map[Math.floor(pacMan.y)][Math.floor(pacMan.x)];
//       if (nextTile === 2) {
//         map[Math.floor(pacMan.y)][Math.floor(pacMan.x)] = 0;
//         score += 10;
//       } else if (nextTile === 3) {
//         map[Math.floor(pacMan.y)][Math.floor(pacMan.x)] = 0;
//         score += 50;
//         activatePowerMode();
//       }
//     }
//   }
// }

// function moveGhosts() {
//   ghosts.forEach((ghost) => {
//     let directions = [
//       { dx: "-", dy: 0 },
//       { dx: -"-", dy: 0 },
//       { dx: 0, dy: "-" },
//       { dx: 0, dy: -"-" },
//     ];

//     let randomDir = directions[Math.floor(Math.random() * directions.length)];
//     let newX = ghost.x + randomDir.dx;
//     let newY = ghost.y + randomDir.dy;

//     if (canMove(newX, newY)) {
//       ghost.x = newX;
//       ghost.y = newY;
//     }
//   });
// }

// let powerModeActive = false;
// let powerTimer;

// function activatePowerMode() {
//   powerModeActive = true;

//   // Change ghosts to vulnerable state
//   for (let ghost of ghosts) {
//     ghost.vulnerable = true;
//   }

//   // Set timer for power mode (5 seconds)
//   clearTimeout(powerTimer);
//   powerTimer = setTimeout(() => {
//     powerModeActive = false;
//     for (let ghost of ghosts) {
//       ghost.vulnerable = false;
//     }
//   }, 5000);
// }

// // function eatDot() {
// //   if (map[pacMan.y][pacMan.x] === 2) {
// //     map[pacMan.y][pacMan.x] = 0;
// //     score += 10;
// //   } else if (map[pacMan.y][pacMan.x] === 3) {
// //     map[pacMan.y][pacMan.x] = 0;
// //     score += 50; // bonus power-pellet
// //   }
// // }

// function drawScore() {
//   ctx.font = "20px Arial";
//   ctx.fillStyle = "white";
//   ctx.fillText("Score: " + score, 10, 30);
// }

// function checkGameOver() {
//   ghosts.forEach((ghost) => {
//     if (ghost.x === pacMan.x && ghost.y === pacMan.y) {
//       alert("Game Over!");
//       location.reload();
//     }
//   });
// }

// function gameLoop() {
//   setInterval(() => {
//     // eatDot();
//     movePacMan();
//     moveGhosts();
//     drawBoard();
//     drawPacMan();
//     drawGhosts();
//     drawScore();
//     checkGameOver();
//   }, frameRate);
// }

// // Handle Key Presses
// document.addEventListener("keydown", (event) => {
//   if (event.key === "ArrowRight") setDirection("-", 0);
//   if (event.key === "ArrowLeft") setDirection(-"-", 0);
//   if (event.key === "ArrowUp") setDirection(0, -"-");
//   if (event.key === "ArrowDown") setDirection(0, "-");
// });

// // Start the game loop
// gameLoop();
