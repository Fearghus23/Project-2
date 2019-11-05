// eslint-disable-next-line no-empty-function
function Boot() {}

Boot.prototype = {
  preload: function() {
    this.load.preload(prototype);
  },
  create: function() {
    console.log(currentWord);
    this.background = this.add.image(100, 100, "background");
    this.background.setScale(2);
    platforms = this.physics.add.staticGroup();
    platforms
      .create(400, 568, "base")
      .setScale(2)
      .refreshBody();

    // Text bars to display Score, Letters entered, and the current keyword.
    scoreText = this.add.text(
      16,
      16,
      "score: 0",
      +{ fontSize: "32px", fill: "blue" }
    );
    inputText = this.add.text(16, 35, "Current: ", {
      fontSize: "32px",
      fill: "yellow"
    });
    container = this.add.text(300, 560, "Keyword: " + currentWord, {
      fontSize: "25px",
      fill: "#ffecf4"
    });

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
    Backspace = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.BACKSPACE
    );
    this.game.state.start("preload");
  }
};
