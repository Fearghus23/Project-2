var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: true
      }
  },
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

var currentWord = [];
var input = [];



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


var game = new Phaser.Game(config);



function preload() {
  this.load.image('background', 'assets/sky.png');
  this.load.image('bomb', 'assets/bomb.png');



}



function create() {


  // Inputs
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
  var inputText;
  var score = 0;
  var scoreText;

  var image1 = this.add.image(0, -30, 'bomb');
  var image2 = this.add.text(-40, 30, 'bomb');
  var image3 = this.add.image(40, 30, 'bomb');

  container = this.add.container(400, 200, [image1, image2, image3]);

  //  A Container has a default size of 0x0, so we need to give it a size before enabling a physics
  //  body or it'll be given the default body size of 64x64.
  container.setSize(128, 64);

  this.physics.world.enable(container);

  container.body.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true);









  // Already entered letters: 


}

function update() {
  this.add.image(400, 300, 'background');

  this.add.image('bomb');


  if (container.body.velocity.x < 0) {
      container.rotation -= 0.02;
  }
  else {
      container.rotation += 0.02;
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
      inputText.setText(input);
  }
  if (Phaser.Input.Keyboard.JustDown(keyM)) {

      input.push('M');
      console.log(input);

      inputText.setText(input);
  }

  scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
  inputText = this.add.text(16, 35, 'Entered Letters: ' + input, { fontSize: '32px', fill: '#000' });





}