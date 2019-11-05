// eslint-disable-next-line no-empty-function
function Game() {}

Game.prototype = {
  start: function() {
    game.state.add("boot", BootState);
    game.state.add("preload", PreloadState);
    game.state.add("main-intro", MainIntroState);
    game.state.add("main-menu", MainMenuState);
    game.state.add("level-master", LevelMasterState);
    game.state.add("level-intro", MainIntroState);
    game.state.add("level-round", LevelRoundState);
    game.state.start("boot");
    var config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      backgroundColor: "#010101",
      parent: "phaser-example",
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 3 },
          debug: false
        }
      },
      
      scene: {
        preload: preload,
        create: create,
        update: update
      }
    };

    config.state.add("boot", BootState);
    config.state.add("preload", PreloadState);
    config.state.add("main-intro", MainIntroState);
    config.state.add("main-menu", MainMenuState);
    config.state.add("level-master", LevelMasterState);
    config.state.add("level-intro", MainIntroState);
    config.state.add("level-round", LevelRoundState);
    config.state.start("boot");
  }
};

var wordArray = [
  "XML",
  "JSON",
  "OBJECT",
  "VARIABLE",
  "LET",
  "CONST",
  "PACKAGE",
  "TIM",
  "BODY",
  "LOCALHOST",
  "LINUX",
  "DB",
  "QUERY",
  "GET",
  "POST",
  "FETCH",
  "DELETE",
  "VIEWS",
  "SCHEMA",
  "PUSH",
  "BASH"
];

var currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var input = [];
var inputText;
var score = 0;
var scoreText;
var gameOver = false;
var keyQ;
var keyW;
var keyE;
var keyR;
var keyT;
var keyY;
var keyU;
var keyI;
var keyO;
var keyP;
var keyA;
var keyS;
var keyD;
var keyF;
var keyG;
var keyH;
var keyJ;
var keyK;
var keyL;
var keyZ;
var keyX;
var keyC;
var keyV;
var keyB;
var keyN;
var keyM;
// eslint-disable-next-line no-unused-vars
var characters;
var container;
var Enter;
// eslint-disable-next-line no-unused-vars
var speed;
var Backspace;
var gameOver = false;
var ships;

// eslint-disable-next-line no-unused-vars
var game = new Phaser.Game(config);

  // Creates a group of ships and iterates them over the screen.

  this.anims.create({
    key: "explode",
    frames: this.anims.generateFrameNumbers("explosion", { start: 0, end: 5 }),
    frameRate: 20,
    repeat: 0
  });

  ships = this.physics.add.group({
    key: "ship3",
    repeat: 11,
    setXY: { x: 12, y: 0, stepX: 70 }
  });

  // Collison effects for the ships and platform.
  this.physics.add.overlap(platforms, ships, endIt, null, this);
  this.physics.add.collider(ships, platforms, null, this);
  // Collison affect to call the end of game.
}

function update() {
  // Should end the curernt game.
  if (gameOver) {
    return;
  }

  // Display the entered words.

  inputText.setText("Current: " + input);
  // Inputs

  if (Phaser.Input.Keyboard.JustDown(Enter)) {
    // calls function to check if the entered letters are equal to the current word seleected.
    checkLogs(input, currentWord);
    // Reset the current word.
    currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    container.setText("Current: " + currentWord);
  }
  // Input takes the entered key and addds it to an aray.

  if (Phaser.Input.Keyboard.JustDown(keyQ)) {
    input.push("Q");
  }
  if (Phaser.Input.Keyboard.JustDown(keyW)) {
    input.push("W");
  }
  if (Phaser.Input.Keyboard.JustDown(keyE)) {
    input.push("E");
  }
  if (Phaser.Input.Keyboard.JustDown(keyR)) {
    input.push("R");
  }
  if (Phaser.Input.Keyboard.JustDown(keyT)) {
    input.push("T");
  }
  if (Phaser.Input.Keyboard.JustDown(keyY)) {
    input.push("Y");
  }
  if (Phaser.Input.Keyboard.JustDown(keyU)) {
    input.push("U");
  }
  if (Phaser.Input.Keyboard.JustDown(keyI)) {
    input.push("I");
  }
  if (Phaser.Input.Keyboard.JustDown(keyO)) {
    input.push("O");
  }
  if (Phaser.Input.Keyboard.JustDown(keyP)) {
    input.push("P");
  }
  if (Phaser.Input.Keyboard.JustDown(keyA)) {
    input.push("A");
  }
  if (Phaser.Input.Keyboard.JustDown(keyS)) {
    input.push("S");
  }
  if (Phaser.Input.Keyboard.JustDown(keyD)) {
    input.push("D");
  }
  if (Phaser.Input.Keyboard.JustDown(keyF)) {
    input.push("F");
  }
  if (Phaser.Input.Keyboard.JustDown(keyG)) {
    input.push("G");
  }
  if (Phaser.Input.Keyboard.JustDown(keyH)) {
    input.push("H");
  }
  if (Phaser.Input.Keyboard.JustDown(keyJ)) {
    input.push("J");
  }
  if (Phaser.Input.Keyboard.JustDown(keyK)) {
    input.push("K");
  }
  if (Phaser.Input.Keyboard.JustDown(keyL)) {
    input.push("L");
  }
  if (Phaser.Input.Keyboard.JustDown(keyZ)) {
    input.push("Z");
  }
  if (Phaser.Input.Keyboard.JustDown(keyX)) {
    input.push("X");
  }
  if (Phaser.Input.Keyboard.JustDown(keyC)) {
    input.push("C");
  }
  if (Phaser.Input.Keyboard.JustDown(keyV)) {
    input.push("V");
  }
  if (Phaser.Input.Keyboard.JustDown(keyB)) {
    input.push("B");
  }
  if (Phaser.Input.Keyboard.JustDown(keyN)) {
    input.push("N");
  }
  if (Phaser.Input.Keyboard.JustDown(keyM)) {
    input.push("M");
  }

  if (Phaser.Input.Keyboard.JustDown(Backspace)) {
    input.pop();
    console.log("removed");
  }
  // Function to check the letters entered vs. the current word selected from the array.
  function checkLogs(input, currentWord) {
    //  Joins the inputted text and changes it to a string.
    var x = input.join("");
    console.log(x);

    if (x === currentWord) {
      // Clears the input for the next word

      input.length = 0;

      // Increase and update score.
      score += 10;
      scoreText.setText("Score: " + score);
    } else {
      // On failuire the input also clears, there are a lot of hard words so, it seems cruel not to.
      input.length = 0;
    }
  }
}
function endIt(platform, ships) {
  this.physics.pause(ships);

  platform.setTint(0xff0000);
  // Set game over to true.
  gameOver = true;
  ships.setTexture("explosion");
  ships.anims.play("explode");
  gameOver = true;
}
