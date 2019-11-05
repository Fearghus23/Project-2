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

var container;
var wordArray = ["HTML", "GIT", "CSS", "JAVASCRIPT", "JQUERY", "NODE", "NPM", "INSTALL", "GITHUB",
  "ESLINT", "COMMIT", "MYSQL", "VSCODE", "ID", "CLASS", "STYLESHEET", "HANDLEBARS", "REACT", "VUE", "SERVER", "SEQUELIZE",
  "XML", "JSON", "OBJECT", "VARIABLE", "LET", "CONST", "PACKAGE", "TIM"];
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

var game = new Phaser.Game(config);

function preload() {
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
  scoreText = this.add.text(16, 16, 'score: 0', + { fontSize: '32px', fill: 'blue' });
  inputText = this.add.text(16, 35, "Current: ", { fontSize: '32px', fill: 'yellow' });
  container = this.add.text(300, 560, "Keyword: " + currentWord, { fontSize: "25px", fill: "#ffecf4" });





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



  this.ships = this.physics.add.group({
    key: 'ship3',
    repeat: 11,
    setXY: { x: 12, y: 0, stepX: 70 }
  });


  this.physics.add.collider(this.ships, platforms);

  this.physics.add.overlap(platforms, this.ships, null, this);





}

function update() {

  if (gameOver) {
    return;
  }


  function endIt(platform, ships) {
    this.physic.pause();

    platform.setTint(0xff0000);

    gameOver = true;
    ship.setTexture("explosion");
    ship.play("explode");
  }

  // Display the entered words. 

  inputText.setText("Current: " + input);


  // Inputs

  if (Phaser.Input.Keyboard.JustDown(Enter)) {
    checkLogs(input, currentWord);
    currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    container.setText("Current: " + currentWord);





  }

  if (Phaser.Input.Keyboard.JustDown(keyQ)) {

    input.push('Q')
    console.log(input);

  }
  if (Phaser.Input.Keyboard.JustDown(keyW)) {

    input.push('W');
    console.log(input);
  }
  if (Phaser.Input.Keyboard.JustDown(keyE)) {

    input.push('E');
    console.log(input);

  }
  if (Phaser.Input.Keyboard.JustDown(keyR)) {

    input.push('R');
    console.log(input);

  }
  if (Phaser.Input.Keyboard.JustDown(keyT)) {

    input.push('T');
    console.log(input);
  }
  if (Phaser.Input.Keyboard.JustDown(keyY)) {

    input.push('Y');
    console.log(input);
  }
  if (Phaser.Input.Keyboard.JustDown(keyU)) {

    input.push('U');
    console.log(input);
  }
  if (Phaser.Input.Keyboard.JustDown(keyI)) {

    input.push('I');
    console.log(input);
  }
  if (Phaser.Input.Keyboard.JustDown(keyO)) {

    input.push('O');
    console.log(input);
  }
  if (Phaser.Input.Keyboard.JustDown(keyP)) {

    input.push('P');
    console.log(input);
  }
  if (Phaser.Input.Keyboard.JustDown(keyA)) {

    input.push('A');
    console.log(input);
  }
  if (Phaser.Input.Keyboard.JustDown(keyS)) {

    input.push('S');
    console.log(input);
  }
  if (Phaser.Input.Keyboard.JustDown(keyD)) {

    input.push('D');
    console.log(input);
  }
  if (Phaser.Input.Keyboard.JustDown(keyF)) {

    input.push('F');
    console.log(input);
  }
  if (Phaser.Input.Keyboard.JustDown(keyG)) {

    input.push('G');
    console.log(input);
  }
  if (Phaser.Input.Keyboard.JustDown(keyH)) {

    input.push('H');
    console.log(input);
  }
  if (Phaser.Input.Keyboard.JustDown(keyJ)) {

    input.push('J');
    console.log(input);
  }
  if (Phaser.Input.Keyboard.JustDown(keyK)) {

    input.push('K');
    console.log(input);
  }
  if (Phaser.Input.Keyboard.JustDown(keyL)) {

    input.push('L');
    console.log(input);
  }
  if (Phaser.Input.Keyboard.JustDown(keyZ)) {

    input.push('Z');
    console.log(input);
  }
  if (Phaser.Input.Keyboard.JustDown(keyX)) {

    input.push('X');
    console.log(input);
  }
  if (Phaser.Input.Keyboard.JustDown(keyC)) {

    input.push('C');
    console.log(input);
  }
  if (Phaser.Input.Keyboard.JustDown(keyV)) {

    input.push('V');
    console.log(input);
  }
  if (Phaser.Input.Keyboard.JustDown(keyB)) {

    input.push('B');
    console.log(input);
  }
  if (Phaser.Input.Keyboard.JustDown(keyN)) {

    input.push('N');
    console.log(input);

  }
  if (Phaser.Input.Keyboard.JustDown(keyM)) {

    input.push('M');
    console.log(input);


  }

  if (Phaser.Input.Keyboard.JustDown(Backspace)) {
    input.pop();
    console.log("removed");
  }

  function checkLogs(input, currentWord) {



    var x = input.join("");
    console.log(x);

    if (x == currentWord) {



      console.log(input);
      input.length = 0;
      console.log('correct');


      score += 10;
      scoreText.setText("Score: " + score);


      // ships.disableBody(true, true); 






    } else {
      input.length = 0;
      console.log('NO');


    }




  }

}



