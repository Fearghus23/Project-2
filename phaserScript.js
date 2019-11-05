var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#010101',
  parent: 'phaser-example',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 5 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};


var wordArray =   
["XML", "JSON", "OBJECT", "VARIABLE", "LET", "CONST",
 "PACKAGE", "TIM", "BODY",
 "LOCALHOST", "LINUX", "DB", "QUERY", "GET", 
 "POST", "FETCH", "DELETE", "VIEWS",
 "SCHEMA", "PUSH", "BASH"];

var currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var input = [];
var inputText;
var score = 0;
var scoreText;
var current;
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
var characters;
var container;
var Enter;
var speed;
var Backspace;
var gameOver = false;
var ships; 

var game = new Phaser.Game(config);

function preload() {
  // Preloaded assets for the game sprites.
  this.load.image("background", "assets/testspace.jpg", { frameWidth: 16, frameHeight: 16 });
  this.load.spritesheet("ship", "assets/ship.png", { frameWidth: 16, frameHeight: 16 });
  this.load.spritesheet("ship2", "assets/ship2.png", { frameWidth: 32, frameHeight: 16 });
  this.load.spritesheet("ship3", "assets/ship3.png", { frameWidth: 32, frameHeight: 32 });
  this.load.spritesheet("explosion", "assets/explosion.png", { frameWidth: 16, frameHeight: 16 })
  this.load.image("base", "assets/platform.png")

}


function create() {
  console.log(currentWord);
  this.background = this.add.image(100, 100, "background");
  this.background.setScale(2);
  platforms = this.physics.add.staticGroup();
  platforms.create(400, 568, "base").setScale(2).refreshBody();

  // Text bars to display Score, Letters entered, and the current keyword. 
  scoreText = this.add.text(16, 16, 'score: 0', + { fontSize: '32px', fill: 'blue' });
  inputText = this.add.text(16, 35, "Current: ", { fontSize: '32px', fill: 'yellow' });
  container = this.add.text(300, 560, "Keyword: " + currentWord, { fontSize: "25px", fill: "#ffecf4" });




  // Creating inputs, binding them to keys. 

  keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
  keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
  keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
  keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
  keyY = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Y);
  keyU = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);
  keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
  keyO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
  keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
  keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
  keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
  keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
  keyH = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
  keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
  keyK = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
  keyL = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
  keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
  keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
  keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
  keyV = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);
  keyB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
  keyN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
  keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
  Enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
  Backspace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE);


  // Creates a group of ships and iterates them over the screen. 
 
 




   ships = this.physics.add.group({
    key: 'ship3',
    repeat: 11,
    setXY: { x: 12, y: 0, stepX: 70 }
  });

   // Collison effects for the ships and platform. 
   this.physics.add.collider(ships, platforms);
   // Collison affect to call the end of game. 
   this.physics.add.overlap(platforms, ships, endIt, this);
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

    input.push('Q')


  }
  if (Phaser.Input.Keyboard.JustDown(keyW)) {

    input.push('W');

  }
  if (Phaser.Input.Keyboard.JustDown(keyE)) {

    input.push('E');


  }
  if (Phaser.Input.Keyboard.JustDown(keyR)) {

    input.push('R');


  }
  if (Phaser.Input.Keyboard.JustDown(keyT)) {

    input.push('T');

  }
  if (Phaser.Input.Keyboard.JustDown(keyY)) {

    input.push('Y');

  }
  if (Phaser.Input.Keyboard.JustDown(keyU)) {

    input.push('U');

  }
  if (Phaser.Input.Keyboard.JustDown(keyI)) {

    input.push('I');

  }
  if (Phaser.Input.Keyboard.JustDown(keyO)) {

    input.push('O');
  }
  if (Phaser.Input.Keyboard.JustDown(keyP)) {

    input.push('P');
  }
  if (Phaser.Input.Keyboard.JustDown(keyA)) {

    input.push('A');
  }
  if (Phaser.Input.Keyboard.JustDown(keyS)) {

    input.push('S');
  }
  if (Phaser.Input.Keyboard.JustDown(keyD)) {

    input.push('D');
  }
  if (Phaser.Input.Keyboard.JustDown(keyF)) {

    input.push('F');
  }
  if (Phaser.Input.Keyboard.JustDown(keyG)) {

    input.push('G');
  }
  if (Phaser.Input.Keyboard.JustDown(keyH)) {

    input.push('H');
  }
  if (Phaser.Input.Keyboard.JustDown(keyJ)) {

    input.push('J');
  }
  if (Phaser.Input.Keyboard.JustDown(keyK)) {

    input.push('K');
  }
  if (Phaser.Input.Keyboard.JustDown(keyL)) {

    input.push('L');
  }
  if (Phaser.Input.Keyboard.JustDown(keyZ)) {

    input.push('Z');
  }
  if (Phaser.Input.Keyboard.JustDown(keyX)) {

    input.push('X');
  }
  if (Phaser.Input.Keyboard.JustDown(keyC)) {

    input.push('C');
  }
  if (Phaser.Input.Keyboard.JustDown(keyV)) {

    input.push('V');
  }
  if (Phaser.Input.Keyboard.JustDown(keyB)) {

    input.push('B');
  }
  if (Phaser.Input.Keyboard.JustDown(keyN)) {

    input.push('N');

  }
  if (Phaser.Input.Keyboard.JustDown(keyM)) {

    input.push('M');


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

    if (x == currentWord) {


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
  this.physic.pause();

  platform.setTint(0xff0000);
  // Set game over to true. 
  gameOver = true;
  ship.setTexture("explosion");
  ship.play("explode");
  gameOver = true;
}

function endIt(platform, ships) {
  this.physic.pause();

  platform.setTint(0xff0000);
  // Set game over to true. 
  gameOver = true;
  ship.setTexture("explosion");
  ship.play("explode");
  gameOver = true;
}


